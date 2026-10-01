import React, { useState } from 'react';
import { X, ShieldCheck, Mail, LogIn, LogOut, Check, User, Sparkles, AlertCircle, KeyRound, Settings } from 'lucide-react';
import { useAdmin, ADMIN_EMAIL, DEFAULT_ADMIN_PASSWORD } from '../context/AdminContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const { currentUser, isAdmin, loginWithEmail, logout, setIsAdminCenterOpen } = useAdmin();
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const isEnteringAdminEmail = emailInput.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase();

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');

    const cleanEmail = emailInput.trim();
    if (!cleanEmail || !cleanEmail.includes('@')) {
      setErrorMsg('Vui lòng nhập địa chỉ email hợp lệ');
      return;
    }

    const res = loginWithEmail(cleanEmail, nameInput.trim(), passwordInput.trim());
    if (!res.success) {
      setErrorMsg(res.error || 'Đăng nhập không thành công');
      return;
    }

    setSuccessMsg(
      cleanEmail.toLowerCase() === ADMIN_EMAIL.toLowerCase()
        ? 'Đăng nhập thành công với quyền Quản Trị Viên (Admin)!'
        : 'Đăng nhập thành công với quyền Thành Viên!'
    );

    setTimeout(() => {
      onClose();
      setEmailInput('');
      setPasswordInput('');
      setNameInput('');
      setSuccessMsg('');
    }, 900);
  };

  const handleLogout = () => {
    logout();
    setErrorMsg('');
    setSuccessMsg('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#09111e] border border-emerald-500/40 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-100">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-emerald-950/80 via-slate-900 to-amber-950/80 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-xl text-emerald-400">
              {isAdmin ? '👑' : '👤'}
            </span>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                Tài Khoản & Phân Quyền
              </h3>
              <p className="text-xs text-slate-300">
                {currentUser ? `Đang đăng nhập: ${currentUser.email}` : 'Đăng nhập tài khoản'}
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

        {/* Content */}
        <div className="p-5 space-y-5 text-xs">
          {/* Current Status Box */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2.5">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              Trạng thái hiện tại:
            </span>

            {currentUser ? (
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={currentUser.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=64&q=80'}
                      alt="avatar"
                      className="w-10 h-10 rounded-full object-cover border border-slate-700"
                    />
                    <div>
                      <div className="font-bold text-white flex items-center gap-1.5 text-xs sm:text-sm">
                        <span>{currentUser.name}</span>
                        {isAdmin ? (
                          <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 text-[10px] font-bold">
                            👑 Admin Toàn Quyền
                          </span>
                        ) : (
                          <span className="px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 text-[10px]">
                            Thành viên xem
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-400 font-mono">{currentUser.email}</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="px-2.5 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/40 text-xs font-semibold cursor-pointer shrink-0"
                  >
                    Đăng xuất
                  </button>
                </div>

                {/* If Admin is logged in, provide direct entry to Admin Center */}
                {isAdmin && (
                  <div className="pt-2 border-t border-slate-800">
                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        setIsAdminCenterOpen(true);
                      }}
                      className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:brightness-110 cursor-pointer shadow-md"
                    >
                      <Settings className="w-4 h-4" />
                      <span>Mở Bảng Quản Trị Giải Đấu & Trận Đấu</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-slate-400 italic">
                Bạn chưa đăng nhập. Bạn đang xem với tư cách Khách vãng lai (không có quyền chỉnh sửa/xóa/thêm).
              </div>
            )}
          </div>

          {/* Admin Policy Notice */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 space-y-1.5">
            <div className="font-bold text-amber-300 flex items-center gap-1.5 text-xs">
              <ShieldCheck className="w-4 h-4" />
              <span>Quy Định Phân Quyền Hệ Thống</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Duy nhất tài khoản Gmail <strong className="text-white font-mono bg-black/40 px-1 py-0.5 rounded">{ADMIN_EMAIL}</strong> mới có quyền Admin để:
            </p>
            <ul className="list-disc list-inside text-[11px] text-slate-300 space-y-0.5">
              <li>Thêm, sửa, xóa các trận đấu</li>
              <li>Thêm mới hoặc <strong>xóa vĩnh viễn giải đấu trên mọi máy chủ/thiết bị</strong></li>
              <li>Cập nhật tỉ số trực tiếp thời gian thực</li>
            </ul>
          </div>

          {/* Login Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-3 pt-1 border-t border-slate-800">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
              {currentUser ? 'Đăng nhập tài khoản khác:' : 'Đăng nhập tài khoản:'}
            </span>

            {errorMsg && (
              <div className="p-2 rounded bg-rose-500/20 text-rose-300 text-[11px] flex items-center gap-1.5 border border-rose-500/30">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {successMsg && (
              <div className="p-2 rounded bg-emerald-500/20 text-emerald-300 text-[11px] flex items-center gap-1.5 border border-emerald-500/30">
                <Check className="w-3.5 h-3.5 shrink-0" />
                <span>{successMsg}</span>
              </div>
            )}

            <div>
              <label className="text-[11px] text-slate-400 block mb-1">
                Địa chỉ Gmail:
              </label>
              <div className="relative">
                <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="nhap-email@gmail.com"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-2 text-white font-mono text-xs focus:border-emerald-400 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* If entering admin email, show password field */}
            {isEnteringAdminEmail && (
              <div className="animate-fadeIn">
                <label className="text-[11px] text-amber-300 font-bold block mb-1 flex items-center gap-1">
                  <KeyRound className="w-3 h-3 text-amber-400" />
                  <span>Mật khẩu quản trị viên ({ADMIN_EMAIL}):</span>
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Nhập mật khẩu admin..."
                  className="w-full bg-slate-950 border border-amber-500/60 rounded-lg px-3 py-2 text-white text-xs focus:border-amber-400 focus:outline-none"
                  required
                />
                <p className="text-[10px] text-slate-400 mt-1">
                  (Mặc định: <code className="text-amber-300">{DEFAULT_ADMIN_PASSWORD}</code>)
                </p>
              </div>
            )}

            <div>
              <label className="text-[11px] text-slate-400 block mb-1">
                Tên hiển thị (tùy chọn):
              </label>
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Tên của bạn..."
                className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs focus:border-emerald-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Xác Nhận Đăng Nhập</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
