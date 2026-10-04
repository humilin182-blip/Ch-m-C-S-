import React, { useState, useEffect, useRef } from 'react';
import {
  HIGHLIGHTS_DATA,
  INITIAL_COMMUNITY_MESSAGES
} from './data/mockFootballData';
import { Match, LeagueId, CommunityMessage } from './types/football';
import { fetchAllLeaguesMatches } from './services/footballApi';
import { playGoalSound } from './services/soundEffects';
import { Header } from './components/Header';
import { HeroPitchBanner } from './components/HeroPitchBanner';
import { LiveScoreTicker } from './components/LiveScoreTicker';
import { MatchDetailModal } from './components/MatchDetailModal';
import { HighlightsSection } from './components/HighlightsSection';
import { StandingsSection } from './components/StandingsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { ExpertAnalysisSection } from './components/ExpertAnalysisSection';
import { PredictionGameModal } from './components/PredictionGameModal';
import { NotificationSettingsModal } from './components/NotificationSettingsModal';
import { ThemeCustomizerModal } from './components/ThemeCustomizerModal';
import { CustomImageConfig } from './types/theme';
import { GoalAlertBanner, GoalAlertData } from './components/GoalAlertBanner';
import { RefreshCw } from 'lucide-react';
import { useAdmin } from './context/AdminContext';
import { AdminCenterModal } from './components/AdminCenterModal';
import { EditMatchModal } from './components/EditMatchModal';
import { AuthModal } from './components/AuthModal';
import { BottomMobileNav } from './components/BottomMobileNav';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('scores');
  // Enforce CyberPitch Dark Mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [matches, setMatches] = useState<Match[]>([]);
  const [isLoadingMatches, setIsLoadingMatches] = useState<boolean>(true);
  const [isSyncing, setIsSyncing] = useState<boolean>(false);
  const [refreshCountdown, setRefreshCountdown] = useState<number>(30);
  const [selectedLeague, setSelectedLeague] = useState<LeagueId | 'all'>('all');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'SCHEDULED' | 'FINISHED'>('ALL');
  const [favorites, setFavorites] = useState<string[]>([]);

  // Modals state
  const [activeMatchDetail, setActiveMatchDetail] = useState<Match | null>(null);
  const [isPredictionsOpen, setIsPredictionsOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);

  // Custom UI Images & Background Configuration with localStorage persistence
  const [themeConfig, setThemeConfig] = useState<CustomImageConfig>(() => {
    try {
      const saved = localStorage.getItem('chamcoso_custom_image_config');
      if (saved) return JSON.parse(saved);
    } catch {
      // Ignore parse/storage issues
    }
    return {
      bannerImage: null,
      bannerOverlayOpacity: 0.45,
      appBgImage: null,
      appBgOpacity: 0.15,
      enableParticles: true
    };
  });

  const handleSaveThemeConfig = (newConfig: CustomImageConfig) => {
    setThemeConfig(newConfig);
    try {
      localStorage.setItem('chamcoso_custom_image_config', JSON.stringify(newConfig));
    } catch (e) {
      console.warn('Cannot persist custom theme to localStorage:', e);
    }
  };

  const handleResetThemeDefault = () => {
    const defaultConfig: CustomImageConfig = {
      bannerImage: null,
      bannerOverlayOpacity: 0.45,
      appBgImage: null,
      appBgOpacity: 0.15,
      enableParticles: true
    };
    setThemeConfig(defaultConfig);
    try {
      localStorage.removeItem('chamcoso_custom_image_config');
    } catch (e) {
      console.warn('Cannot clear custom theme from localStorage:', e);
    }
  };

  // Notification leagues subscription
  const [subscribedLeagues, setSubscribedLeagues] = useState<LeagueId[]>([
    'ucl',
    'unl',
    'epl',
    'laliga'
  ]);

  // Live Goal Alert Banner
  const [currentGoalAlert, setCurrentGoalAlert] = useState<GoalAlertData | null>(null);

  // Community Chat Messages
  const [communityMessages, setCommunityMessages] = useState<CommunityMessage[]>(
    INITIAL_COMMUNITY_MESSAGES
  );

  // Keep track of previous matches to detect new live goals
  const prevMatchesRef = useRef<Match[]>([]);

  // Fetch real matches from Football API
  const loadMatches = async (isBackground = false) => {
    if (!isBackground) setIsLoadingMatches(true);
    setIsSyncing(true);

    try {
      const realMatches = await fetchAllLeaguesMatches();

      // Check if any match scored a goal during background refresh
      if (prevMatchesRef.current.length > 0 && realMatches.length > 0) {
        for (const newM of realMatches) {
          const oldM = prevMatchesRef.current.find((m) => m.id === newM.id);
          if (oldM && newM.status === 'LIVE') {
            const homeScored = newM.homeTeam.score > oldM.homeTeam.score;
            const awayScored = newM.awayTeam.score > oldM.awayTeam.score;

            if (homeScored || awayScored) {
              const scoringTeam = homeScored ? newM.homeTeam : newM.awayTeam;
              const latestEvent = newM.events.find(
                (e) => (e.type === 'GOAL' || e.type === 'PENALTY_GOAL') && e.team === (homeScored ? 'home' : 'away')
              );

              playGoalSound();
              setCurrentGoalAlert({
                id: `goal-${Date.now()}`,
                matchTitle: `${newM.homeTeam.shortName} vs ${newM.awayTeam.shortName}`,
                leagueName: newM.round,
                teamName: scoringTeam.name,
                playerName: latestEvent?.player || scoringTeam.name,
                minute: newM.minute || 85,
                newScore: `${newM.homeTeam.score} - ${newM.awayTeam.score}`,
                assistPlayer: latestEvent?.assistPlayer,
                onViewDetails: () => setActiveMatchDetail(newM)
              });
              break;
            }
          }
        }
      }

      setMatches(realMatches);
      prevMatchesRef.current = realMatches;
    } catch (err) {
      console.error('Error fetching live matches:', err);
    } finally {
      setIsLoadingMatches(false);
      setIsSyncing(false);
      setRefreshCountdown(30);
    }
  };

  // Initial load
  useEffect(() => {
    loadMatches();
  }, []);

  // 30-Second Real-Time Live Auto-Update Interval
  useEffect(() => {
    const countdownTimer = setInterval(() => {
      setRefreshCountdown((prev) => {
        if (prev <= 1) {
          loadMatches(true);
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdownTimer);
  }, []);

  // Toggle favorite match
  const handleToggleFavorite = (matchId: string) => {
    setFavorites((prev) =>
      prev.includes(matchId) ? prev.filter((id) => id !== matchId) : [...prev, matchId]
    );
  };

  // Toggle subscribed league for notifications
  const handleToggleSubscribedLeague = (leagueId: LeagueId) => {
    setSubscribedLeagues((prev) =>
      prev.includes(leagueId) ? prev.filter((id) => id !== leagueId) : [...prev, leagueId]
    );
  };

  // Handle new community message
  const handleSendMessage = (matchId: string, content: string, fanOf: string) => {
    const newMsg: CommunityMessage = {
      id: `msg-${Date.now()}`,
      matchId,
      user: 'Bạn (Fan Việt Nam)',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=64&q=80',
      fanOf,
      content,
      timestamp: 'Vừa xong',
      reactionCount: 1,
      userLiked: true
    };
    setCommunityMessages((prev) => [newMsg, ...prev]);
  };

  const {
    currentUser,
    isAdmin,
    processMatchesWithAdmin,
    isAdminCenterOpen,
    setIsAdminCenterOpen,
    editingMatch,
    setEditingMatch,
    isAuthModalOpen,
    setIsAuthModalOpen
  } = useAdmin();

  // Prompt new visitors to log in with Google or Email on first visit
  useEffect(() => {
    try {
      const hasPrompted = sessionStorage.getItem('chamco_login_prompted');
      if (!hasPrompted && !currentUser) {
        sessionStorage.setItem('chamco_login_prompted', 'true');
        const timer = setTimeout(() => {
          setIsAuthModalOpen(true);
        }, 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // ignore
    }
  }, [currentUser, setIsAuthModalOpen]);

  const displayMatches = processMatchesWithAdmin(matches).filter((m) => m.status !== 'LIVE');
  const featuredMatch = displayMatches.find((m) => m.status === 'SCHEDULED') || displayMatches[0];

  return (
    <div
      className={`relative min-h-screen transition-colors ${
        isDarkMode
          ? 'bg-[#080d16] text-slate-100'
          : 'bg-[#f4f7fb] text-slate-900'
      }`}
    >
      {/* Optional Customized Full-Page Wallpaper from User Files / Album */}
      {themeConfig.appBgImage && (
        <div
          className="fixed inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-500"
          style={{
            backgroundImage: `url(${themeConfig.appBgImage})`,
            opacity: themeConfig.appBgOpacity
          }}
        />
      )}

      {/* Top Header Bar */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        onOpenNotifications={() => setIsNotificationsOpen(true)}
        onOpenPredictions={() => setIsPredictionsOpen(true)}
        onOpenCustomizer={() => setIsCustomizerOpen(true)}
        onOpenAdmin={() => setIsAdminCenterOpen(true)}
        onOpenAuth={() => setIsAuthModalOpen(true)}
        liveMatchCount={0}
      />

      {/* Floating Goal Alert Banner with procedural audio */}
      <GoalAlertBanner
        alert={currentGoalAlert}
        onClose={() => setCurrentGoalAlert(null)}
      />

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-4 sm:py-6 space-y-6 sm:space-y-8 pb-28 lg:pb-12">
        {/* Welcome & Login Requirement Banner for Guests */}
        {!currentUser && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-amber-950/60 via-slate-900 to-emerald-950/60 border border-amber-500/40 shadow-lg animate-fadeIn">
            <div className="flex items-center gap-3 text-left">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-xl shrink-0">
                🔐
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-white">
                    Yêu cầu đăng nhập Google hoặc Email để cá nhân hóa
                  </span>
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-bold">
                    Quyền Admin
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 mt-0.5">
                  Tất cả mọi người chỉ có quyền xem. Duy nhất tài khoản <strong className="text-amber-300 font-mono">humilin182@gmail.com</strong> đăng nhập trên bất kỳ máy nào sẽ có quyền <strong>Quản Trị Viên (Admin)</strong> để thêm/sửa/xóa trận đấu và xóa giải đấu vĩnh viễn.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:brightness-110 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer transition-all hover:scale-[1.02]"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Đăng nhập Google / Email</span>
              </button>
            </div>
          </div>
        )}

        {/* Hero Pitch Visual Banner */}
        <HeroPitchBanner
          featuredMatch={featuredMatch}
          onSelectMatch={(m) => setActiveMatchDetail(m)}
          onOpenHighlights={() => setActiveTab('highlights')}
          onOpenSchedule={() => setActiveTab('schedule')}
          customBannerImage={themeConfig.bannerImage}
          bannerOverlayOpacity={themeConfig.bannerOverlayOpacity}
          onOpenCustomizer={() => setIsCustomizerOpen(true)}
        />

        {/* Quick Access Notification Bar for Newly Updated Schedule */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-emerald-950/70 via-slate-900 to-cyan-950/70 border border-emerald-500/40 shadow-lg">
          <div className="flex items-center gap-3 text-left">
            <span className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-lg shrink-0">
              ⚡
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-bold text-white">
                  Đã cập nhật: Địa chấn Croatia 0 - 7 Anh, TBN 3 - 1 CH Séc, Pháp 1 - 1 Ý & Lịch đấu rạng sáng 05/10!
                </span>
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                  Mới Nhất
                </span>
              </div>
              <p className="text-[11px] text-slate-300 mt-0.5">
                Các trận cầu đỉnh cao Nations League vừa kết thúc và lịch đấu đêm nay/rạng sáng 05/10 lúc 01h45: <strong className="text-amber-300">Bồ Đào Nha vs Na Uy (Ronaldo vs Haaland)</strong>, Hà Lan vs Serbia, Hy Lạp vs Đức, Wales vs Đan Mạch!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('schedule')}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-lg font-bold text-xs transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md ${
                activeTab === 'schedule'
                  ? 'bg-emerald-500 text-slate-950'
                  : 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 hover:scale-[1.02]'
              }`}
            >
              <span>{activeTab === 'schedule' ? '✓ Đang xem lịch thi đấu' : '👉 Xem Lịch Thi Đấu & Đếm Ngược'}</span>
            </button>
            {activeTab === 'schedule' && (
              <button
                onClick={() => setActiveTab('scores')}
                className="px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-colors"
              >
                Về trang chủ
              </button>
            )}
          </div>
        </div>

        {/* View Switcher based on Active Tab */}
        {activeTab === 'scores' && (
          <>
            {isLoadingMatches && displayMatches.length === 0 ? (
              <div className="p-16 rounded-2xl bg-[#09111e] border border-slate-800 text-center space-y-4">
                <RefreshCw className="w-8 h-8 text-emerald-400 animate-spin mx-auto" />
                <h3 className="text-sm font-bold text-white">
                  Đang đồng bộ tỉ số trực tiếp từ Football API...
                </h3>
                <p className="text-xs text-slate-400">
                  Lấy dữ liệu thời gian thực các giải đấu Champion leauge, Premier League, La Liga, Serie A, Bundesliga...
                </p>
              </div>
            ) : (
              <LiveScoreTicker
                matches={displayMatches}
                selectedLeague={selectedLeague}
                setSelectedLeague={setSelectedLeague}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                favorites={favorites}
                toggleFavorite={handleToggleFavorite}
                onSelectMatch={(m) => setActiveMatchDetail(m)}
                onOpenHighlights={() => setActiveTab('highlights')}
                onOpenAnalysis={() => setActiveTab('analysis')}
                onManualRefresh={() => loadMatches(false)}
                refreshCountdown={refreshCountdown}
                isSyncing={isSyncing}
              />
            )}
          </>
        )}

        {activeTab === 'schedule' && (
          <ScheduleSection
            matches={displayMatches}
            onSelectMatch={(m) => setActiveMatchDetail(m)}
            onOpenAnalysis={() => setActiveTab('analysis')}
            onOpenPrediction={() => setIsPredictionsOpen(true)}
          />
        )}

        {activeTab === 'standings' && <StandingsSection />}

        {activeTab === 'highlights' && (
          <HighlightsSection highlights={HIGHLIGHTS_DATA} />
        )}

        {activeTab === 'analysis' && (
          <ExpertAnalysisSection
            onSelectMatch={(m) => setActiveMatchDetail(m)}
            matches={displayMatches}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-800/80 bg-[#060a12] py-8 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className="font-extrabold text-slate-150 uppercase tracking-wider text-emerald-400">CHẠM CỎ SỐ</span>
            <span>·</span>
            <span>Chạm vào đam mê, sống cùng bóng đá</span>
            <span className="text-emerald-400 font-mono text-[11px] ml-1">● Tự động làm mới 30s</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Champion leauge</span>
            <span>·</span>
            <span>Premier League</span>
            <span>·</span>
            <span>La Liga</span>
            <span>·</span>
            <span>Bundesliga</span>
            <span>·</span>
            <span>Serie A</span>
            <span>·</span>
            <span>Ligue 1</span>
          </div>

          <div className="text-[11px] text-slate-400">
            Dữ liệu bóng đá thời gian thực · Giờ chuẩn Asia/Saigon (GMT+7)
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Dock (Fixed at bottom on mobile screens) */}
      <BottomMobileNav
        activeTab={activeTab as any}
        setActiveTab={setActiveTab as any}
        liveMatchCount={0}
        onOpenAuth={() => setIsAuthModalOpen(true)}
      />

      {/* Match Center Modal (Details, Timeline, Stats, Lineups, Community Chat) */}
      {activeMatchDetail && (
        <MatchDetailModal
          match={activeMatchDetail}
          onClose={() => setActiveMatchDetail(null)}
          communityMessages={communityMessages}
          onSendMessage={handleSendMessage}
        />
      )}

      {/* Prediction Tournament Mini-Game Modal */}
      {isPredictionsOpen && (
        <PredictionGameModal
          matches={displayMatches}
          onClose={() => setIsPredictionsOpen(false)}
        />
      )}

      {/* Personalized Push Notification Settings Modal */}
      {isNotificationsOpen && (
        <NotificationSettingsModal
          onClose={() => setIsNotificationsOpen(false)}
          enabledLeagues={subscribedLeagues}
          onToggleLeague={handleToggleSubscribedLeague}
        />
      )}

      {/* Custom Theme / Image Customizer Modal (Computer Files & Phone Album) */}
      <ThemeCustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        config={themeConfig}
        onSaveConfig={handleSaveThemeConfig}
        onResetDefault={handleResetThemeDefault}
      />

      {/* Admin Center Modal (Thêm trận, Sửa trận, Xóa trận, Thêm/Xóa/Đổi tên giải đấu) */}
      <AdminCenterModal
        isOpen={isAdminCenterOpen}
        onClose={() => setIsAdminCenterOpen(false)}
        matches={displayMatches}
      />

      {/* Dedicated Quick Edit Match Modal */}
      <EditMatchModal
        match={editingMatch}
        onClose={() => setEditingMatch(null)}
      />

      {/* Account Authentication & Admin Role Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </div>
  );
}
