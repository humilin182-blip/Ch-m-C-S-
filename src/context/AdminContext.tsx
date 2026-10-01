import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Match, League } from '../types/football';
import { LEAGUES_DATA } from '../data/mockFootballData';

export const ADMIN_EMAIL = 'humilin182@gmail.com';
export const DEFAULT_ADMIN_PASSWORD = 'humilin182';

export interface UserProfile {
  email: string;
  name: string;
  avatar?: string;
  isAdmin: boolean;
}

interface AdminContextType {
  // Authentication & Admin identity
  currentUser: UserProfile | null;
  isAdmin: boolean;
  adminEmail: string;
  loginWithEmail: (email: string, name?: string, password?: string) => { success: boolean; error?: string };
  logout: () => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;

  // Leagues Management (Synchronized across all servers & devices)
  leagues: League[];
  deletedLeagueIds: string[];
  addLeague: (league: League) => Promise<void>;
  updateLeague: (leagueId: string, updated: Partial<League>) => Promise<void>;
  deleteLeague: (leagueId: string) => Promise<void>;

  // Matches Management
  customMatches: Match[];
  editedMatches: Record<string, Partial<Match>>;
  deletedMatchIds: string[];
  addMatch: (match: Match) => Promise<void>;
  updateMatch: (matchId: string, updated: Partial<Match>) => Promise<void>;
  deleteMatch: (matchId: string) => Promise<void>;
  resetAllAdminData: () => Promise<void>;

  // Apply admin edits and deletions to any matches list
  processMatchesWithAdmin: (baseMatches: Match[]) => Match[];

  // Modals management
  editingMatch: Match | null;
  setEditingMatch: (match: Match | null) => void;
  isAdminCenterOpen: boolean;
  setIsAdminCenterOpen: (open: boolean) => void;

