import React from 'react';
import { Bell, Moon, Sun, Zap, Radio, Trophy, Search, Image as ImageIcon, User, ShieldCheck } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  onOpenNotifications: () => void;
  onOpenPredictions: () => void;
  onTriggerTestGoal: () => void;
  onOpenCustomizer?: () => void;
  onOpenAdmin?: () => void;
  onOpenAuth?: () => void;
  liveMatchCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  isDarkMode,
  setIsDarkMode,
  onOpenNotifications,
  onOpenPredictions,
  onTriggerTestGoal,
  onOpenCustomizer,
  onOpenAdmin,
  onOpenAuth,
  liveMatchCount
}) => {
  const { currentUser, isAdmin } = useAdmin();
  const navItems = [
    { id: 'scores', label: 'Tỉ số & Trận đấu' },
    { id: 'schedule', label: 'Lịch thi đấu' },
    { id: 'standings', label: 'Bảng xếp hạng' },
    { id: 'highlights', label: 'Highlight 4K' },
    { id: 'analysis', label: 'Nhận định chuyên gia' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#080d16]/90 border-b border-emerald-500/20 text-slate-100 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Zone 1: Single element wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('scores')}
            className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none group py-1"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-slate-900 border border-emerald-500/40 flex items-center justify-center overflow-hidden group-hover:border-emerald-400 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)]">
              <span className="text-xl group-hover:scale-110 transition-transform">⚽</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/25 to-cyan-500/0 pointer-events-none" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5">
                <span className="text-lg sm:text-xl font-black tracking-wider uppercase bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_1px_10px_rgba(16,185,129,0.3)]">
                  CHẠM CỎ SỐ
                </span>
                <span className="inline-flex items-center text-[10px] font-extrabold text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/40 uppercase tracking-widest">
                  LIVE
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-400 font-medium tracking-normal leading-tight group-hover:text-emerald-300/80 transition-colors">
                Chạm vào đam mê, sống cùng bóng đá
              </p>
            </div>
          </button>
        </div>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-3.5 py-2 text-sm font-medium transition-all whitespace-nowrap rounded-md ${
                  isActive
                    ? 'text-emerald-400 bg-emerald-500/10 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                {item.label}
                {item.id === 'scores' && liveMatchCount > 0 && (
                  <span className="inline-flex items-center ml-2 px-1.5 py-0.2 text-[10px] font-bold bg-rose-500/20 text-rose-400 rounded-full border border-rose-500/30 animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mr-1" />
                    {liveMatchCount}
                  </span>
                )}
                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Admin Control Center button: EXCLUSIVELY for humilin182@gmail.com */}
          {isAdmin && onOpenAdmin && (
            <button
              onClick={onOpenAdmin}
              title="Mở Bảng Quản Trị (Thêm trận, Sửa trận, Xóa trận, Quản lý/Xóa giải đấu)"
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-bold text-amber-300 bg-amber-500/20 border border-amber-500/40 rounded-lg hover:bg-amber-500/30 transition-all cursor-pointer shadow-sm"
            >
              <span className="text-sm">👑</span>
              <span>Quản Trị</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </button>
          )}

          {/* Account Profile / Login button */}
          {onOpenAuth && (
            <button
              onClick={onOpenAuth}
              title={
                currentUser
                  ? isAdmin
                    ? `Quản trị viên: ${currentUser.email}`
                    : `Tài khoản: ${currentUser.email}`
                  : 'Đăng nhập'
              }
              className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border text-xs transition-all cursor-pointer ${
                isAdmin
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-200 hover:bg-amber-500/25'
                  : 'bg-slate-900/90 hover:bg-slate-850 border-slate-700/80 text-slate-200'
              }`}
            >
              {currentUser ? (
                <>
                  <img
                    src={currentUser.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=64&q=80'}
                    alt="avatar"
                    className="w-4 h-4 rounded-full object-cover"
                  />
                  {isAdmin && <span className="text-amber-400 font-bold">👑</span>}
                  <span className="font-mono text-[11px] truncate max-w-[120px] sm:max-w-[150px]">
                    {currentUser.email}
                  </span>
                </>
              ) : (
                <>
                  <User className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Đăng nhập</span>
                </>
              )}
            </button>
          )}

          {/* Goal alert test simulation button */}
          <button
            onClick={onTriggerTestGoal}
            title="Thử nghiệm báo bàn thắng tức thì (Live Goal Simulation)"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-lg hover:bg-amber-500/20 transition-all hover:scale-[1.02]"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
            <span className="hidden sm:inline">Thử báo bàn thắng</span>
          </button>

          {/* Prediction mini game shortcut */}
          <button
            onClick={onOpenPredictions}
            title="Dự đoán tỉ số cùng bạn bè"
            className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/20 transition-all"
          >
            <Trophy className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Dự đoán điểm</span>
          </button>

          {/* Personalized push notification preferences */}
          <button
            onClick={onOpenNotifications}
            title="Cài đặt thông báo giải đấu & đội bóng"
            className="p-2 text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 rounded-lg transition-colors relative"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#080d16]" />
          </button>

          {/* Custom Theme / Image Customizer from PC or Phone */}
          {onOpenCustomizer && (
            <button
              onClick={onOpenCustomizer}
              title="Tùy biến hình ảnh giao diện từ máy tính hoặc album điện thoại"
              className="p-2 text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 rounded-lg transition-colors relative"
            >
              <ImageIcon className="w-4 h-4" />
            </button>
          )}

          {/* Dark / Stadium Light Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            title={isDarkMode ? 'Chuyển sang Chế độ sáng ban ngày' : 'Chuyển sang Chế độ tối ban đêm'}
            className="p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Horizontal Navigation Strip */}
      <div className="lg:hidden border-t border-slate-800/80 bg-[#070b13] px-3 py-1.5 overflow-x-auto scrollbar-none flex items-center gap-1.5">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3 py-1 text-xs font-semibold rounded-md whitespace-nowrap transition-colors shrink-0 ${
                isActive
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              {item.label}
              {item.id === 'scores' && liveMatchCount > 0 && (
                <span className="ml-1.5 px-1 py-0.2 text-[9px] font-bold bg-rose-500 text-white rounded-full">
                  {liveMatchCount}
                </span>
              )}
            </button>
          );
        })}
      </div>
    </header>
  );
};
