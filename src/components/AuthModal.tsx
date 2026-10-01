import React, { useState } from 'react';
import { X, ShieldCheck, Mail, LogIn, LogOut, Check, User, AlertCircle, KeyRound, Settings, Lock } from 'lucide-react';
import { useAdmin, ADMIN_EMAIL, DEFAULT_ADMIN_PASSWORD } from '../context/AdminContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const {
    currentUser,
    isAdmin,
    loginWithEmail,
    loginWithGoogle,
    logout,
    setIsAdminCenterOpen
  } = useAdmin();

  const [authMode, setAuthMode] = useState<'google' | 'email'>('google');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [googleStep, setGoogleStep] = useState<'select' | 'admin-password' | 'custom-google'>('select');
  const [googleCustomEmail, setGoogleCustomEmail] = useState('');
  const [googleCustomName, setGoogleCustomName] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  if (!isOpen) return null;

  const isEnteringAdminEmail = emailInput.trim().toLowerCase() === ADMIN_EMAIL.toLowerCase();

  const handleGoogleAdminSelect = () => {
    setErrorMsg('');
    setGoogleStep('admin-password');
  };

  const handleGoogleAdminConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    if (passwordInput.trim() !== DEFAULT_ADMIN_PASSWORD) {
      setErrorMsg('Mật khẩu quản trị viên không chính xác!');
      return;
    }
    const res = loginWithGoogle(
      ADMIN_EMAIL,
      'Huy Admin (humilin182)',
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=80&q=80'
    );
    if (res.success) {
      setSuccessMsg('Đăng nhập Google thành công! Bạn có toàn quyền Quản Trị Viên (Admin).');
      setTimeout(() => {
        onClose();
        setPasswordInput('');
        setSuccessMsg('');
        setGoogleStep('select');
      }, 800);
    }
  };

  const handleGoogleCustomLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    const clean = googleCustomEmail.trim().toLowerCase();
    if (!clean || !clean.includes('@')) {
      setErrorMsg('Vui lòng nhập địa chỉ email Google hợp lệ');
      return;
    }

    if (clean === ADMIN_EMAIL.toLowerCase()) {
      setGoogleStep('admin-password');
      return;
    }

    const res = loginWithGoogle(
      clean,
      googleCustomName.trim() || clean.split('@')[0],
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=80'
    );

    if (res.success) {
      setSuccessMsg(`Đăng nhập Google thành công với tài khoản: ${clean} (Quyền xem)`);
      setTimeout(() => {
        onClose();
        setGoogleCustomEmail('');
        setGoogleCustomName('');
        setSuccessMsg('');
        setGoogleStep('select');
      }, 800);
    }
  };

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
    }, 800);
  };

  const handleLogout = () => {
    logout();
    setErrorMsg('');
    setSuccessMsg('');
    setGoogleStep('select');
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
                {currentUser ? `Đang đăng nhập: ${currentUser.email}` : 'Yêu cầu đăng nhập Google hoặc Email'}
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
        <div className="p-5 space-y-4 text-xs max-h-[85vh] overflow-y-auto">
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
                          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 text-[10px]">
                            Thành viên (chỉ xem)
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
              <div className="text-slate-400 italic flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-slate-500" />
                <span>Bạn đang xem với tư cách <strong>Khách</strong> (không có quyền chỉnh sửa / xóa giải đấu).</span>
              </div>
            )}
          </div>

          {/* System Security Notice */}
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 space-y-1.5">
            <div className="font-bold text-amber-300 flex items-center gap-1.5 text-xs">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Chính Sách Phân Quyền Quản Trị</span>
            </div>
            <p className="text-[11px] text-slate-300 leading-relaxed">
              Hệ thống bảo mật đa tầng: <strong>Duy nhất tài khoản Gmail <code className="text-amber-300 font-mono bg-black/40 px-1 py-0.5 rounded">{ADMIN_EMAIL}</code></strong> khi đăng nhập trên bất kỳ máy nào mới được kích hoạt quyền <strong>Admin</strong>.
            </p>
            <ul className="list-disc list-inside text-[11px] text-slate-400 space-y-0.5">
              <li>Mọi máy khác / người dùng khác chỉ có quyền xem.</li>
              <li>Admin có nút xóa giải đấu và xóa trận đấu đồng bộ toàn bộ máy chủ.</li>
            </ul>
          </div>

          {/* Messages */}
          {errorMsg && (
            <div className="p-2.5 rounded-lg bg-rose-500/20 text-rose-300 text-xs flex items-center gap-2 border border-rose-500/40">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{errorMsg}</span>
            </div>
          )}

          {successMsg && (
            <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2 border border-emerald-500/40">
              <Check className="w-4 h-4 shrink-0 text-emerald-400" />
              <span>{successMsg}</span>
            </div>
          )}

          {/* Auth Method Selector Tabs */}
          <div className="flex items-center gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800">
            <button
              type="button"
              onClick={() => {
                setAuthMode('google');
                setErrorMsg('');
              }}
              className={`flex-1 py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                authMode === 'google'
                  ? 'bg-white text-slate-900 shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <span>Đăng nhập Google</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setAuthMode('email');
                setErrorMsg('');
              }}
              className={`flex-1 py-2 rounded-lg font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer ${
                authMode === 'email'
                  ? 'bg-emerald-600 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Đăng nhập Email</span>
            </button>
          </div>

          {/* METHOD 1: GOOGLE AUTH */}
          {authMode === 'google' && (
            <div className="space-y-3 pt-1">
              {googleStep === 'select' && (
                <div className="space-y-2.5">
                  <span className="text-[11px] text-slate-400 block font-medium">
                    Chọn tài khoản Google để tiếp tục:
                  </span>

                  {/* Primary Admin Account Button */}
                  <button
                    type="button"
                    onClick={handleGoogleAdminSelect}
                    className="w-full p-3 rounded-xl bg-slate-900 hover:bg-slate-850 border border-amber-500/40 hover:border-amber-400 flex items-center justify-between gap-3 text-left transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-lg">
                        👑
                      </div>
                      <div>
                        <div className="font-bold text-amber-300 text-xs flex items-center gap-1.5">
                          <span>Huy Admin</span>
                          <span className="px-1.5 py-0.2 rounded bg-amber-500/30 text-amber-200 text-[10px]">
                            Admin
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-mono">{ADMIN_EMAIL}</p>
                      </div>
                    </div>
                    <span className="text-xs text-amber-400 font-bold group-hover:translate-x-0.5 transition-transform">
                      Đăng nhập →
                    </span>
                  </button>

                  {/* General Google Account Option */}
                  <button
                    type="button"
                    onClick={() => setGoogleStep('custom-google')}
                    className="w-full p-3 rounded-xl bg-slate-900/80 hover:bg-slate-850 border border-slate-800 hover:border-slate-700 flex items-center justify-between gap-3 text-left transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400">
                        <User className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-xs">
                          Tài khoản Google khác
                        </div>
                        <p className="text-[11px] text-slate-400">
                          Đăng nhập bằng tài khoản Gmail của bạn (Quyền xem)
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 group-hover:text-white transition-colors">
                      Chọn →
                    </span>
                  </button>
                </div>
              )}

              {/* Password prompt when choosing Admin Google account */}
              {googleStep === 'admin-password' && (
                <form onSubmit={handleGoogleAdminConfirm} className="space-y-3 animate-fadeIn">
                  <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/40 space-y-1 text-xs">
                    <div className="font-bold text-amber-300 flex items-center gap-1.5">
                      <Lock className="w-4 h-4 text-amber-400" />
                      <span>Xác minh tài khoản Quản Trị Viên: {ADMIN_EMAIL}</span>
                    </div>
                    <p className="text-[11px] text-slate-300">
                      Vui lòng nhập mật khẩu xác nhận quyền Quản Trị Viên trên thiết bị này.
                    </p>
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-300 block mb-1 font-bold">
                      Mật khẩu Admin:
                    </label>
                    <div className="relative">
                      <KeyRound className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="password"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        placeholder="Nhập mật khẩu..."
                        className="w-full bg-slate-950 border border-amber-500/60 rounded-lg pl-8 pr-3 py-2 text-white text-xs focus:border-amber-400 focus:outline-none"
                        autoFocus
                        required
                      />
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1">
                      (Mặc định: <code className="text-amber-300">{DEFAULT_ADMIN_PASSWORD}</code>)
                    </p>
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setGoogleStep('select')}
                      className="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-bold cursor-pointer"
                    >
                      Quay lại
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:brightness-110 text-slate-950 font-bold text-xs cursor-pointer shadow-md"
                    >
                      Kích Hoạt Quyền Admin
                    </button>
                  </div>
                </form>
              )}

              {/* Custom Google Account Login Form */}
              {googleStep === 'custom-google' && (
                <form onSubmit={handleGoogleCustomLogin} className="space-y-3 animate-fadeIn">
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">
                      Địa chỉ Gmail của bạn:
                    </label>
                    <div className="relative">
                      <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="email"
                        value={googleCustomEmail}
                        onChange={(e) => setGoogleCustomEmail(e.target.value)}
                        placeholder="ten-ban@gmail.com"
                        className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-8 pr-3 py-2 text-white font-mono text-xs focus:border-emerald-400 focus:outline-none"
                        autoFocus
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">
                      Tên của bạn:
                    </label>
                    <input
                      type="text"
                      value={googleCustomName}
                      onChange={(e) => setGoogleCustomName(e.target.value)}
                      placeholder="Nguyễn Văn A"
                      className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white text-xs focus:border-emerald-400 focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setGoogleStep('select')}
                      className="px-3 py-2 rounded-lg bg-slate-800 text-slate-300 text-xs font-bold cursor-pointer"
                    >
                      Quay lại
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs cursor-pointer shadow-md"
                    >
                      Xác Nhận Đăng Nhập
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}

          {/* METHOD 2: STANDARD EMAIL AUTH */}
          {authMode === 'email' && (
            <form onSubmit={handleLoginSubmit} className="space-y-3 pt-1">
              <div>
                <label className="text-[11px] text-slate-400 block mb-1">
                  Địa chỉ Email:
                </label>
                <div className="relative">
                  <Mail className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-3" />
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="email@example.com"
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
                <span>Xác Nhận Đăng Nhập Email</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
