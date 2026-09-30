import React, { useState, useEffect } from 'react';
import { Match, LeagueId } from '../types/football';
import { LEAGUES_DATA } from '../data/mockFootballData';
import { Calendar, CalendarPlus, Clock, MapPin, Download, Check, BarChart2, Search, Info } from 'lucide-react';
import { getGoogleCalendarUrl, downloadMatchICS } from '../services/calendarExport';
import { calculateMatchCountdown } from '../services/footballApi';

interface ScheduleSectionProps {
  matches: Match[];
  onSelectMatch: (match: Match) => void;
  onOpenAnalysis: (match: Match) => void;
  onOpenPrediction: (match: Match) => void;
}

// Helper to partition matches into prompt-defined date phases
export function getMatchDatePhase(match: Match): string {
  const d = new Date(match.startTime);
  const timeMs = d.getTime();

  // 01/10 18:00 to 02/10 06:00 (GMT+7)
  const g1Start = new Date('2026-10-01T18:00:00+07:00').getTime();
  const g1End = new Date('2026-10-02T06:00:00+07:00').getTime();
  if (timeMs >= g1Start && timeMs <= g1End) return '2026-10-01';

  // 02/10 18:00 to 03/10 06:00
  const g2Start = new Date('2026-10-02T18:00:00+07:00').getTime();
  const g2End = new Date('2026-10-03T06:00:00+07:00').getTime();
  if (timeMs >= g2Start && timeMs <= g2End) return '2026-10-02';

  // 03/10 18:00 to 04/10 06:00
  const g3Start = new Date('2026-10-03T18:00:00+07:00').getTime();
  const g3End = new Date('2026-10-04T06:00:00+07:00').getTime();
  if (timeMs >= g3Start && timeMs <= g3End) return '2026-10-03';

  // 04/10 18:00 to 05/10 06:00
  const g4Start = new Date('2026-10-04T18:00:00+07:00').getTime();
  const g4End = new Date('2026-10-05T06:00:00+07:00').getTime();
  if (timeMs >= g4Start && timeMs <= g4End) return '2026-10-04';

  // 05/10 18:00 to 06/10 06:00
  const g5Start = new Date('2026-10-05T18:00:00+07:00').getTime();
  const g5End = new Date('2026-10-06T06:00:00+07:00').getTime();
  if (timeMs >= g5Start && timeMs <= g5End) return '2026-10-05';

  // 09/10 đêm to 10/10 sáng (02:00, 02:30 sáng 10/10)
  const g6Start = new Date('2026-10-09T20:00:00+07:00').getTime();
  const g6End = new Date('2026-10-10T06:00:00+07:00').getTime();
  if (timeMs >= g6Start && timeMs <= g6End) return '2026-10-09';

  // 10/10 ban ngày & tối (18:30 đến 23:59)
  const g7Start = new Date('2026-10-10T06:00:00+07:00').getTime();
  const g7End = new Date('2026-10-10T23:59:59+07:00').getTime();
  if (timeMs >= g7Start && timeMs <= g7End) return '2026-10-10';

  // 10/10 đêm to 11/10 rạng sáng (02:00 sáng 11/10)
  const g8Start = new Date('2026-10-11T00:00:00+07:00').getTime();
  const g8End = new Date('2026-10-11T06:00:00+07:00').getTime();
  if (timeMs >= g8Start && timeMs <= g8End) return '2026-10-11';

  return 'other';
}

