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
  onTriggerTestGoal?: () => void;
  onOpenCustomizer?: () => void;
  onOpenAdmin?: () => void;
  onOpenAuth?: () => void;
  liveMatchCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  isDarkMode,
  setIsDarkMode,
  onOpenNotifications,
  onOpenPredictions,
  onOpenCustomizer,
  onOpenAdmin,
  onOpenAuth,
  liveMatchCount = 0
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
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Zone 1: Single element wordmark */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={() => setActiveTab('scores')}
            className="flex items-center gap-2 sm:gap-3 text-left focus:outline-none group py-1"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-emerald-500/20 via-cyan-500/10 to-slate-900 border border-emerald-500/40 flex items-center justify-center overflow-hidden group-hover:border-emerald-400 transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] shrink-0">
              <span className="text-base sm:text-xl group-hover:scale-110 transition-transform">⚽</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/25 to-cyan-500/0 pointer-events-none" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5">
                <span className="text-sm sm:text-xl font-black tracking-wider uppercase bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-200 bg-clip-text text-transparent drop-shadow-[0_1px_10px_rgba(16,185,129,0.3)]">
                  CHẠM CỎ SỐ
                </span>
                <span className="inline-flex items-center text-[9px] sm:text-[10px] font-extrabold text-emerald-400 px-1 sm:px-1.5 py-0.2 sm:py-0.5 rounded bg-emerald-500/15 border border-emerald-500/40 uppercase tracking-widest">
                  24/7
                </span>
              </div>
              <p className="hidden xs:block text-[9px] sm:text-[11px] text-slate-400 font-medium tracking-normal leading-tight group-hover:text-emerald-300/80 transition-colors">
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

        {/* Zone 3: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
          {/* Admin Control Center button: EXCLUSIVELY for humilin182@gmail.com */}
          {isAdmin && onOpenAdmin && (
            <button
              onClick={onOpenAdmin}
              title="Mở Bảng Quản Trị (Thêm trận, Sửa trận, Xóa trận, Quản lý/Xóa giải đấu)"
              className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1.5 text-xs font-bold text-amber-300 bg-amber-500/20 border border-amber-500/40 rounded-lg hover:bg-amber-500/30 transition-all cursor-pointer shadow-sm shrink-0"
            >
              <span className="text-sm">👑</span>
              <span className="hidden xs:inline">Quản Trị</span>
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
              className={`flex items-center gap-1.5 px-2 sm:px-3 py-1.5 rounded-lg border text-xs transition-all cursor-pointer shrink-0 ${
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
                    className="w-4 h-4 rounded-full object-cover shrink-0"
                  />
                  {isAdmin && <span className="text-amber-400 font-bold">👑</span>}
                  <span className="font-mono text-[11px] truncate max-w-[65px] xs:max-w-[100px] sm:max-w-[150px]">
                    {currentUser.email}
                  </span>
                </>
              ) : (
                <>
                  <User className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-emerald-400 font-bold text-xs">Đăng nhập</span>
                </>
              )}
            </button>
          )}

          {/* Prediction mini game shortcut */}
          <button
            onClick={onOpenPredictions}
            title="Dự đoán tỉ số cùng bạn bè"
            className="hidden md:flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 text-xs font-medium text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 rounded-lg hover:bg-emerald-500/20 transition-all shrink-0"
          >
            <Trophy className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Dự đoán điểm</span>
          </button>

          {/* Personalized push notification preferences */}
          <button
            onClick={onOpenNotifications}
            title="Cài đặt thông báo giải đấu & đội bóng"
            className="p-1.5 sm:p-2 text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 rounded-lg transition-colors relative shrink-0"
          >
            <Bell className="w-4 h-4" />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#080d16]" />
          </button>

          {/* Custom Theme / Image Customizer from PC or Phone */}
          {onOpenCustomizer && (
            <button
              onClick={onOpenCustomizer}
              title="Tùy biến hình ảnh giao diện từ máy tính hoặc album điện thoại"
              className="p-1.5 sm:p-2 text-slate-300 hover:text-emerald-400 hover:bg-slate-800/60 rounded-lg transition-colors relative shrink-0"
            >
              <ImageIcon className="w-4 h-4" />
            </button>
          )}

          {/* Dark / Stadium Light Mode Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            title={isDarkMode ? 'Chuyển sang Chế độ sáng ban ngày' : 'Chuyển sang Chế độ tối ban đêm'}
            className="p-1.5 sm:p-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-lg transition-colors shrink-0"
          >
            {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Horizontal Navigation Strip */}
      <div className="lg:hidden border-t border-slate-800/80 bg-[#070b13] px-2.5 sm:px-4 py-2 overflow-x-auto scrollbar-none flex items-center gap-1.5 touch-pan-x">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg whitespace-nowrap transition-colors shrink-0 flex items-center gap-1 min-h-[36px] ${
                isActive
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white bg-slate-900/60 border border-slate-800/80'
              }`}
            >
              <span>{item.label}</span>
              {item.id === 'scores' && liveMatchCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 text-[9px] font-bold bg-rose-500 text-white rounded-full">
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
