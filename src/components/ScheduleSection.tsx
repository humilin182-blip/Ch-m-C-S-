import React, { useState, useEffect } from 'react';
import { Match, LeagueId } from '../types/football';
import { LEAGUES_DATA } from '../data/mockFootballData';
import { Calendar, CalendarPlus, Clock, MapPin, Download, Check, BarChart2, Search, Info, Flame, Trophy } from 'lucide-react';
import { getGoogleCalendarUrl, downloadMatchICS } from '../services/calendarExport';
import { calculateMatchCountdown } from '../services/footballApi';

interface ScheduleSectionProps {
  matches: Match[];
  onSelectMatch: (match: Match) => void;
  onOpenAnalysis: (match: Match) => void;
  onOpenPrediction: (match: Match) => void;
}

export const TOP_CLUBS_FILTER = [
  { id: 'all', name: 'Tất cả CLB' },
  // Pháp (Ligue 1)
  { id: 'psg', name: 'PSG', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/160.png' },
  { id: 'marseille', name: 'Marseille', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/166.png' },
  { id: 'lyon', name: 'Lyon', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/167.png' },
  { id: 'monaco', name: 'Monaco', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/174.png' },
  { id: 'lille', name: 'Lille OSC', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/164.png' },
  { id: 'lens', name: 'RC Lens', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/177.png' },
  { id: 'nice', name: 'OGC Nice', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/273.png' },
  { id: 'parisfc', name: 'Paris FC', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/6835.png' },
  // Ý (Serie A)
  { id: 'inter', name: 'Inter Milan', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/110.png' },
  { id: 'milan', name: 'AC Milan', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/103.png' },
  { id: 'juve', name: 'Juventus', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/111.png' },
  { id: 'napoli', name: 'Napoli', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/114.png' },
  { id: 'roma', name: 'AS Roma', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/104.png' },
  { id: 'lazio', name: 'Lazio', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/112.png' },
  { id: 'atalanta', name: 'Atalanta', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1255.png' },
  { id: 'fiorentina', name: 'Fiorentina', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/109.png' },
  // Cúp C1 & Châu Âu
  { id: 'gal', name: 'Galatasaray', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/436.png' },
  // Đức (Bundesliga)
  { id: 'bay', name: 'Bayern Munich', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/132.png' },
  { id: 'bvb', name: 'Dortmund', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/124.png' },
  { id: 'lev', name: 'Leverkusen', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/131.png' },
  { id: 'rbl', name: 'RB Leipzig', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/11420.png' },
  { id: 'sge', name: 'Frankfurt', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/127.png' },
  { id: 'vfb', name: 'Stuttgart', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/135.png' },
  // Tây Ban Nha (La Liga)
  { id: 'rma', name: 'Real Madrid', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/86.png' },
  { id: 'bar', name: 'Barcelona', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/83.png' },
  { id: 'atm', name: 'Atlético Madrid', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/1068.png' },
  { id: 'ath', name: 'Athletic Bilbao', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/93.png' },
  { id: 'rso', name: 'Real Sociedad', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/89.png' },
  { id: 'bet', name: 'Real Betis', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/244.png' },
  { id: 'sev', name: 'Sevilla', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/243.png' },
  { id: 'val', name: 'Valencia', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/94.png' },
  // Ngoại Hạng Anh (Premier League)
  { id: 'ars', name: 'Arsenal', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/359.png' },
  { id: 'mun', name: 'Man United', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/360.png' },
  { id: 'liv', name: 'Liverpool', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/364.png' },
  { id: 'mci', name: 'Man City', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/382.png' },
  { id: 'che', name: 'Chelsea', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/363.png' },
  { id: 'tot', name: 'Tottenham', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/367.png' },
  { id: 'new', name: 'Newcastle', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/361.png' },
  { id: 'avl', name: 'Aston Villa', logo: 'https://a.espncdn.com/combiner/i?img=/i/teamlogos/soccer/500/362.png' }
];

export const ROUNDS_PRESET = [
  { id: 'all', label: 'Tất cả các vòng & lượt đấu' },
  // Cúp C1 UEFA Champions League
  { id: 'Matchday 2', label: '⭐ C1 Lượt 2 (14 - 15/10 Man City vs PSG, Arsenal vs Lille)' },
  { id: 'Matchday 3', label: '⭐ C1 Lượt 3 (21 - 22/10 PSG vs Barca, Bayern vs Arsenal)' },
  { id: 'Matchday 4', label: '⭐ C1 Lượt 4 (04 - 05/11 Atletico vs Bayern, Barca vs Villa)' },
  { id: 'Matchday 5', label: '⭐ C1 Lượt 5 (25 - 26/11 Arsenal vs BVB, Real vs PSV)' },
  { id: 'Matchday 6', label: '⭐ C1 Lượt 6 (09 - 10/12 Barca vs Man City, Arsenal vs Real)' },
  // Các vòng giải VĐQG
  { id: 'Vòng 5', label: 'Vòng 5 (10 - 11/10 Bundesliga)' },
  { id: 'Vòng 6', label: 'Vòng 6 (10 - 13/10 Ligue 1 & Serie A mở màn, Lens vs Lyon)' },
  { id: 'Vòng 7', label: 'Vòng 7 (17 - 20/10 Lyon vs Nice, Milan vs Atalanta, Juve vs Lazio)' },
  { id: 'Vòng 8', label: '💥 Vòng 8 (Siêu đại chiến PSG vs Lyon, Der Klassiker, Napoli vs Roma)' },
  { id: 'Vòng 9', label: 'Vòng 9 (31/10 Derby miền Bắc Lille vs Lens & Serie A giữa tuần)' },
  { id: 'Vòng 10', label: '🔥 Vòng 10 (Lens vs Marseille, Derby Milan, Juve vs Napoli, El Clásico)' },
  { id: 'Vòng 11', label: '🔥 Vòng 11 (21 - 23/11 Nice vs PSG, Lille vs Lyon, Napoli vs Inter)' },
  { id: 'Vòng 12', label: '🔥 Vòng 12 (28 - 30/11 Choc des Olympiques Marseille vs Lyon, PSG vs Monaco, Juve vs Milan)' },
  { id: 'Vòng 13', label: '🔥 Vòng 13 (05 - 07/12 Marseille vs Lille, Inter vs Torino, Bayern vs Leverkusen)' },
  { id: 'Vòng 14', label: 'Vòng 14 (12 - 14/12 Siêu Derby thủ đô Paris: PSG vs Paris FC, Nice vs Marseille)' },
  { id: 'Vòng 15', label: "🔥 Vòng 15 (20 - 23/12 Trước Giáng sinh: Le Classique Marseille vs PSG, Inter vs Juve)" },
  { id: 'Vòng 16', label: '🔥 Vòng 16 (Atlético vs Valencia & Arsenal vs MU)' },
  { id: 'Vòng 17', label: '🎄 Vòng 17 (Giáng Sinh La Liga & Boxing Day EPL)' },
  { id: 'Vòng 18', label: '🎉 Vòng 18 (30 - 31/12 Chào Năm Mới 2027)' }
];

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({
  matches,
  onSelectMatch,
  onOpenAnalysis,
  onOpenPrediction
}) => {
  const [selectedLeague, setSelectedLeague] = useState<LeagueId | 'all'>('all');
  const [selectedMonth, setSelectedMonth] = useState<string>('all'); // 'all' | '2026-10' | '2026-11' | '2026-12'
  const [selectedRound, setSelectedRound] = useState<string>('all');
  const [selectedClub, setSelectedClub] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'SCHEDULED' | 'FINISHED' | 'LIVE'>('ALL');
  const [searchTerm, setSearchTerm] = useState('');
  const [syncedMatchId, setSyncedMatchId] = useState<string | null>(null);
  const [revealedMatchIds, setRevealedMatchIds] = useState<string[]>([]);
  const [, setTick] = useState(0);

  const toggleShowPrediction = (matchId: string) => {
    setRevealedMatchIds((prev) =>
      prev.includes(matchId) ? prev.filter((id) => id !== matchId) : [...prev, matchId]
    );
  };

  // Live countdown per-second tick
  useEffect(() => {
    const timer = setInterval(() => {
      setTick((t) => t + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const MONTH_TABS = [
    { id: 'all', label: 'Toàn bộ lịch (T10 · T11 · T12)', icon: '🗓️' },
    { id: '2026-10', label: 'Tháng 10/2026 (Vòng 6 - 9)', icon: '🍂' },
    { id: '2026-11', label: 'Tháng 11/2026 (Vòng 9 - 12)', icon: '🍁' },
    { id: '2026-12', label: 'Tháng 12/2026 (Vòng 13 - 18 · Boxing Day)', icon: '🎄' }
  ];

  const filteredMatches = matches.filter((m) => {
    if (selectedLeague !== 'all' && m.leagueId !== selectedLeague) return false;
    if (statusFilter !== 'ALL' && m.status !== statusFilter) return false;

    // Filter by Month
    if (selectedMonth !== 'all') {
      if (!m.startTime.startsWith(selectedMonth)) return false;
    }

    // Filter by Round
    if (selectedRound !== 'all') {
      if (!m.round.includes(selectedRound)) return false;
    }

    // Filter by Club
    if (selectedClub !== 'all') {
      const isHome = m.homeTeam.id === selectedClub || m.homeTeam.name.toLowerCase().includes(selectedClub.toLowerCase());
      const isAway = m.awayTeam.id === selectedClub || m.awayTeam.name.toLowerCase().includes(selectedClub.toLowerCase());
      if (!isHome && !isAway) return false;
    }

    // Search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      const matchName = `${m.homeTeam.name} ${m.awayTeam.name} ${m.stadium} ${m.round}`.toLowerCase();
      const scorers = m.events.map((e) => e.player).join(' ').toLowerCase();
      if (!matchName.includes(term) && !scorers.includes(term)) return false;
    }
    return true;
  });

  const handleDownloadICS = (match: Match) => {
    downloadMatchICS(match);
    setSyncedMatchId(match.id);
    setTimeout(() => setSyncedMatchId(null), 3000);
  };

  const formatDateTime = (isoString: string) => {
    try {
      const d = new Date(isoString);
      const timeStr = d.toLocaleTimeString('vi-VN', {
        timeZone: 'Asia/Saigon',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
      const dateStr = d.toLocaleDateString('vi-VN', {
        timeZone: 'Asia/Saigon',
        weekday: 'short',
        day: '2-digit',
        month: '2-digit'
      });
      return { timeStr, dateStr };
    } catch {
      return { timeStr: '20:00', dateStr: 'Hôm nay' };
    }
  };

  // Scheduled count
  const scheduledCount = matches.filter((m) => m.status === 'SCHEDULED').length;
  const finishedCount = matches.filter((m) => m.status === 'FINISHED').length;

  return (
    <div className="space-y-6">
      {/* Header & Search */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-[#0a1428] to-slate-900 border border-slate-800 shadow-xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-xs uppercase tracking-wider">
              Cúp C1 · EPL · La Liga · Bundesliga · Serie A · Ligue 1
            </span>
            <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-bold text-xs uppercase tracking-wider">
              Tháng 10 - 12/2026
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2 mt-1.5 tracking-tight">
            <Calendar className="w-6 h-6 text-emerald-400" />
            Lịch Thi Đấu & Kết Quả Chi Tiết Đến Hết Năm 2026
          </h2>
          <p className="text-xs text-slate-300 mt-1 max-w-2xl leading-relaxed">
            Bao gồm đầy đủ cúp C1 Champions League, Premier League, La Liga, Bundesliga, Serie A & Ligue 1 (Vòng 6 đến 15). Giờ thi đấu chuẩn <strong className="text-emerald-300 font-mono">Asia/Saigon (GMT+7)</strong>. Tất cả trận đấu chưa diễn ra đều được gắn nhãn <strong className="text-cyan-300 font-semibold">⏳ Chưa đá</strong> cùng đồng hồ đếm ngược trực tiếp từng giây.
          </p>
        </div>

        {/* Search input for team, scorer or stadium */}
        <div className="relative min-w-[280px]">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo tên đội, cầu thủ, SVĐ..."
            className="w-full bg-slate-950 border border-slate-700/80 rounded-xl pl-9 pr-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400 shadow-inner"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="space-y-3.5 p-4 rounded-xl bg-[#09111e] border border-slate-800 shadow-lg">
        {/* Row 1: Month Selector Tabs */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>Chọn tháng thi đấu:</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {MONTH_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedMonth(tab.id);
                  if (tab.id !== 'all') setSelectedRound('all');
                }}
                className={`flex items-center justify-center gap-1.5 px-3 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  selectedMonth === tab.id
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-md shadow-emerald-500/25 scale-[1.01]'
                    : 'bg-slate-900/90 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                <span>{tab.icon}</span>
                <span className="truncate">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Row 2: Status Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-800/80">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mr-1 flex items-center gap-1">
            <Clock className="w-3 h-3 text-cyan-400" />
            <span>Trạng thái:</span>
          </span>
          <button
            onClick={() => setStatusFilter('ALL')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              statusFilter === 'ALL'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            Tất cả ({matches.length})
          </button>
          <button
            onClick={() => setStatusFilter('SCHEDULED')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              statusFilter === 'SCHEDULED'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Clock className="w-3 h-3 text-cyan-400 animate-pulse" />
            <span>⏳ Chưa đá & Đếm ngược ({scheduledCount})</span>
          </button>
          <button
            onClick={() => setStatusFilter('FINISHED')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              statusFilter === 'FINISHED'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <span>🏁</span>
            <span>Đã kết thúc & Tỉ số FT ({finishedCount})</span>
          </button>
          <button
            onClick={() => setStatusFilter('LIVE')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 ${
              statusFilter === 'LIVE'
                ? 'bg-rose-500 text-white font-bold shadow-md shadow-rose-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
            <span>Đang đá LIVE ({matches.filter((m) => m.status === 'LIVE').length})</span>
          </button>
        </div>

        {/* Row 3: Round Presets (Vòng 6 - 18) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-1 border-t border-slate-800/80">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1 flex items-center gap-1">
            <Trophy className="w-3 h-3 text-amber-400" />
            <span>Vòng đấu:</span>
          </span>
          {ROUNDS_PRESET.map((rp) => (
            <button
              key={rp.id}
              onClick={() => setSelectedRound(rp.id)}
              className={`px-2.5 py-1 text-[11px] font-medium rounded-md shrink-0 transition-all ${
                selectedRound === rp.id
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {rp.label}
            </button>
          ))}
        </div>

        {/* Row 4: Club Quick Filter (Arsenal, MU, Liverpool, MC, Chelsea...) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none pt-1 border-t border-slate-800/80">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 shrink-0 mr-1 flex items-center gap-1">
            <Flame className="w-3 h-3 text-rose-400" />
            <span>Theo dõi CLB:</span>
          </span>
          {TOP_CLUBS_FILTER.map((club) => (
            <button
              key={club.id}
              onClick={() => setSelectedClub(club.id)}
              className={`flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-md shrink-0 transition-all ${
                selectedClub === club.id
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-900/80 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              {club.logo && (
                <img src={club.logo} alt={club.name} className="w-3.5 h-3.5 object-contain rounded-full" />
              )}
              <span>{club.name}</span>
            </button>
          ))}
        </div>

        {/* Row 5: Tournament Selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1 border-t border-slate-800/80">
          <button
            onClick={() => setSelectedLeague('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg shrink-0 transition-all ${
              selectedLeague === 'all'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            Tất cả giải đấu
          </button>
          {LEAGUES_DATA.map((league) => (
            <button
              key={league.id}
              onClick={() => setSelectedLeague(league.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg shrink-0 transition-all ${
                selectedLeague === league.id
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <span>{league.flag}</span>
              <span>{league.shortName}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Contextual Notices */}
      {selectedMonth === '2026-10' && (
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-center gap-3">
          <Info className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <span className="font-bold text-amber-300">Tháng 10/2026:</span>{' '}
            Bùng nổ với Ligue 1 Vòng 6 - 9 (<strong className="text-white font-bold">Siêu đại chiến PSG vs Lyon 26/10, Derby miền Bắc Lille vs Lens 31/10</strong>), Cúp C1 Matchday 2 & 3, Serie A trở lại từ 10/10 (<strong className="text-white font-bold">Milan vs Atalanta, Juve vs Lazio, Napoli vs Roma</strong>), và tâm điểm La Liga <strong className="text-white font-bold">🔥 Siêu kinh điển Barcelona vs Real Madrid (26/10)</strong>!
          </div>
        </div>
      )}

      {selectedMonth === '2026-11' && (
        <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-200 text-xs flex items-center gap-3">
          <Info className="w-5 h-5 text-blue-400 shrink-0" />
          <div>
            <span className="font-bold text-blue-300">Tháng 11/2026:</span>{' '}
            Trận cầu đinh Ligue 1 <strong className="text-white font-bold">Nice vs PSG (21/11), Choc des Olympiques Marseille vs Lyon (29/11) & PSG vs Monaco</strong>, cùng với <strong className="text-white font-bold">🔥 Derby della Madonnina: AC Milan vs Inter Milan (01/11)</strong>, đại chiến nước Đức <strong className="text-white font-bold">💥 Der Klassiker: Bayern vs BVB</strong> và <strong className="text-white font-bold">Juventus vs AC Milan & Derby Lazio vs Roma (29/11)</strong>!
          </div>
        </div>
      )}

      {selectedMonth === '2026-12' && (
        <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs flex items-center gap-3">
          <Flame className="w-5 h-5 text-rose-400 shrink-0" />
          <div>
            <span className="font-bold text-rose-300">Tháng 12/2026 - Mùa Đông Nghẹt Thở:</span>{' '}
            Siêu derby thủ đô nước Pháp <strong className="text-white font-bold">🔥 Paris Saint-Germain vs Paris FC (12/12)</strong>, đại chiến Le Classique <strong className="text-white font-bold">Marseille vs PSG (21/12) & Lyon vs Monaco</strong>, khép lại C1 Matchday 6, Derby d'Italia <strong className="text-white font-bold">Inter vs Juve</strong>, Revierderby Dortmund vs Schalke 04, và Boxing Day EPL!
          </div>
        </div>
      )}

      {/* Active Filter Summary Bar */}
      <div className="flex items-center justify-between text-xs text-slate-400 px-1">
        <span>
          Đang hiển thị <strong className="text-emerald-400">{filteredMatches.length}</strong> trận đấu
          {selectedMonth !== 'all' && ` trong ${MONTH_TABS.find((t) => t.id === selectedMonth)?.label}`}
          {selectedRound !== 'all' && ` · ${selectedRound}`}
          {selectedClub !== 'all' && ` · CLB: ${TOP_CLUBS_FILTER.find((c) => c.id === selectedClub)?.name}`}
        </span>
        {(selectedMonth !== 'all' || selectedRound !== 'all' || selectedClub !== 'all' || searchTerm) && (
          <button
            onClick={() => {
              setSelectedMonth('all');
              setSelectedRound('all');
              setSelectedClub('all');
              setSearchTerm('');
              setStatusFilter('ALL');
              setSelectedLeague('all');
            }}
            className="text-xs text-cyan-400 hover:text-cyan-300 underline font-medium cursor-pointer"
          >
            Đặt lại tất cả bộ lọc
          </button>
        )}
      </div>

      {/* Matches List */}
      {filteredMatches.length === 0 ? (
        <div className="p-12 text-center rounded-xl bg-[#09111e] border border-slate-800">
          <p className="text-slate-400 text-sm">Không tìm thấy trận đấu nào phù hợp với bộ lọc hiện tại.</p>
          <button
            onClick={() => {
              setSelectedLeague('all');
              setSelectedMonth('all');
              setSelectedRound('all');
              setSelectedClub('all');
              setStatusFilter('ALL');
              setSearchTerm('');
            }}
            className="mt-3 px-4 py-1.5 text-xs font-semibold text-emerald-400 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/10 cursor-pointer"
          >
            Xem toàn bộ lịch thi đấu
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredMatches.map((match) => {
            const league = LEAGUES_DATA.find((l) => l.id === match.leagueId);
            const { timeStr, dateStr } = formatDateTime(match.startTime);
            const countdown = calculateMatchCountdown(match.startTime);
            const isLive = match.status === 'LIVE';
            const isFinished = match.status === 'FINISHED';

            // Goal events for home and away
            const homeGoalEvents = match.events.filter(
              (e) =>
                (e.team === 'home' && (e.type === 'GOAL' || e.type === 'PENALTY_GOAL')) ||
                (e.team === 'away' && e.type === 'OWN_GOAL')
            );
            const awayGoalEvents = match.events.filter(
              (e) =>
                (e.team === 'away' && (e.type === 'GOAL' || e.type === 'PENALTY_GOAL')) ||
                (e.team === 'home' && e.type === 'OWN_GOAL')
            );
            const totalGoalEvents = [...homeGoalEvents, ...awayGoalEvents];

            return (
              <div
                key={match.id}
                className="p-4 sm:p-5 rounded-xl bg-[#09111e] border border-slate-800 hover:border-slate-700/80 transition-all flex flex-col gap-3 group shadow-lg"
              >
                {/* Top Row: Date, League, Status Badge & Actions */}
                <div className="flex flex-wrap items-center justify-between gap-2.5 pb-2.5 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{league?.flag || '🏴󠁧󠁢󠁥󠁮󠁧󠁿'}</span>
                    <span className="text-xs font-bold text-slate-200">{league?.shortName || 'Ngoại Hạng Anh'}</span>
                    <span className="text-slate-600 text-xs">·</span>
                    <span className="text-xs text-slate-400 truncate max-w-[240px]">{match.round}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Time or Status badge */}
                    {isLive ? (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-400 text-xs font-bold tabular-nums">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                        <span>{match.minute || 1}' LIVE</span>
                      </div>
                    ) : isFinished ? (
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                        <span>🏁</span>
                        <span>Chung cuộc (FT)</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-bold shadow-sm">
                        <Clock className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
                        <span>⏳ Chưa đá · {countdown.displayText}</span>
                      </div>
                    )}

                    {/* Vietnam Kickoff Time Badge */}
                    <div className="text-xs font-mono font-bold text-white bg-slate-800/90 px-2.5 py-0.5 rounded border border-slate-700/60 tabular-nums">
                      {timeStr} · {dateStr}
                    </div>
                  </div>
                </div>

                {/* Main Middle Row: Teams & Scoreboard */}
                <div
                  onClick={() => onSelectMatch(match)}
                  className="flex items-center justify-between sm:justify-center sm:gap-8 cursor-pointer py-1.5"
                >
                  {/* Home Team */}
                  <div className="flex items-center gap-3 sm:w-56 justify-end text-right">
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {match.homeTeam.name}
                    </span>
                    {match.homeTeam.logo.startsWith('http') ? (
                      <img
                        src={match.homeTeam.logo}
                        alt={match.homeTeam.shortName}
                        referrerPolicy="no-referrer"
                        className="w-8 sm:w-9 h-8 sm:h-9 object-contain rounded bg-slate-800/80 p-0.5 border border-slate-700/60 shrink-0"
                      />
                    ) : (
                      <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-xs text-white border border-slate-700 shrink-0">
                        {match.homeTeam.shortName.substring(0, 2)}
                      </div>
                    )}
                  </div>

                  {/* Final Score or VS Box */}
                  <div className="px-4 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-center min-w-[90px] sm:min-w-[110px] shadow-inner">
                    {isFinished ? (
                      <div>
                        <div className="text-lg sm:text-xl font-mono font-extrabold text-white tracking-wider tabular-nums">
                          {match.homeTeam.score} - {match.awayTeam.score}
                        </div>
                        <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mt-0.5">
                          Tỉ số FT
                        </div>
                      </div>
                    ) : isLive ? (
                      <div>
                        <div className="text-lg sm:text-xl font-mono font-extrabold text-emerald-400 tracking-wider tabular-nums">
                          {match.homeTeam.score} - {match.awayTeam.score}
                        </div>
                        <div className="text-[10px] font-bold text-rose-400 uppercase tracking-widest mt-0.5">
                          Đang đá
                        </div>
                      </div>
                    ) : (
                      <div>
                        <span className="text-sm sm:text-base font-mono font-bold text-cyan-400">VS</span>
                        <div className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest mt-0.5">
                          Chưa đá
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Away Team */}
                  <div className="flex items-center gap-3 sm:w-56 justify-start text-left">
                    {match.awayTeam.logo.startsWith('http') ? (
                      <img
                        src={match.awayTeam.logo}
                        alt={match.awayTeam.shortName}
                        referrerPolicy="no-referrer"
                        className="w-8 sm:w-9 h-8 sm:h-9 object-contain rounded bg-slate-800/80 p-0.5 border border-slate-700/60 shrink-0"
                      />
                    ) : (
                      <div className="w-8 sm:w-9 h-8 sm:h-9 rounded-lg bg-slate-800 flex items-center justify-center font-bold text-xs text-white border border-slate-700 shrink-0">
                        {match.awayTeam.shortName.substring(0, 2)}
                      </div>
                    )}
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {match.awayTeam.name}
                    </span>
                  </div>
                </div>

                {/* Countdown Box for matches that haven't been played yet (Chưa đá) */}
                {!isFinished && !isLive && (
                  <div className="mt-1 pt-2.5 pb-2.5 px-3.5 rounded-lg bg-gradient-to-r from-cyan-950/40 via-slate-900 to-emerald-950/30 border border-cyan-500/30 text-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                      <div className="flex items-center gap-2 text-cyan-300 font-semibold text-xs">
                        <Clock className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
                        <span>Trận đấu chưa diễn ra · Đếm ngược đến giờ bóng lăn:</span>
                      </div>

                      {/* Digital 4-Segment Countdown Clock */}
                      <div className="flex items-center gap-1.5 font-mono text-xs">
                        <div className="flex items-center gap-1 bg-black/70 px-2 py-1 rounded border border-cyan-500/40 text-cyan-300 font-bold">
                          <span className="text-sm text-white font-extrabold">{countdown.days}</span>
                          <span className="text-[10px] text-cyan-400">ngày</span>
                        </div>
                        <span className="text-cyan-400 font-bold">:</span>
                        <div className="flex items-center gap-1 bg-black/70 px-2 py-1 rounded border border-cyan-500/40 text-cyan-300 font-bold">
                          <span className="text-sm text-white font-extrabold">{String(countdown.hours).padStart(2, '0')}</span>
                          <span className="text-[10px] text-cyan-400">giờ</span>
                        </div>
                        <span className="text-cyan-400 font-bold">:</span>
                        <div className="flex items-center gap-1 bg-black/70 px-2 py-1 rounded border border-cyan-500/40 text-cyan-300 font-bold">
                          <span className="text-sm text-white font-extrabold">{String(countdown.minutes).padStart(2, '0')}</span>
                          <span className="text-[10px] text-cyan-400">phút</span>
                        </div>
                        <span className="text-cyan-400 font-bold">:</span>
                        <div className="flex items-center gap-1 bg-black/70 px-2 py-1 rounded border border-cyan-500/40 text-cyan-300 font-bold">
                          <span className="text-sm text-emerald-400 font-extrabold animate-pulse">{String(countdown.seconds).padStart(2, '0')}</span>
                          <span className="text-[10px] text-cyan-400">giây</span>
                        </div>
                      </div>
                    </div>

                    {/* Expandable Preview: Option to see expected final score & scorers */}
                    <div className="mt-2 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                      <span className="text-slate-400 italic">
                        Khởi tranh lúc: <strong className="text-slate-200 font-semibold">{timeStr} · {dateStr}</strong> (Asia/Saigon)
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleShowPrediction(match.id);
                        }}
                        className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1 underline decoration-dotted transition-colors cursor-pointer"
                      >
                        {revealedMatchIds.includes(match.id)
                          ? '▲ Ẩn dự kiến tỉ số sau trận'
                          : '▼ Xem tỉ số & cầu thủ ghi bàn sau trận'}
                      </button>
                    </div>

                    {/* Revealed match score and scorers */}
                    {revealedMatchIds.includes(match.id) && (
                      <div className="mt-2 p-2.5 rounded bg-slate-900/90 border border-slate-700/80 animate-in fade-in duration-200">
                        <div className="flex items-center justify-between mb-1.5 text-slate-300 font-bold text-[11px]">
                          <span>Dự kiến tỉ số sau trận: {match.homeTeam.name} {match.homeTeam.score} - {match.awayTeam.score} {match.awayTeam.name}</span>
                          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20">Kết quả</span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px]">
                          <div>
                            <span className="text-slate-400 font-medium">{match.homeTeam.name}: </span>
                            {homeGoalEvents.length === 0 ? (
                              <span className="text-slate-500 italic">0 bàn</span>
                            ) : (
                              homeGoalEvents.map((e) => (
                                <span key={e.id} className="inline-block mr-1 text-emerald-300 font-semibold">
                                  ⚽ {e.player} ({e.minute}')
                                </span>
                              ))
                            )}
                          </div>
                          <div>
                            <span className="text-slate-400 font-medium">{match.awayTeam.name}: </span>
                            {awayGoalEvents.length === 0 ? (
                              <span className="text-slate-500 italic">0 bàn</span>
                            ) : (
                              awayGoalEvents.map((e) => (
                                <span key={e.id} className="inline-block mr-1 text-emerald-300 font-semibold">
                                  ⚽ {e.player} ({e.minute}')
                                </span>
                              ))
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Prominent Goal Scorers Panel when finished */}
                {isFinished && (
                  <div className="mt-1 pt-2.5 pb-2 px-3.5 rounded-lg bg-slate-950/70 border border-slate-800/90 text-xs">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-slate-300 flex items-center gap-1.5 text-[11px] sm:text-xs">
                        <span>⚽</span>
                        <span className="text-emerald-300">Cầu thủ ghi bàn & Phút lập công:</span>
                        <span className="text-slate-400 font-mono">
                          (Chung cuộc: {match.homeTeam.score} - {match.awayTeam.score})
                        </span>
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {totalGoalEvents.length} bàn thắng
                      </span>
                    </div>

                    {totalGoalEvents.length === 0 ? (
                      <div className="text-slate-400 italic text-[11px] py-0.5">
                        Không có bàn thắng nào được ghi (Hòa 0 - 0).
                      </div>
                    ) : (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {/* Home Scorers */}
                        <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/70 p-2 rounded border border-slate-800/60">
                          <span className="font-bold text-slate-200 shrink-0 text-[11px]">
                            {match.homeTeam.name}:
                          </span>
                          {homeGoalEvents.length === 0 ? (
                            <span className="text-slate-400 text-[11px] italic">Không ghi bàn</span>
                          ) : (
                            homeGoalEvents.map((e) => (
                              <span
                                key={e.id}
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-slate-100 text-[11px]"
                              >
                                <span className="font-semibold text-white">{e.player}</span>
                                <span className="text-emerald-400 font-mono font-bold">
                                  {e.minute}'{e.extraMinute ? `+${e.extraMinute}'` : ''}
                                  {e.type === 'PENALTY_GOAL' ? ' (Pen)' : ''}
                                  {e.type === 'OWN_GOAL' ? ' (Phản lưới)' : ''}
                                </span>
                              </span>
                            ))
                          )}
                        </div>

                        {/* Away Scorers */}
                        <div className="flex flex-wrap items-center gap-1.5 bg-slate-900/70 p-2 rounded border border-slate-800/60">
                          <span className="font-bold text-slate-200 shrink-0 text-[11px]">
                            {match.awayTeam.name}:
                          </span>
                          {awayGoalEvents.length === 0 ? (
                            <span className="text-slate-400 text-[11px] italic">Không ghi bàn</span>
                          ) : (
                            awayGoalEvents.map((e) => (
                              <span
                                key={e.id}
                                className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-slate-100 text-[11px]"
                              >
                                <span className="font-semibold text-white">{e.player}</span>
                                <span className="text-emerald-400 font-mono font-bold">
                                  {e.minute}'{e.extraMinute ? `+${e.extraMinute}'` : ''}
                                  {e.type === 'PENALTY_GOAL' ? ' (Pen)' : ''}
                                  {e.type === 'OWN_GOAL' ? ' (Phản lưới)' : ''}
                                </span>
                              </span>
                            ))
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Bottom Row: Stadium, Referee & Actions */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-800/60 text-xs">
                  <div className="flex items-center gap-3 text-slate-400 text-[11px]">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-400" />
                      <span className="truncate max-w-[150px]">{match.stadium}</span>
                    </div>
                    {match.referee && (
                      <span className="hidden sm:inline text-slate-400">
                        Trọng tài: <strong className="text-slate-300 font-normal">{match.referee}</strong>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* View Stats Button */}
                    <button
                      onClick={() => onSelectMatch(match)}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-colors cursor-pointer"
                    >
                      <BarChart2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Chi tiết & Thống kê</span>
                    </button>

                    {/* Sync to Google Calendar */}
                    <a
                      href={getGoogleCalendarUrl(match)}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-cyan-950/50 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-500/30 text-xs font-medium transition-colors"
                      title="Thêm vào Google Calendar"
                    >
                      <CalendarPlus className="w-3.5 h-3.5" />
                      <span>Google Lịch</span>
                    </a>

                    {/* Download .ICS file */}
                    <button
                      onClick={() => handleDownloadICS(match)}
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
                      title="Tải file .ICS cho Apple Calendar / Outlook"
                    >
                      {syncedMatchId === match.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Download className="w-3.5 h-3.5" />
                      )}
                      <span>.ICS</span>
                    </button>

                    {/* Pre-Match Analysis */}
                    <button
                      onClick={() => onOpenAnalysis(match)}
                      className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors cursor-pointer"
                      title="Xem nhận định chuyên gia"
                    >
                      Nhận định
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