export const ScheduleSection: React.FC<ScheduleSectionProps> = ({
  matches,
  onSelectMatch,
  onOpenAnalysis,
  onOpenPrediction
}) => {
  const [selectedLeague, setSelectedLeague] = useState<LeagueId | 'all'>('all');
  const [selectedDateFilter, setSelectedDateFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'FINISHED' | 'SCHEDULED' | 'LIVE'>('ALL');
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

  const DATE_PRESETS = [
    { id: 'all', label: 'Tất cả các ngày (01 - 11/10)' },
    { id: '2026-10-01', label: '01/10 - 02/10 (Đức, Bồ Đào Nha...)' },
    { id: '2026-10-02', label: '02/10 - 03/10 (Pháp vs Ý, Bỉ...)' },
    { id: '2026-10-03', label: '03/10 - 04/10 (Croatia vs Anh...)' },
    { id: '2026-10-04', label: '04/10 - 05/10 (Bồ Đào Nha vs Na Uy...)' },
    { id: '2026-10-05', label: '05/10 - 06/10 (Ý vs Thổ Nhĩ Kỳ, Pháp...)' },
    { id: 'rest', label: '07/10 - 08/10 (Nghỉ di chuyển)' },
    { id: '2026-10-09', label: '09/10 - 10/10 (Dortmund, La Liga)' },
    { id: '2026-10-10', label: '10/10 (Arsenal, Chelsea, MU vs Tot, Barca)' },
    { id: '2026-10-11', label: '10/10 - 11/10 (Real Madrid vs Villarreal)' }
  ];

  const filteredMatches = matches.filter((m) => {
    if (selectedLeague !== 'all' && m.leagueId !== selectedLeague) return false;
    if (statusFilter !== 'ALL' && m.status !== statusFilter) return false;

    if (selectedDateFilter === 'rest') {
      return false; // The rest period has no matches; displays notice banner below
    }

    if (selectedDateFilter !== 'all') {
      const phase = getMatchDatePhase(m);
      if (phase !== selectedDateFilter) return false;
    }

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

  return (
    <div className="space-y-6">
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-emerald-400" />
            Lịch Thi Đấu & Kết Quả Chi Tiết (Tháng 10/2026)
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Hiển thị chuẩn múi giờ <strong className="text-emerald-300">Asia/Saigon (GMT+7)</strong> · Tỉ số chung cuộc & danh sách cầu thủ ghi bàn theo phút
          </p>
        </div>

        {/* Search input for team, scorer or stadium */}
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo tên đội, cầu thủ ghi bàn, SVĐ..."
            className="w-full sm:w-72 bg-slate-900 border border-slate-700/80 rounded-lg pl-8 pr-3.5 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-emerald-400"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
        </div>
      </div>

      {/* Date & Status Filter Strips */}
      <div className="space-y-2.5">
        {/* Status Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            onClick={() => setStatusFilter('ALL')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg shrink-0 transition-all ${
              statusFilter === 'ALL'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            Tất cả ({matches.length})
          </button>
          <button
            onClick={() => setStatusFilter('FINISHED')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg shrink-0 transition-all ${
              statusFilter === 'FINISHED'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            🏁 Đã có kết quả & Cầu thủ ghi bàn ({matches.filter((m) => m.status === 'FINISHED').length})
          </button>
          <button
            onClick={() => setStatusFilter('SCHEDULED')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg shrink-0 transition-all ${
              statusFilter === 'SCHEDULED'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md shadow-emerald-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            ⏳ Sắp diễn ra ({matches.filter((m) => m.status === 'SCHEDULED').length})
          </button>
          <button
            onClick={() => setStatusFilter('LIVE')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg shrink-0 transition-all ${
              statusFilter === 'LIVE'
                ? 'bg-rose-500 text-white font-bold shadow-md shadow-rose-500/20'
                : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            🔴 Đang đá Live ({matches.filter((m) => m.status === 'LIVE').length})
          </button>
        </div>

        {/* Date Presets Strip */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-[11px] font-semibold text-slate-400 shrink-0 mr-1 flex items-center gap-1">
            <Clock className="w-3 h-3 text-cyan-400" />
            Lọc giai đoạn:
          </span>
          {DATE_PRESETS.map((dp) => (
            <button
              key={dp.id}
              onClick={() => setSelectedDateFilter(dp.id)}
              className={`px-2.5 py-1 text-[11px] font-medium rounded-md shrink-0 transition-all ${
                selectedDateFilter === dp.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {dp.label}
            </button>
          ))}
        </div>

        {/* League selector filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
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

      {/* Official Rest Days Notice (07/10 - 08/10) */}
      {(selectedDateFilter === 'all' || selectedDateFilter === 'rest') && (
        <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-center gap-3">
          <Info className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <span className="font-bold text-amber-300">Giai đoạn từ ngày 07/10 đến 08/10/2026:</span>{' '}
            Các giải đấu tạm nghỉ để các đội tuyển & CLB di chuyển chuẩn bị cho loạt trận giải VĐQG cuối tuần (Premier League, La Liga, Bundesliga).
          </div>
        </div>
      )}

      {/* Matches List */}
      {filteredMatches.length === 0 && selectedDateFilter !== 'rest' ? (
        <div className="p-12 text-center rounded-xl bg-[#09111e] border border-slate-800">
          <p className="text-slate-400 text-sm">Không tìm thấy trận đấu nào phù hợp với bộ lọc hiện tại.</p>
          <button
            onClick={() => {
              setSelectedLeague('all');
              setSelectedDateFilter('all');
              setStatusFilter('ALL');
              setSearchTerm('');
            }}
            className="mt-3 px-4 py-1.5 text-xs font-semibold text-emerald-400 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/10"
          >
            Xem toàn bộ 54 trận đấu
          </button>
        </div>
      ) : (
        <div className="space-y-3.5">
          {filteredMatches.map((match) => {
            const { timeStr, dateStr } = formatDateTime(match.startTime);
            const league = LEAGUES_DATA.find((l) => l.id === match.leagueId);
            const isLive = match.status === 'LIVE';
            const isFinished = match.status === 'FINISHED';
            const countdown = calculateMatchCountdown(match.startTime);

            // Separate goal events by home and away team
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
                    <span className="text-sm">{league?.flag}</span>
                    <span className="text-xs font-bold text-slate-200">{league?.shortName}</span>
                    <span className="text-slate-600 text-xs">·</span>
                    <span className="text-xs text-slate-400 truncate max-w-[200px]">{match.round}</span>
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
                          <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20">Kết quả</span>
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

                {/* Prominent Goal Scorers Panel (Requirement: sau mỗi trận hiển thị tỉ số chung cuộc, tên cầu thủ ghi bàn của trận đấu đó ở phút bao nhiêu) */}
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
                      className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
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
                      className="px-2.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium transition-colors"
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

