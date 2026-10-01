import React, { useState, useEffect } from 'react';
import { Match, MatchStatus, MatchEvent, LeagueId } from '../types/football';
import { X, Save, Trash2, Clock, MapPin, Shield, Plus, Minus, Trophy } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

interface EditMatchModalProps {
  match: Match | null;
  onClose: () => void;
}

export const EditMatchModal: React.FC<EditMatchModalProps> = ({ match, onClose }) => {
  const { leagues, updateMatch, deleteMatch } = useAdmin();

  const [leagueId, setLeagueId] = useState<string>('ucl');
  const [round, setRound] = useState('');
  const [startTime, setStartTime] = useState('');
  const [status, setStatus] = useState<MatchStatus>('SCHEDULED');
  const [minute, setMinute] = useState<number>(0);
  const [stadium, setStadium] = useState('');
  const [city, setCity] = useState('');

  const [homeName, setHomeName] = useState('');
  const [homeShort, setHomeShort] = useState('');
  const [homeScore, setHomeScore] = useState(0);
  const [homeLogo, setHomeLogo] = useState('');

  const [awayName, setAwayName] = useState('');
  const [awayShort, setAwayShort] = useState('');
  const [awayScore, setAwayScore] = useState(0);
  const [awayLogo, setAwayLogo] = useState('');

  const [events, setEvents] = useState<MatchEvent[]>([]);
  const [newScorerName, setNewScorerName] = useState('');
  const [newScorerMinute, setNewScorerMinute] = useState(70);
  const [newScorerTeam, setNewScorerTeam] = useState<'home' | 'away'>('home');

  useEffect(() => {
    if (match) {
      setLeagueId(match.leagueId || 'ucl');
      setRound(match.round || '');
      setStartTime(match.startTime || new Date().toISOString());
      setStatus(match.status);
      setMinute(match.minute || (match.status === 'LIVE' ? 65 : 0));
      setStadium(match.stadium || '');
      setCity(match.city || '');

      setHomeName(match.homeTeam.name);
      setHomeShort(match.homeTeam.shortName || match.homeTeam.name);
      setHomeScore(match.homeTeam.score);
      setHomeLogo(match.homeTeam.logo || '');

      setAwayName(match.awayTeam.name);
      setAwayShort(match.awayTeam.shortName || match.awayTeam.name);
      setAwayScore(match.awayTeam.score);
      setAwayLogo(match.awayTeam.logo || '');

      setEvents(match.events || []);
    }
  }, [match]);

  if (!match) return null;

  const handleAddScorer = () => {
    if (!newScorerName.trim()) return;
    const newEvent: MatchEvent = {
      id: `goal-${Date.now()}`,
      minute: Number(newScorerMinute) || 1,
      type: 'GOAL',
      team: newScorerTeam,
      player: newScorerName.trim()
    };
    setEvents((prev) => [...prev, newEvent]);
    // Also increment that team's score
    if (newScorerTeam === 'home') {
      setHomeScore((s) => s + 1);
    } else {
      setAwayScore((s) => s + 1);
    }
    setNewScorerName('');
  };

  const handleRemoveEvent = (eventId: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== eventId));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    updateMatch(match.id, {
      leagueId: leagueId as LeagueId,
      status,
      minute: status === 'LIVE' ? minute : undefined,
      startTime,
      round,
      stadium,
      city,
      events,
      homeTeam: {
        ...match.homeTeam,
        name: homeName.trim(),
        shortName: homeShort.trim() || homeName.trim(),
        score: Math.max(0, Number(homeScore)),
        logo: homeLogo.trim()
      },
      awayTeam: {
        ...match.awayTeam,
        name: awayName.trim(),
        shortName: awayShort.trim() || awayName.trim(),
        score: Math.max(0, Number(awayScore)),
        logo: awayLogo.trim()
      }
    });
    onClose();
  };

  const [confirmDelete, setConfirmDelete] = useState(false);

  const handleDelete = () => {
    if (!confirmDelete) {
      setConfirmDelete(true);
      return;
    }
    deleteMatch(match.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#09111e] border border-amber-500/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-amber-950/80 via-slate-900 to-amber-950/80 border-b border-amber-500/40 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-300 text-lg shadow">
              👑
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-black text-white flex items-center gap-2">
                Chỉnh Sửa Trận Đấu (Admin Quyền Lực)
              </h3>
              <p className="text-[11px] text-amber-300/80">
                Thay đổi tỉ số, trạng thái, ngày giờ, bàn thắng hoặc xóa trận
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-4 sm:p-5 space-y-4 overflow-y-auto flex-1 text-xs">
          {/* League & Round */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-300 mb-1">Thuộc giải đấu:</label>
              <select
                value={leagueId}
                onChange={(e) => setLeagueId(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-bold focus:border-amber-400"
              >
                {leagues.map((l) => (
                  <option key={l.id} value={l.id}>
                    {l.flag} {l.shortName} ({l.name})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-bold text-slate-300 mb-1">Tên vòng đấu / Mô tả:</label>
              <input
                type="text"
                value={round}
                onChange={(e) => setRound(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white focus:border-amber-400"
                required
              />
            </div>
          </div>

          {/* Status, Time & Minute */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
            <div>
              <label className="block font-bold text-slate-300 mb-1">Trạng thái trận đấu:</label>
              <select
                value={status}
                onChange={(e) => {
                  const s = e.target.value as MatchStatus;
                  setStatus(s);
                  if (s === 'SCHEDULED' && homeScore === 0 && awayScore === 0) {
                    setMinute(0);
                  }
                }}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-bold focus:border-amber-400"
              >
                <option value="SCHEDULED">⏳ Chưa đá (SCHEDULED)</option>
                <option value="LIVE">🔴 Đang trực tiếp (LIVE)</option>
                <option value="FINISHED">✓ Đã kết thúc (FINISHED)</option>
              </select>
            </div>
            <div>
              <label className="block font-bold text-slate-300 mb-1">Thời gian (ISO GMT+7):</label>
              <input
                type="text"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-mono focus:border-amber-400"
                required
              />
            </div>
            <div>
              <label className="block font-bold text-slate-300 mb-1">Phút thi đấu (khi LIVE):</label>
              <input
                type="number"
                min="0"
                max="130"
                value={minute}
                onChange={(e) => setMinute(Number(e.target.value))}
                disabled={status !== 'LIVE'}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white focus:border-amber-400 disabled:opacity-40"
              />
            </div>
          </div>

          {/* Stadium & City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-bold text-slate-300 mb-1">Sân vận động:</label>
              <input
                type="text"
                value={stadium}
                onChange={(e) => setStadium(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block font-bold text-slate-300 mb-1">Thành phố:</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white focus:border-amber-400"
              />
            </div>
          </div>

          {/* Home Team */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-emerald-500/30 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-emerald-400 block uppercase tracking-wider text-[11px]">
                🏠 Đội Nhà (Home Team)
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-slate-400 font-semibold">Tỉ số:</span>
                <button
                  type="button"
                  onClick={() => setHomeScore((s) => Math.max(0, s - 1))}
                  className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center font-bold"
                >
                  -
                </button>
                <span className="w-8 text-center text-emerald-400 font-bold font-mono text-sm">
                  {homeScore}
                </span>
                <button
                  type="button"
                  onClick={() => setHomeScore((s) => s + 1)}
                  className="w-6 h-6 rounded bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="sm:col-span-2">
                <label className="block text-[11px] text-slate-400 mb-0.5">Tên CLB đầy đủ:</label>
                <input
                  type="text"
                  value={homeName}
                  onChange={(e) => setHomeName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-md p-1.5 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-0.5">Tên viết tắt:</label>
                <input
                  type="text"
                  value={homeShort}
                  onChange={(e) => setHomeShort(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-md p-1.5 text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-0.5">Logo URL (Link ảnh):</label>
              <input
                type="text"
                value={homeLogo}
                onChange={(e) => setHomeLogo(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-md p-1.5 text-white font-mono text-[11px]"
              />
            </div>
          </div>

          {/* Away Team */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/30 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="font-bold text-cyan-400 block uppercase tracking-wider text-[11px]">
                ✈️ Đội Khách (Away Team)
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] text-slate-400 font-semibold">Tỉ số:</span>
                <button
                  type="button"
                  onClick={() => setAwayScore((s) => Math.max(0, s - 1))}
                  className="w-6 h-6 rounded bg-slate-800 hover:bg-slate-700 text-white flex items-center justify-center font-bold"
                >
                  -
                </button>
                <span className="w-8 text-center text-cyan-400 font-bold font-mono text-sm">
                  {awayScore}
                </span>
                <button
                  type="button"
                  onClick={() => setAwayScore((s) => s + 1)}
                  className="w-6 h-6 rounded bg-cyan-600 hover:bg-cyan-500 text-white flex items-center justify-center font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <div className="sm:col-span-2">
                <label className="block text-[11px] text-slate-400 mb-0.5">Tên CLB đầy đủ:</label>
                <input
                  type="text"
                  value={awayName}
                  onChange={(e) => setAwayName(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-md p-1.5 text-white"
                  required
                />
              </div>
              <div>
                <label className="block text-[11px] text-slate-400 mb-0.5">Tên viết tắt:</label>
                <input
                  type="text"
                  value={awayShort}
                  onChange={(e) => setAwayShort(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-md p-1.5 text-white"
                />
              </div>
            </div>
            <div>
              <label className="block text-[11px] text-slate-400 mb-0.5">Logo URL (Link ảnh):</label>
              <input
                type="text"
                value={awayLogo}
                onChange={(e) => setAwayLogo(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-md p-1.5 text-white font-mono text-[11px]"
              />
            </div>
          </div>

          {/* Goal Scorers Editor */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2.5">
            <span className="font-bold text-slate-300 block text-[11px]">
              ⚽ Cầu thủ ghi bàn & Phút lập công ({events.length}):
            </span>

            {events.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {events.map((ev) => (
                  <span
                    key={ev.id}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-850 border border-slate-700 text-slate-200"
                  >
                    <span>⚽ {ev.player} ({ev.minute}')</span>
                    <span className="text-[10px] text-slate-400 uppercase">
                      [{ev.team === 'home' ? homeShort || 'Nhà' : awayShort || 'Khách'}]
                    </span>
                    <button
                      type="button"
                      onClick={() => handleRemoveEvent(ev.id)}
                      className="text-rose-400 hover:text-rose-300 font-bold ml-1 cursor-pointer"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>
            )}

            <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-800/80">
              <input
                type="text"
                value={newScorerName}
                onChange={(e) => setNewScorerName(e.target.value)}
                placeholder="Tên cầu thủ (VD: Haaland, Mbappe)..."
                className="flex-1 min-w-[140px] bg-slate-950 border border-slate-700 rounded-md p-1.5 text-white text-[11px]"
              />
              <input
                type="number"
                min="1"
                max="120"
                value={newScorerMinute}
                onChange={(e) => setNewScorerMinute(Number(e.target.value))}
                placeholder="Phút"
                className="w-16 bg-slate-950 border border-slate-700 rounded-md p-1.5 text-white text-[11px] text-center"
              />
              <select
                value={newScorerTeam}
                onChange={(e) => setNewScorerTeam(e.target.value as any)}
                className="bg-slate-950 border border-slate-700 rounded-md p-1.5 text-white text-[11px]"
              >
                <option value="home">Đội Nhà ({homeShort || 'Home'})</option>
                <option value="away">Đội Khách ({awayShort || 'Away'})</option>
              </select>
              <button
                type="button"
                onClick={handleAddScorer}
                className="px-3 py-1.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-[11px] cursor-pointer"
              >
                + Thêm bàn
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleDelete}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl transition-all cursor-pointer font-bold ${
                confirmDelete
                  ? 'bg-rose-600 hover:bg-rose-700 text-white border border-rose-500 shadow-md animate-pulse'
                  : 'bg-rose-500/15 hover:bg-rose-500/25 text-rose-400 border border-rose-500/30'
              }`}
            >
              <Trash2 className="w-4 h-4" />
              <span>{confirmDelete ? 'Nhấn lần nữa để xóa vĩnh viễn' : 'Xóa trận đấu này'}</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl font-medium cursor-pointer"
              >
                Hủy
              </button>
              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2 bg-gradient-to-r from-amber-500 to-emerald-500 text-slate-950 font-bold rounded-xl shadow-lg hover:brightness-110 cursor-pointer"
              >
                <Save className="w-4 h-4" />
                <span>Lưu thay đổi</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