  // Sync status
  isSyncing: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const STORAGE_KEY_USER_PROFILE = 'chamco_user_profile_v4';
const STORAGE_KEY_ADMIN_LEAGUES = 'chamco_admin_leagues_v4';
const STORAGE_KEY_DELETED_LEAGUES = 'chamco_deleted_leagues_v4';

// Helper to ensure 'Champion leauge' is consistently named
const sanitizeAndMigrateLeagues = (list: League[]): League[] => {
  return list.map((lg) => {
    if (
      lg.id === 'ucl' ||
      lg.name?.toLowerCase().includes('champions league') ||
      lg.name?.toLowerCase().includes('cúp c1') ||
      lg.shortName?.toLowerCase() === 'ucl'
    ) {
      return {
        ...lg,
        name: 'Champion leauge',
        shortName: 'Champion leauge',
        flag: lg.flag || '⭐'
      };
    }
    return lg;
  });
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Current user session: Default is humilin182@gmail.com (the owner & Admin)
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_USER_PROFILE);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed.email === 'string') {
          return {
            ...parsed,
            isAdmin: parsed.email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase()
          };
        }
      }
    } catch (e) {
      console.warn('Cannot load user profile:', e);
    }
    return {
      email: ADMIN_EMAIL,
      name: 'Huy Admin (humilin182)',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80',
      isAdmin: true
    };
  });

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem(STORAGE_KEY_USER_PROFILE, JSON.stringify(currentUser));
      } else {
        localStorage.removeItem(STORAGE_KEY_USER_PROFILE);
      }
    } catch (e) {
      console.warn('Cannot persist user profile:', e);
    }
  }, [currentUser]);

  // isAdmin is strictly true ONLY when logged in with humilin182@gmail.com
  const isAdmin = Boolean(
    currentUser &&
    currentUser.email.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase()
  );

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);

  // Deleted leagues list (vleague is permanently deleted)
  const [deletedLeagueIds, setDeletedLeagueIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_DELETED_LEAGUES);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          return Array.from(new Set([...parsed, 'vleague']));
        }
      }
    } catch {
      // fallback
    }
    return ['vleague'];
  });

  // Leagues state (excludes any deletedLeagueIds including vleague)
  const [leagues, setLeagues] = useState<League[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ADMIN_LEAGUES);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return sanitizeAndMigrateLeagues(parsed).filter((l) => l.id !== 'vleague');
        }
      }
    } catch (e) {
      console.warn('Cannot load stored leagues:', e);
    }
    return sanitizeAndMigrateLeagues(LEAGUES_DATA).filter((l) => l.id !== 'vleague');
  });

  // Matches state
  const [customMatches, setCustomMatches] = useState<Match[]>([]);
  const [editedMatches, setEditedMatches] = useState<Record<string, Partial<Match>>>({});
  const [deletedMatchIds, setDeletedMatchIds] = useState<string[]>([]);

  // Fetch shared server state (cross-server sync)
  const syncFromServer = useCallback(async () => {
    try {
      const res = await fetch('/api/admin/data');
      if (!res.ok) return;
      const data = await res.json();
      if (data && data.success) {
        if (Array.isArray(data.leagues)) {
          const sanitized = sanitizeAndMigrateLeagues(data.leagues);
          setLeagues(sanitized);
          localStorage.setItem(STORAGE_KEY_ADMIN_LEAGUES, JSON.stringify(sanitized));
        }
        if (Array.isArray(data.deletedLeagueIds)) {
          setDeletedLeagueIds(data.deletedLeagueIds);
          localStorage.setItem(STORAGE_KEY_DELETED_LEAGUES, JSON.stringify(data.deletedLeagueIds));
        }
        if (Array.isArray(data.customMatches)) {
          setCustomMatches(data.customMatches);
        }
        if (data.editedMatches && typeof data.editedMatches === 'object') {
          setEditedMatches(data.editedMatches);
        }
        if (Array.isArray(data.deletedMatchIds)) {
          setDeletedMatchIds(data.deletedMatchIds);
        }
      }
    } catch (err) {
      // Network or dev server offline, safely rely on local state
    }
  }, []);

  // Polling server every 4 seconds to sync changes made on other servers/browsers
  useEffect(() => {
    syncFromServer();
    const interval = setInterval(syncFromServer, 4000);
    return () => clearInterval(interval);
  }, [syncFromServer]);

  // Execute admin action on the server
  const sendAdminAction = async (action: string, payload: any) => {
    if (!isAdmin || !currentUser) {
      console.warn('Chỉ tài khoản admin humilin182@gmail.com mới có quyền thực hiện thao tác này!');
      return false;
    }

    setIsSyncing(true);
    try {
      const res = await fetch('/api/admin/action', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: currentUser.email,
          action,
          payload
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        if (Array.isArray(data.leagues)) {
          const sanitized = sanitizeAndMigrateLeagues(data.leagues);
          setLeagues(sanitized);
          localStorage.setItem(STORAGE_KEY_ADMIN_LEAGUES, JSON.stringify(sanitized));
        }
        if (Array.isArray(data.deletedLeagueIds)) {
          setDeletedLeagueIds(data.deletedLeagueIds);
          localStorage.setItem(STORAGE_KEY_DELETED_LEAGUES, JSON.stringify(data.deletedLeagueIds));
        }
        if (Array.isArray(data.customMatches)) setCustomMatches(data.customMatches);
        if (data.editedMatches) setEditedMatches(data.editedMatches);
        if (Array.isArray(data.deletedMatchIds)) setDeletedMatchIds(data.deletedMatchIds);
        return true;
      } else {
        console.warn(data.error || 'Thao tác không thành công trên máy chủ!');
        return false;
      }
    } catch (err) {
      console.warn('Network error while syncing action to server:', err);
      return false;
    } finally {
      setIsSyncing(false);
    }
  };

  const loginWithEmail = (email: string, name?: string, password?: string) => {
    const cleanEmail = email.trim().toLowerCase();
    const isUserAdmin = cleanEmail === ADMIN_EMAIL.toLowerCase();

    if (isUserAdmin) {
      // Verify admin password
      if (password && password !== DEFAULT_ADMIN_PASSWORD) {
        return { success: false, error: 'Mật khẩu quản trị viên không chính xác!' };
      }
    }

    const profile: UserProfile = {
      email: cleanEmail,
      name: name?.trim() || (isUserAdmin ? 'Huy Admin (humilin182)' : cleanEmail.split('@')[0]),
      avatar: isUserAdmin
        ? 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80'
        : 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=80',
      isAdmin: isUserAdmin
    };

    setCurrentUser(profile);
    return { success: true };
  };

  const logout = () => {
    setCurrentUser(null);
  };

  // League Operations
  const addLeague = async (newLeague: League) => {
    if (!isAdmin) {
      console.warn('Chỉ tài khoản admin humilin182@gmail.com mới có quyền thêm giải đấu!');
      return;
    }
    setLeagues((prev) => {
      if (prev.some((l) => l.id === newLeague.id)) return prev;
      return [...prev, newLeague];
    });
    setDeletedLeagueIds((prev) => prev.filter((id) => id !== newLeague.id));
    await sendAdminAction('ADD_LEAGUE', newLeague);
  };

  const updateLeague = async (leagueId: string, updated: Partial<League>) => {
    if (!isAdmin) {
      console.warn('Chỉ tài khoản admin humilin182@gmail.com mới có quyền chỉnh sửa giải đấu!');
      return;
    }
    setLeagues((prev) =>
      prev.map((l) => (l.id === leagueId ? { ...l, ...updated } : l))
    );
    await sendAdminAction('UPDATE_LEAGUE', { leagueId, updated });
  };

  const deleteLeague = async (leagueId: string) => {
    if (!isAdmin) {
      console.warn('Chỉ tài khoản admin humilin182@gmail.com mới có quyền xóa giải đấu!');
      return;
    }

    // 1. Remove from local leagues list
    setLeagues((prev) => {
      const next = prev.filter((l) => l.id !== leagueId);
      try {
        localStorage.setItem(STORAGE_KEY_ADMIN_LEAGUES, JSON.stringify(next));
      } catch {}
      return next;
    });

    // 2. Add to deletedLeagueIds so it is completely erased everywhere
    setDeletedLeagueIds((prev) => {
      const next = prev.includes(leagueId) ? prev : [...prev, leagueId];
      try {
        localStorage.setItem(STORAGE_KEY_DELETED_LEAGUES, JSON.stringify(next));
      } catch {}
      return next;
    });

    // 3. Remove all matches of that league
    setCustomMatches((prev) => prev.filter((m) => m.leagueId !== leagueId));

    // 4. Broadcast & persist to server so other servers/browsers never show it
    await sendAdminAction('DELETE_LEAGUE', { leagueId });
  };

  // Match Operations
  const addMatch = async (newMatch: Match) => {
    if (!isAdmin) {
      console.warn('Chỉ tài khoản admin humilin182@gmail.com mới có quyền thêm trận đấu!');
      return;
    }
    setCustomMatches((prev) => [newMatch, ...prev]);
    await sendAdminAction('ADD_MATCH', newMatch);
  };

  const updateMatch = async (matchId: string, updated: Partial<Match>) => {
    if (!isAdmin) {
      console.warn('Chỉ tài khoản admin humilin182@gmail.com mới có quyền sửa trận đấu!');
      return;
    }
    if (customMatches.some((m) => m.id === matchId)) {
      setCustomMatches((prev) =>
        prev.map((m) => (m.id === matchId ? { ...m, ...updated } : m))
      );
    } else {
      setEditedMatches((prev) => ({
        ...prev,
        [matchId]: { ...(prev[matchId] || {}), ...updated }
      }));
    }
    await sendAdminAction('UPDATE_MATCH', { matchId, updated });
  };

  const deleteMatch = async (matchId: string) => {
    if (!isAdmin) {
      console.warn('Chỉ tài khoản admin humilin182@gmail.com mới có quyền xóa trận đấu!');
      return;
    }
    setCustomMatches((prev) => prev.filter((m) => m.id !== matchId));
    setDeletedMatchIds((prev) => (prev.includes(matchId) ? prev : [...prev, matchId]));
    setEditedMatches((prev) => {
      const next = { ...prev };
      delete next[matchId];
      return next;
    });
    await sendAdminAction('DELETE_MATCH', { matchId });
  };

  const resetAllAdminData = async () => {
    if (!isAdmin) {
      console.warn('Chỉ tài khoản admin humilin182@gmail.com mới có quyền đặt lại dữ liệu!');
      return;
    }
    setLeagues(sanitizeAndMigrateLeagues(LEAGUES_DATA));
    setDeletedLeagueIds([]);
    setCustomMatches([]);
    setEditedMatches({});
    setDeletedMatchIds([]);
    await sendAdminAction('RESET_ALL', {});
  };

  // Filter and apply admin edits to match list:
  // If a league is deleted, all of its matches are completely excluded!
  const processMatchesWithAdmin = (baseMatches: Match[]): Match[] => {
    const deletedMatchesSet = new Set(deletedMatchIds);
    const deletedLeaguesSet = new Set(deletedLeagueIds);
    const activeLeagueIdsSet = new Set(leagues.map((l) => l.id));

    const combined = [...customMatches, ...baseMatches].filter(
      (m) =>
        !deletedMatchesSet.has(m.id) &&
        !deletedLeaguesSet.has(m.leagueId) &&
        activeLeagueIdsSet.has(m.leagueId)
    );

    return combined.map((m) => {
      const override = editedMatches[m.id];
      if (!override) return m;
      return {
        ...m,
        ...override,
        homeTeam: { ...m.homeTeam, ...(override.homeTeam || {}) },
        awayTeam: { ...m.awayTeam, ...(override.awayTeam || {}) }
      };
    });
  };

  const [editingMatch, setEditingMatch] = useState<Match | null>(null);
  const [isAdminCenterOpen, setIsAdminCenterOpen] = useState(false);

  return (
    <AdminContext.Provider
      value={{
        currentUser,
        isAdmin,
        adminEmail: ADMIN_EMAIL,
        loginWithEmail,
        logout,
        isAuthModalOpen,
        setIsAuthModalOpen,
        leagues,
        deletedLeagueIds,
        addLeague,
        updateLeague,
        deleteLeague,
        customMatches,
        editedMatches,
        deletedMatchIds,
        addMatch,
        updateMatch,
        deleteMatch,
        resetAllAdminData,
        processMatchesWithAdmin,
        editingMatch,
        setEditingMatch,
        isAdminCenterOpen,
        setIsAdminCenterOpen,
        isSyncing
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const ctx = useContext(AdminContext);
  if (!ctx) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return ctx;
};
