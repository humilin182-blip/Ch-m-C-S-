import React, { useState } from 'react';
import { Match, League, LeagueId } from '../types/football';
import { X, Plus, Trash2, Edit3, Shield, RotateCcw, Search, Check, Trophy, Sparkles, Calendar, Clock, AlertCircle } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

interface AdminCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
  matches: Match[];
}

const TEAM_PRESETS = [
  { name: 'Real Madrid', shortName: 'Real Madrid', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png', color: '#00529F' },
  { name: 'Manchester City', shortName: 'Man City', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png', color: '#6CABDD' },
  { name: 'Arsenal', shortName: 'Arsenal', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png', color: '#EF0107' },
  { name: 'Barcelona', shortName: 'Barca', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png', color: '#004D98' },
  { name: 'Paris Saint-Germain', shortName: 'PSG', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png', color: '#004170' },
  { name: 'Bayern Munich', shortName: 'Bayern', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png', color: '#DC052D' },
  { name: 'Liverpool', shortName: 'Liverpool', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png', color: '#C8102E' },
  { name: 'Manchester United', shortName: 'Man United', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png', color: '#DA291C' },
  { name: 'Inter Milan', shortName: 'Inter', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/110.png', color: '#00579C' },
  { name: 'AC Milan', shortName: 'AC Milan', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/103.png', color: '#FB090B' },
  { name: 'Juventus', shortName: 'Juventus', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/111.png', color: '#000000' },
  { name: 'Chelsea', shortName: 'Chelsea', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png', color: '#034694' }
];

export const AdminCenterModal: React.FC<AdminCenterModalProps> = ({ isOpen, onClose, matches }) => {
  const {
    currentUser,
    isAdmin,
    adminEmail,
    loginWithEmail,
    setIsAuthModalOpen,
    leagues,
    addLeague,
    updateLeague,
    deleteLeague,
    addMatch,
    deleteMatch,
    resetAllAdminData,
    setEditingMatch
  } = useAdmin();

  const [activeTab, setActiveTab] = useState<'matches' | 'new-match' | 'leagues' | 'new-league' | 'reset'>('new-match');
  const [feedbackMsg, setFeedbackMsg] = useState<{ text: string; type: 'success' | 'error' } | null>(null);

  const showFeedback = (text: string, type: 'success' | 'error' = 'success') => {
    setFeedbackMsg({ text, type });
    setTimeout(() => setFeedbackMsg(null), 4000);
  };

  // Search in matches list
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLeagueFilter, setSelectedLeagueFilter] = useState<string>('all');
  const [confirmDeleteLeagueId, setConfirmDeleteLeagueId] = useState<string | null>(null);
  const [confirmResetData, setConfirmResetData] = useState<boolean>(false);

  // New Match Form State
  const [matchLeagueId, setMatchLeagueId] = useState<string>('ucl');
  const [matchRound, setMatchRound] = useState<string>('Champion leauge - Matchday 7');
  const [matchStartTime, setMatchStartTime] = useState<string>('2026-10-15T02:00:00+07:00');
  const [matchStadium, setMatchStadium] = useState<string>('Sân Vận Động Quốc Tế');
  const [matchCity, setMatchCity] = useState<string>('Châu Âu');
  const [matchReferee, setMatchReferee] = useState<string>('Trọng tài FIFA');
  const [matchStatus, setMatchStatus] = useState<'SCHEDULED' | 'LIVE' | 'FINISHED'>('SCHEDULED');

  const [homeName, setHomeName] = useState<string>('Real Madrid');
  const [homeShort, setHomeShort] = useState<string>('Real Madrid');
  const [homeLogo, setHomeLogo] = useState<string>('https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png');
  const [homeScore, setHomeScore] = useState<number>(0);
  const [homeColor, setHomeColor] = useState<string>('#00529F');

  const [awayName, setAwayName] = useState<string>('Manchester City');
  const [awayShort, setAwayShort] = useState<string>('Man City');
  const [awayLogo, setAwayLogo] = useState<string>('https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png');
  const [awayScore, setAwayScore] = useState<number>(0);
  const [awayColor, setAwayColor] = useState<string>('#6CABDD');

  // New League Form State
  const [newLeagueId, setNewLeagueId] = useState('');
  const [newLeagueName, setNewLeagueName] = useState('');
  const [newLeagueShort, setNewLeagueShort] = useState('');
  const [newLeagueCountry, setNewLeagueCountry] = useState('Việt Nam');
  const [newLeagueFlag, setNewLeagueFlag] = useState('🏆');
  const [newLeagueColor, setNewLeagueColor] = useState('#10B981');

  // Editing League state
  const [editingLeagueId, setEditingLeagueId] = useState<string | null>(null);
  const [editLeagueName, setEditLeagueName] = useState('');
  const [editLeagueShort, setEditLeagueShort] = useState('');
  const [editLeagueFlag, setEditLeagueFlag] = useState('');
  const [editLeagueCountry, setEditLeagueCountry] = useState('');

  if (!isOpen) return null;

  const handleSelectHomePreset = (team: typeof TEAM_PRESETS[0]) => {
    setHomeName(team.name);
    setHomeShort(team.shortName);
    setHomeLogo(team.logo);
    setHomeColor(team.color);
  };

  const handleSelectAwayPreset = (team: typeof TEAM_PRESETS[0]) => {
    setAwayName(team.name);
    setAwayShort(team.shortName);
    setAwayLogo(team.logo);
    setAwayColor(team.color);
  };

  const handleCreateMatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!homeName.trim() || !awayName.trim()) {
      showFeedback('Vui lòng nhập tên đầy đủ cho cả đội nhà và đội khách', 'error');
      return;
    }

    const newMatch: Match = {
      id: `custom-match-${Date.now()}`,
      leagueId: matchLeagueId as LeagueId,
      round: matchRound.trim() || 'Champion leauge',
      homeTeam: {
        id: `team-${Date.now()}-h`,
        name: homeName.trim(),
        shortName: homeShort.trim() || homeName.trim(),
        logo: homeLogo.trim() || 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/default-team-logo.png',
        score: Number(homeScore) || 0,
        color: homeColor
      },
      awayTeam: {
        id: `team-${Date.now()}-a`,
        name: awayName.trim(),
        shortName: awayShort.trim() || awayName.trim(),
        logo: awayLogo.trim() || 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/default-team-logo.png',
        score: Number(awayScore) || 0,
        color: awayColor
      },
      status: matchStatus,
      startTime: matchStartTime,
      stadium: matchStadium.trim() || 'Sân Vận Động',
      city: matchCity.trim() || 'Quốc tế',
      referee: matchReferee.trim() || 'Trọng tài FIFA',
      events:
        matchStatus !== 'SCHEDULED' && (homeScore > 0 || awayScore > 0)
          ? [
              ...(homeScore > 0
                ? [
                    {
                      id: `e-${Date.now()}-1`,
                      minute: 35,
                      type: 'GOAL' as const,
                      team: 'home' as const,
                      player: homeShort + ' Cầu thủ ghi bàn'
                    }
                  ]
                : []),
              ...(awayScore > 0
                ? [
                    {
                      id: `e-${Date.now()}-2`,
                      minute: 68,
                      type: 'GOAL' as const,
                      team: 'away' as const,
                      player: awayShort + ' Cầu thủ ghi bàn'
                    }
                  ]
                : [])
            ]
          : [],
      stats: {
        possession: [50, 50],
        shots: [0, 0],
        shotsOnTarget: [0, 0],
        expectedGoals: [0, 0],
        fouls: [0, 0],
        corners: [0, 0],
        offsides: [0, 0],
        yellowCards: [0, 0],
        redCards: [0, 0],
        passes: [0, 0],
        passAccuracy: [0, 0]
      }
    };

    addMatch(newMatch);
    showFeedback(`Đã thêm thành công trận đấu: ${homeName} vs ${awayName}!`);
    setActiveTab('matches');
  };

  const handleCreateLeague = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanId = newLeagueId.trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
    if (!cleanId || !newLeagueName.trim()) {
      showFeedback('Vui lòng nhập ID và Tên giải đấu', 'error');
      return;
    }

    if (leagues.some((l) => l.id === cleanId)) {
      showFeedback(`Mã giải đấu "${cleanId}" đã tồn tại! Vui lòng chọn mã khác`, 'error');
      return;
    }

    const created: League = {
      id: cleanId as LeagueId,
      name: newLeagueName.trim(),
      shortName: newLeagueShort.trim() || newLeagueName.trim(),
      country: newLeagueCountry.trim() || 'Quốc tế',
      flag: newLeagueFlag.trim() || '🏆',
      color: newLeagueColor,
      season: '2026/2027',
      logo: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=80&q=80'
    };

    addLeague(created);
    showFeedback(`Đã thêm giải đấu mới: ${newLeagueName}!`);
    setNewLeagueId('');
    setNewLeagueName('');
    setNewLeagueShort('');
    setActiveTab('leagues');
  };

  const handleStartEditLeague = (l: League) => {
    setEditingLeagueId(l.id);
    setEditLeagueName(l.name);
    setEditLeagueShort(l.shortName);
    setEditLeagueFlag(l.flag);
    setEditLeagueCountry(l.country || '');
  };

  const handleSaveEditLeague = (leagueId: string) => {
    updateLeague(leagueId, {
      name: editLeagueName.trim(),
      shortName: editLeagueShort.trim(),
      flag: editLeagueFlag.trim(),
      country: editLeagueCountry.trim()
    });
    setEditingLeagueId(null);
    showFeedback(`Đã cập nhật thông tin giải đấu thành công!`);
  };

  const handleRenameToChampionLeauge = (l: League) => {
    updateLeague(l.id, {
      name: 'Champion leauge',
      shortName: 'Champion leauge'
    });
    showFeedback(`Đã đổi tên giải ${l.id} thành "Champion leauge"!`);
  };

  const handleDeleteLeagueAction = async (l: League) => {
    await deleteLeague(l.id);
    setConfirmDeleteLeagueId(null);
    showFeedback(`Đã xóa vĩnh viễn giải "${l.shortName}" trên toàn bộ máy chủ và thiết bị!`);
  };

  const filteredMatches = matches.filter((m) => {
    if (selectedLeagueFilter !== 'all' && m.leagueId !== selectedLeagueFilter) return false;
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      const txt = `${m.homeTeam.name} ${m.awayTeam.name} ${m.round} ${m.stadium}`.toLowerCase();
      if (!txt.includes(term)) return false;
    }
    return true;
  });

  if (!isAdmin) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
        <div className="relative w-full max-w-md bg-[#080e18] border border-rose-500/50 rounded-2xl shadow-2xl p-6 text-center space-y-4">
          <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto text-2xl">
            🔒
          </div>
          <h3 className="text-base font-bold text-white">Yêu Cầu Quyền Quản Trị Viên</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            Chỉ duy nhất tài khoản Gmail <strong className="text-amber-300 font-mono bg-black/40 px-1 py-0.5 rounded">{adminEmail}</strong> mới có quyền chỉnh sửa, thêm, xóa trận đấu và giải đấu.
          </p>
          <p className="text-[11px] text-slate-400">
            Tài khoản hiện tại của bạn: <strong className="text-white font-mono">{currentUser?.email || 'Chưa đăng nhập'}</strong>
          </p>
          <div className="flex gap-2 justify-center pt-2">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold"
            >
              Đóng
            </button>
            <button
              onClick={() => {
                loginWithEmail(adminEmail, 'Huy Admin');
              }}
              className="px-4 py-2 bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 rounded-xl text-xs font-bold"
            >
              Đăng nhập với {adminEmail}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-[#080e18] border border-amber-500/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-amber-950/90 via-slate-900 to-emerald-950/90 border-b border-amber-500/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/30 to-emerald-500/30 border border-amber-500/60 flex items-center justify-center text-xl text-amber-300 shadow-lg">
              👑
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-black text-white tracking-wide">
                  Trung Tâm Quản Trị Viên (Admin Center)
                </h2>
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono text-[10px] font-bold uppercase tracking-wider">
                  {currentUser?.email}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Chỉnh sửa & Thêm trận đấu, Xóa trận đấu, Thêm giải mới, Xóa giải, Đổi tên giải (Champion leauge, Premier League...)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Global Feedback Banner */}
        {feedbackMsg && (
          <div
            className={`px-4 py-2.5 text-xs font-semibold flex items-center justify-between transition-all ${
              feedbackMsg.type === 'success'
                ? 'bg-emerald-500/20 text-emerald-300 border-b border-emerald-500/40'
                : 'bg-rose-500/20 text-rose-300 border-b border-rose-500/40'
            }`}
          >
            <div className="flex items-center gap-2">
              <span>{feedbackMsg.type === 'success' ? '✓' : '⚠️'}</span>
              <span>{feedbackMsg.text}</span>
            </div>
            <button onClick={() => setFeedbackMsg(null)} className="text-slate-400 hover:text-white">
              ✕
            </button>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1.5 p-2 bg-[#060a12] border-b border-slate-800/80 overflow-x-auto scrollbar-none text-xs">
          <button
            onClick={() => setActiveTab('new-match')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'new-match'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25'
                : 'text-slate-300 hover:text-white hover:bg-slate-850'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Thêm Trận Đấu</span>
          </button>

          <button
            onClick={() => setActiveTab('matches')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'matches'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25'
                : 'text-slate-300 hover:text-white hover:bg-slate-850'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Sửa & Xóa Trận ({matches.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('leagues')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'leagues'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25'
                : 'text-slate-300 hover:text-white hover:bg-slate-850'
            }`}
          >
            <Trophy className="w-3.5 h-3.5" />
            <span>Quản Lý & Xóa Giải ({leagues.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('new-league')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer ${
              activeTab === 'new-league'
                ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25'
                : 'text-slate-300 hover:text-white hover:bg-slate-850'
            }`}
          >
            <Plus className="w-3.5 h-3.5" />
            <span>+ Thêm Giải Đấu Mới</span>
          </button>

          <button
            onClick={() => setActiveTab('reset')}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-all whitespace-nowrap cursor-pointer ml-auto ${
              activeTab === 'reset'
                ? 'bg-rose-500 text-white'
                : 'text-rose-400 hover:bg-rose-500/10'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Khôi Phục Gốc</span>
          </button>
        </div>

        {/* Tab Content Container */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-6 text-xs">
          {/* TAB 1: ADD NEW MATCH */}
          {activeTab === 'new-match' && (
            <form onSubmit={handleCreateMatch} className="space-y-4">
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-200">
                <span className="font-bold text-emerald-300">💡 Quyền Thêm Trận Đấu:</span> Bạn có thể thêm bất kỳ trận đấu nào vào bất kỳ giải đấu nào (Champion leauge, Premier League, La Liga, V-League...). Trận đấu sau khi thêm sẽ xuất hiện ngay lập tức trên bảng tỉ số và lịch thi đấu!
              </div>

              {/* League, Round, Status, Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Thuộc giải đấu:</label>
                  <select
                    value={matchLeagueId}
                    onChange={(e) => setMatchLeagueId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-bold focus:border-emerald-400"
                  >
                    {leagues.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.flag} {l.shortName} ({l.name})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">Tên vòng đấu / Tiêu đề:</label>
                  <input
                    type="text"
                    value={matchRound}
                    onChange={(e) => setMatchRound(e.target.value)}
                    placeholder="VD: Champion leauge - Matchday 7"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white focus:border-emerald-400"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">Thời gian thi đấu (ISO GMT+7):</label>
                  <input
                    type="text"
                    value={matchStartTime}
                    onChange={(e) => setMatchStartTime(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-mono focus:border-emerald-400"
                    required
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-300 mb-1">Trạng thái:</label>
                  <select
                    value={matchStatus}
                    onChange={(e) => setMatchStatus(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-bold focus:border-emerald-400"
                  >
                    <option value="SCHEDULED">⏳ Chưa đá (SCHEDULED)</option>
                    <option value="LIVE">🔴 Đang LIVE (Trực tiếp)</option>
                    <option value="FINISHED">✓ Đã kết thúc (FINISHED)</option>
                  </select>
                </div>
              </div>

              {/* Stadium & City & Referee */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Sân vận động:</label>
                  <input
                    type="text"
                    value={matchStadium}
                    onChange={(e) => setMatchStadium(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Thành phố:</label>
                  <input
                    type="text"
                    value={matchCity}
                    onChange={(e) => setMatchCity(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white focus:border-emerald-400"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Trọng tài điều khiển:</label>
                  <input
                    type="text"
                    value={matchReferee}
                    onChange={(e) => setMatchReferee(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white focus:border-emerald-400"
                  />
                </div>
              </div>

              {/* Quick Preset Selector Buttons */}
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider mb-2 block">
                  ⚡ Chọn nhanh CLB hàng đầu:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {TEAM_PRESETS.map((t) => (
                    <div key={t.name} className="inline-flex rounded-lg border border-slate-700 overflow-hidden text-[10px]">
                      <button
                        type="button"
                        onClick={() => handleSelectHomePreset(t)}
                        className="px-2 py-1 bg-emerald-950/80 hover:bg-emerald-900 text-emerald-200 border-r border-slate-700"
                        title={`Đặt làm Đội Nhà: ${t.name}`}
                      >
                        🏠 {t.shortName}
                      </button>
                      <button
                        type="button"
                        onClick={() => handleSelectAwayPreset(t)}
                        className="px-2 py-1 bg-cyan-950/80 hover:bg-cyan-900 text-cyan-200"
                        title={`Đặt làm Đội Khách: ${t.name}`}
                      >
                        ✈️ {t.shortName}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Home Team Section */}
              <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-400 uppercase tracking-wider block text-[11px]">
                    🏠 Thông tin Đội Nhà (Home Team)
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-400 text-[11px]">Tỉ số:</span>
                    <button
                      type="button"
                      onClick={() => setHomeScore((s) => Math.max(0, s - 1))}
                      className="w-6 h-6 rounded bg-slate-800 text-white font-bold"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-emerald-400 font-bold font-mono text-sm">
                      {homeScore}
                    </span>
                    <button
                      type="button"
                      onClick={() => setHomeScore((s) => s + 1)}
                      className="w-6 h-6 rounded bg-emerald-600 text-white font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1">Tên CLB đầy đủ:</label>
                    <input
                      type="text"
                      value={homeName}
                      onChange={(e) => setHomeName(e.target.value)}
                      placeholder="VD: Real Madrid"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Tên viết tắt:</label>
                    <input
                      type="text"
                      value={homeShort}
                      onChange={(e) => setHomeShort(e.target.value)}
                      placeholder="VD: Real Madrid"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Logo URL (Link ảnh):</label>
                  <input
                    type="text"
                    value={homeLogo}
                    onChange={(e) => setHomeLogo(e.target.value)}
                    placeholder="https://..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-mono text-[11px]"
                  />
                </div>
              </div>

              {/* Away Team Section */}
              <div className="p-4 rounded-xl bg-slate-900 border border-cyan-500/30 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-cyan-400 uppercase tracking-wider block text-[11px]">
                    ✈️ Thông tin Đội Khách (Away Team)
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-400 text-[11px]">Tỉ số:</span>
                    <button
                      type="button"
                      onClick={() => setAwayScore((s) => Math.max(0, s - 1))}
                      className="w-6 h-6 rounded bg-slate-800 text-white font-bold"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-cyan-400 font-bold font-mono text-sm">
                      {awayScore}
                    </span>
                    <button
                      type="button"
                      onClick={() => setAwayScore((s) => s + 1)}
                      className="w-6 h-6 rounded bg-cyan-600 text-white font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-slate-400 mb-1">Tên CLB đầy đủ:</label>
                    <input
                      type="text"
                      value={awayName}
                      onChange={(e) => setAwayName(e.target.value)}
                      placeholder="VD: Manchester City"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-400 mb-1">Tên viết tắt:</label>
                    <input
                      type="text"
                      value={awayShort}
                      onChange={(e) => setAwayShort(e.target.value)}
                      placeholder="VD: Man City"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-slate-400 mb-1">Logo URL (Link ảnh):</label>
                  <input
                    type="text"
                    value={awayLogo}
                    onChange={(e) => setAwayLogo(e.target.value)}
                    placeholder="https://..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-mono text-[11px]"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold shadow-lg hover:brightness-110 cursor-pointer text-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Xác Nhận Thêm Trận Đấu Này</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 2: MANAGE, EDIT & DELETE MATCHES */}
          {activeTab === 'matches' && (
            <div className="space-y-4">
              {/* Search & Filter Bar */}
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="relative w-full sm:w-72">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Tìm trận để sửa / xóa..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-1.5 text-white"
                  />
                  <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-2" />
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <span className="text-slate-400 whitespace-nowrap">Lọc giải:</span>
                  <select
                    value={selectedLeagueFilter}
                    onChange={(e) => setSelectedLeagueFilter(e.target.value)}
                    className="bg-slate-950 border border-slate-700 rounded-lg px-2.5 py-1.5 text-white"
                  >
                    <option value="all">Tất cả giải</option>
                    {leagues.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.flag} {l.shortName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Matches List */}
              <div className="space-y-2 max-h-[50vh] overflow-y-auto pr-1">
                {filteredMatches.length === 0 ? (
                  <div className="p-8 text-center text-slate-400 bg-slate-900/50 rounded-xl">
                    Không tìm thấy trận đấu nào phù hợp với từ khóa.
                  </div>
                ) : (
                  filteredMatches.map((m) => {
                    const matchLeague = leagues.find((l) => l.id === m.leagueId);
                    return (
                      <div
                        key={m.id}
                        className="p-3 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="px-2 py-0.5 rounded bg-slate-800 text-emerald-400 font-bold text-[10px]">
                            {matchLeague?.shortName || m.leagueId}
                          </span>
                          <div>
                            <div className="font-bold text-white flex items-center gap-2 text-xs sm:text-sm">
                              <span>{m.homeTeam.name}</span>
                              <span className="px-1.5 py-0.2 rounded bg-slate-800 text-emerald-400 font-mono">
                                {m.status === 'SCHEDULED' ? 'vs' : `${m.homeTeam.score} - ${m.awayTeam.score}`}
                              </span>
                              <span>{m.awayTeam.name}</span>
                            </div>
                            <div className="text-[11px] text-slate-400 flex items-center gap-2 mt-0.5">
                              <span>{m.round}</span>
                              <span>·</span>
                              <span>{m.startTime.slice(0, 16).replace('T', ' ')}</span>
                              {m.status === 'LIVE' && (
                                <span className="text-rose-400 font-bold animate-pulse">● LIVE {m.minute}'</span>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                          <button
                            onClick={() => setEditingMatch(m)}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-semibold cursor-pointer"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                            <span>Sửa</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => {
                              deleteMatch(m.id);
                              showFeedback(`Đã xóa trận "${m.homeTeam.name} vs ${m.awayTeam.name}"!`);
                            }}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 font-semibold cursor-pointer"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span>Xóa</span>
                          </button>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>
          )}

          {/* TAB 3: MANAGE, RENAME & DELETE LEAGUES */}
          {activeTab === 'leagues' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200">
                <span className="font-bold text-amber-300">👑 Quyền Đổi Tên Giải & Xóa Giải:</span> Bạn có thể đổi tên hiển thị (như đổi UCL thành <strong>Champion leauge</strong>), đổi emoji cờ, hoặc xóa hoàn toàn bất kỳ giải đấu nào khỏi thanh chọn.
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {leagues.map((l) => {
                  const isEditingThis = editingLeagueId === l.id;
                  const matchCount = matches.filter((m) => m.leagueId === l.id).length;

                  return (
                    <div
                      key={l.id}
                      className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 space-y-2.5"
                    >
                      {isEditingThis ? (
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <input
                              type="text"
                              value={editLeagueFlag}
                              onChange={(e) => setEditLeagueFlag(e.target.value)}
                              placeholder="Cờ/Emoji"
                              className="w-14 bg-slate-950 border border-slate-700 rounded-md p-1.5 text-center text-sm"
                            />
                            <input
                              type="text"
                              value={editLeagueShort}
                              onChange={(e) => setEditLeagueShort(e.target.value)}
                              placeholder="Tên ngắn (VD: Champion leauge)"
                              className="flex-1 bg-slate-950 border border-slate-700 rounded-md p-1.5 text-white font-bold"
                            />
                          </div>
                          <input
                            type="text"
                            value={editLeagueName}
                            onChange={(e) => setEditLeagueName(e.target.value)}
                            placeholder="Tên đầy đủ (VD: Champion leauge 2026/2027)"
                            className="w-full bg-slate-950 border border-slate-700 rounded-md p-1.5 text-white"
                          />
                          <input
                            type="text"
                            value={editLeagueCountry}
                            onChange={(e) => setEditLeagueCountry(e.target.value)}
                            placeholder="Quốc gia / Khu vực"
                            className="w-full bg-slate-950 border border-slate-700 rounded-md p-1.5 text-white"
                          />
                          <div className="flex justify-end gap-2 pt-1">
                            <button
                              type="button"
                              onClick={() => setEditingLeagueId(null)}
                              className="px-3 py-1 bg-slate-800 text-slate-300 rounded-md cursor-pointer"
                            >
                              Hủy
                            </button>
                            <button
                              type="button"
                              onClick={() => handleSaveEditLeague(l.id)}
                              className="flex items-center gap-1 px-3 py-1 bg-emerald-500 text-slate-950 font-bold rounded-md cursor-pointer"
                            >
                              <Check className="w-3.5 h-3.5" />
                              <span>Lưu</span>
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-2.5">
                            <span className="text-2xl">{l.flag}</span>
                            <div>
                              <div className="font-bold text-white flex items-center gap-1.5">
                                <span>{l.shortName}</span>
                                <span className="text-[10px] text-slate-400 font-mono">({l.id})</span>
                                <span className="px-1.5 py-0.2 rounded-full bg-slate-800 text-emerald-400 text-[10px] font-mono">
                                  {matchCount} trận
                                </span>
                              </div>
                              <p className="text-[11px] text-slate-400 truncate max-w-[210px]">{l.name}</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0">
                            {/* Quick Rename to Champion leauge for UCL */}
                            {l.id === 'ucl' && l.shortName !== 'Champion leauge' && (
                              <button
                                type="button"
                                onClick={() => handleRenameToChampionLeauge(l)}
                                className="px-2 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] font-bold cursor-pointer"
                                title="Đổi tên ngay thành: Champion leauge"
                              >
                                ✨ Đổi: Champion leauge
                              </button>
                            )}

                            <button
                              type="button"
                              onClick={() => handleStartEditLeague(l)}
                              className="p-1.5 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 cursor-pointer"
                              title="Chỉnh sửa tên giải đấu"
                            >
                              <Edit3 className="w-3.5 h-3.5" />
                            </button>
                            {confirmDeleteLeagueId === l.id ? (
                              <div className="flex items-center gap-1.5 p-1 bg-rose-950/80 border border-rose-500/80 rounded-lg text-[10px]">
                                <span className="text-rose-200 font-semibold">Xóa trên mọi máy chủ?</span>
                                <button
                                  type="button"
                                  onClick={() => handleDeleteLeagueAction(l)}
                                  className="px-2 py-1 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded cursor-pointer"
                                >
                                  Xóa
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setConfirmDeleteLeagueId(null)}
                                  className="px-1.5 py-1 bg-slate-800 text-slate-300 rounded cursor-pointer"
                                >
                                  Hủy
                                </button>
                              </div>
                            ) : (
                              <button
                                type="button"
                                onClick={() => setConfirmDeleteLeagueId(l.id)}
                                className="px-2 py-1.5 rounded-lg bg-rose-500/15 hover:bg-rose-500/25 text-rose-400 hover:text-rose-300 border border-rose-500/40 cursor-pointer flex items-center gap-1 text-xs font-bold"
                                title={`Xóa giải đấu ${l.shortName}`}
                              >
                                <Trash2 className="w-3.5 h-3.5 text-rose-400" />
                                <span>Xóa giải</span>
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: ADD NEW LEAGUE */}
          {activeTab === 'new-league' && (
            <form onSubmit={handleCreateLeague} className="space-y-4 max-w-xl mx-auto">
              <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-200">
                <span className="font-bold text-cyan-300">🏆 Quyền Thêm Giải Đấu Mới:</span> Thêm bất kỳ giải đấu bóng đá nào vào hệ thống (Champion leauge, V-League, World Cup, Copa America...). Giải đấu mới sẽ có nút lọc riêng, bảng xếp hạng và có thể thêm các trận đấu trực thuộc!
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Mã định danh giải (ID duy nhất):</label>
                  <input
                    type="text"
                    value={newLeagueId}
                    onChange={(e) => setNewLeagueId(e.target.value)}
                    placeholder="VD: vleague, c1, afc..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-mono"
                    required
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Emoji / Biểu tượng cờ:</label>
                  <input
                    type="text"
                    value={newLeagueFlag}
                    onChange={(e) => setNewLeagueFlag(e.target.value)}
                    placeholder="VD: 🇻🇳, ⭐, 🏆"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white text-center"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">Tên ngắn hiển thị trên nút chọn:</label>
                <input
                  type="text"
                  value={newLeagueShort}
                  onChange={(e) => setNewLeagueShort(e.target.value)}
                  placeholder="VD: Champion leauge, V-League, World Cup..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-bold"
                  required
                />
              </div>

              <div>
                <label className="block font-bold text-slate-300 mb-1">Tên đầy đủ của giải đấu:</label>
                <input
                  type="text"
                  value={newLeagueName}
                  onChange={(e) => setNewLeagueName(e.target.value)}
                  placeholder="VD: Champion leauge 2026/2027 hoặc V-League 1"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Quốc gia / Khu vực:</label>
                  <input
                    type="text"
                    value={newLeagueCountry}
                    onChange={(e) => setNewLeagueCountry(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-300 mb-1">Màu sắc nhận diện:</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="color"
                      value={newLeagueColor}
                      onChange={(e) => setNewLeagueColor(e.target.value)}
                      className="w-10 h-9 rounded bg-transparent border-0 cursor-pointer"
                    />
                    <input
                      type="text"
                      value={newLeagueColor}
                      onChange={(e) => setNewLeagueColor(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-mono"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-bold shadow-lg hover:brightness-110 cursor-pointer text-xs"
                >
                  <Plus className="w-4 h-4" />
                  <span>Xác Nhận Thêm Giải Đấu Này</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 5: RESET ALL */}
          {activeTab === 'reset' && (
            <div className="p-6 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-center space-y-4 max-w-lg mx-auto">
              <div className="w-12 h-12 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center mx-auto text-2xl">
                ⚠️
              </div>
              <h3 className="text-base font-bold text-white">Khôi Phục Toàn Bộ Dữ Liệu Gốc</h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                Thao tác này sẽ xóa toàn bộ các trận đấu bạn đã thêm thủ công, các trận đã sửa, các trận đã xóa và danh sách giải đấu tùy chỉnh, đưa hệ thống về dữ liệu chuẩn gốc ban đầu.
              </p>
              {confirmResetData ? (
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      resetAllAdminData();
                      setConfirmResetData(false);
                      showFeedback('Đã khôi phục dữ liệu mặc định thành công!');
                      onClose();
                    }}
                    className="px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-lg transition-all cursor-pointer"
                  >
                    Xác Nhận Khôi Phục Gốc Ngay
                  </button>
                  <button
                    type="button"
                    onClick={() => setConfirmResetData(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-all cursor-pointer"
                  >
                    Hủy Bỏ
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setConfirmResetData(true)}
                  className="px-6 py-2.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs shadow-lg transition-all cursor-pointer"
                >
                  Xác Nhận Đặt Lại Mọi Dữ Liệu
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
