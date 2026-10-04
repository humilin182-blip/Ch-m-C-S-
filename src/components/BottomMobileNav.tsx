import React from 'react';
import { Flame, Calendar, Trophy, BarChart3, User, ShieldCheck } from 'lucide-react';
import { useAdmin } from '../context/AdminContext';

interface BottomMobileNavProps {
  activeTab: 'scores' | 'schedule' | 'standings' | 'highlights' | 'analysis';
  setActiveTab: (tab: 'scores' | 'schedule' | 'standings' | 'highlights' | 'analysis') => void;
  liveMatchCount?: number;
  onOpenAuth: () => void;
}

export const BottomMobileNav: React.FC<BottomMobileNavProps> = ({
  activeTab,
  setActiveTab,
  liveMatchCount = 0,
  onOpenAuth
}) => {
  const { currentUser, isAdmin, setIsAdminCenterOpen } = useAdmin();

  const navItems = [
    {
      id: 'scores' as const,
      label: 'Trận đấu',
      icon: (active: boolean) => (
        <div className="relative">
          <span className="text-lg">⚽</span>
        </div>
      )
    },
    {
      id: 'schedule' as const,
      label: 'Lịch đấu',
      icon: (active: boolean) => (
        <Calendar className={`w-5 h-5 ${active ? 'text-emerald-400' : 'text-slate-400'}`} />
      )
    },
    {
      id: 'standings' as const,
      label: 'Bảng xếp hạng',
      icon: (active: boolean) => (
        <Trophy className={`w-5 h-5 ${active ? 'text-emerald-400' : 'text-slate-400'}`} />
      )
    },
    {
      id: 'highlights' as const,
      label: 'Highlights',
      icon: (active: boolean) => (
        <Flame className={`w-5 h-5 ${active ? 'text-amber-400' : 'text-slate-400'}`} />
      )
    },
    {
      id: 'analysis' as const,
      label: 'Nhận định',
      icon: (active: boolean) => (
        <BarChart3 className={`w-5 h-5 ${active ? 'text-emerald-400' : 'text-slate-400'}`} />
      )
    }
  ];

  return (
    <nav
      aria-label="Thanh điều hướng di động"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#080d16]/95 backdrop-blur-xl border-t border-emerald-500/20 shadow-[0_-4px_25px_rgba(0,0,0,0.6)] pb-[calc(env(safe-area-inset-bottom,0px)+0.35rem)] pt-1 px-1 transition-all"
    >
      <div className="grid grid-cols-6 items-center max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all cursor-pointer select-none active:scale-95 ${
                isActive
                  ? 'text-emerald-400 font-bold bg-emerald-500/10'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-center h-6">
                {item.icon(isActive)}
              </div>
              <span className={`text-[10px] mt-0.5 tracking-tight truncate max-w-[55px] ${isActive ? 'text-emerald-300 font-bold' : 'text-slate-400 font-medium'}`}>
                {item.label}
              </span>
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-emerald-400 mt-0.5" />
              )}
            </button>
          );
        })}

        {/* Profile / Admin Tab on Mobile */}
        <button
          onClick={() => {
            if (isAdmin) {
              setIsAdminCenterOpen(true);
            } else {
              onOpenAuth();
            }
          }}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all cursor-pointer select-none active:scale-95 ${
            isAdmin
              ? 'text-amber-300 bg-amber-500/15 border border-amber-500/30'
              : currentUser
              ? 'text-emerald-300'
              : 'text-slate-400 hover:text-white'
          }`}
          title={isAdmin ? 'Mở bảng quản trị (Admin Center)' : currentUser ? currentUser.email : 'Đăng nhập'}
        >
          <div className="flex items-center justify-center h-6">
            {currentUser ? (
              <div className="relative">
                <img
                  src={currentUser.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=64&q=80'}
                  alt="avatar"
                  className="w-5 h-5 rounded-full object-cover border border-emerald-400/60"
                />
                {isAdmin && (
                  <span className="absolute -top-1 -right-1 text-[9px] leading-none">👑</span>
                )}
              </div>
            ) : (
              <User className="w-5 h-5 text-slate-400" />
            )}
          </div>
          <span className={`text-[10px] mt-0.5 tracking-tight truncate max-w-[55px] ${isAdmin ? 'text-amber-300 font-bold' : currentUser ? 'text-emerald-300 font-semibold' : 'text-slate-400 font-medium'}`}>
            {isAdmin ? 'Quản Trị' : currentUser ? 'Hồ sơ' : 'Đăng nhập'}
          </span>
        </button>
      </div>
    </nav>
  );
};
