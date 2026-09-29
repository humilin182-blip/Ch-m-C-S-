import React, { useState, useRef } from 'react';
import {
  X,
  Upload,
  Image as ImageIcon,
  Sparkles,
  RotateCcw,
  Check,
  Smartphone,
  Monitor,
  Eye,
  Sliders,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { CustomImageConfig, PresetImage } from '../types/theme';
import { optimizeUserImage } from '../services/imageOptimizer';
import cleatsDefaultImg from '../assets/images/cyber_pitch_cleats_hero_1790513556958.jpg';
import stadiumImg from '../assets/images/cyber_stadium_broadcast_1790513588901.jpg';
import highlightImg from '../assets/images/cyber_match_highlight_1790513577902.jpg';
import insigniaImg from '../assets/images/cyber_football_insignia_1790513602487.jpg';

interface ThemeCustomizerModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: CustomImageConfig;
  onSaveConfig: (newConfig: CustomImageConfig) => void;
  onResetDefault: () => void;
}

export const PRESET_IMAGES: PresetImage[] = [
  {
    id: 'default-cleats',
    name: 'Chân đi giày trên cỏ số (Mặc định)',
    category: 'Sân cỏ',
    url: cleatsDefaultImg,
    thumbnail: cleatsDefaultImg
  },
  {
    id: 'cyber-stadium',
    name: 'Sân vận động công nghệ rực sáng',
    category: 'Khán đài',
    url: stadiumImg,
    thumbnail: stadiumImg
  },
  {
    id: 'match-highlight',
    name: 'Pha tranh chấp bóng rực lửa',
    category: 'Trận đấu',
    url: highlightImg,
    thumbnail: highlightImg
  },
  {
    id: 'football-insignia',
    name: 'Biểu tượng bóng đá số',
    category: 'Nghệ thuật',
    url: insigniaImg,
    thumbnail: insigniaImg
  }
];

export const ThemeCustomizerModal: React.FC<ThemeCustomizerModalProps> = ({
  isOpen,
  onClose,
  config,
  onSaveConfig,
  onResetDefault
}) => {
  const [activeTab, setActiveTab] = useState<'banner' | 'background'>('banner');
  const [localConfig, setLocalConfig] = useState<CustomImageConfig>(config);
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const bannerFileInputRef = useRef<HTMLInputElement>(null);
  const bgFileInputRef = useRef<HTMLInputElement>(null);

  // Sync state when opened
  React.useEffect(() => {
    if (isOpen) {
      setLocalConfig(config);
      setSaveSuccess(false);
      setUploadError(null);
    }
  }, [isOpen, config]);

  if (!isOpen) return null;

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>, target: 'banner' | 'background') => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsProcessing(true);
    setUploadError(null);

    try {
      // Compress and optimize image to ensure smooth UI and fit into localStorage
      const optimizedBase64 = await optimizeUserImage(file, 1920, 1080, 0.85);

      if (target === 'banner') {
        setLocalConfig((prev) => ({ ...prev, bannerImage: optimizedBase64 }));
      } else {
        setLocalConfig((prev) => ({ ...prev, appBgImage: optimizedBase64 }));
      }
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Không thể xử lý hình ảnh';
      setUploadError(errorMsg);
    } finally {
      setIsProcessing(false);
      // Reset input value so re-selecting the same file fires onChange
      e.target.value = '';
    }
  };

  const handleSelectPreset = (url: string, target: 'banner' | 'background') => {
    if (target === 'banner') {
      // If default cleats selected, set to null (clean fallback to default import) or url
      setLocalConfig((prev) => ({ ...prev, bannerImage: url }));
    } else {
      setLocalConfig((prev) => ({ ...prev, appBgImage: url }));
    }
  };

  const handleSave = () => {
    onSaveConfig(localConfig);
    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
      onClose();
    }, 600);
  };

  const currentBannerPreview = localConfig.bannerImage || cleatsDefaultImg;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl max-h-[92vh] flex flex-col rounded-2xl bg-[#09111e] border border-emerald-500/30 shadow-2xl text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-slate-800/80 flex items-center justify-between bg-gradient-to-r from-emerald-950/30 to-slate-900/60">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-sm">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                Tùy Biến Hình Ảnh Giao Diện
                <span className="text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  Custom UI
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Tải ảnh từ máy tính hoặc album điện thoại để cá nhân hóa không gian xem bóng đá
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

        {/* Tab Selection */}
        <div className="flex border-b border-slate-800 bg-slate-900/60 px-4 sm:px-6 gap-2">
          <button
            onClick={() => setActiveTab('banner')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'banner'
                ? 'border-emerald-400 text-emerald-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <ImageIcon className="w-4 h-4" />
            <span>Ảnh bìa Banner Sân cỏ</span>
            {localConfig.bannerImage && (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('background')}
            className={`py-3 px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-all ${
              activeTab === 'background'
                ? 'border-emerald-400 text-emerald-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Hình nền toàn trang (Wallpaper)</span>
            {localConfig.appBgImage && (
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            )}
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {uploadError && (
            <div className="p-3 rounded-lg bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{uploadError}</span>
            </div>
          )}

          {activeTab === 'banner' ? (
            <div className="space-y-5">
              {/* Banner Live Preview */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                    <Eye className="w-3.5 h-3.5 text-emerald-400" />
                    Xem trước ảnh bìa hiện tại:
                  </span>
                  {localConfig.bannerImage && (
                    <button
                      onClick={() => setLocalConfig((prev) => ({ ...prev, bannerImage: null }))}
                      className="text-[11px] text-amber-400 hover:underline flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Về ảnh chân giày mặc định
                    </button>
                  )}
                </div>

                <div className="relative aspect-[21/9] max-h-48 w-full rounded-xl overflow-hidden border border-emerald-500/30 bg-slate-950">
                  <img
                    src={currentBannerPreview}
                    alt="Xem trước ảnh bìa"
                    className="w-full h-full object-cover object-bottom"
                  />
                  <div
                    className="absolute inset-0 bg-[#080d16] pointer-events-none transition-opacity"
                    style={{ opacity: localConfig.bannerOverlayOpacity }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="px-3 py-1 rounded-md bg-black/60 backdrop-blur-sm text-xs text-emerald-300 border border-emerald-500/30 font-medium">
                      CHẠM CỎ SỐ · BÓNG ĐÁ THỜI GIAN THỰC
                    </span>
                  </div>
                </div>
              </div>

              {/* Upload Box for Computer / Mobile Album */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Tải ảnh từ máy tính hoặc album điện thoại:
                </label>

                <input
                  type="file"
                  ref={bannerFileInputRef}
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e, 'banner')}
                />

                <div
                  onClick={() => bannerFileInputRef.current?.click()}
                  className="group relative cursor-pointer border-2 border-dashed border-slate-700 hover:border-emerald-400/80 rounded-xl p-5 text-center transition-all bg-slate-900/40 hover:bg-emerald-950/20"
                >
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      {isProcessing ? (
                        <div className="w-5 h-5 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Upload className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-emerald-300 transition-colors">
                        {isProcessing ? 'Đang nén và tối ưu ảnh...' : 'Bấm để chọn ảnh từ máy hoặc album'}
                      </p>
                      <p className="text-xs text-slate-400 mt-1 flex items-center justify-center gap-2">
                        <span className="flex items-center gap-1">
                          <Monitor className="w-3 h-3 text-cyan-400" /> Máy tính PC / Laptop
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Smartphone className="w-3 h-3 text-emerald-400" /> Album điện thoại (iOS / Android)
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Preset Gallery */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Hoặc chọn nhanh từ bộ sưu tập có sẵn:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {PRESET_IMAGES.map((preset) => {
                    const isSelected =
                      (preset.id === 'default-cleats' && !localConfig.bannerImage) ||
                      localConfig.bannerImage === preset.url;

                    return (
                      <div
                        key={preset.id}
                        onClick={() => handleSelectPreset(preset.url, 'banner')}
                        className={`group relative rounded-lg overflow-hidden border cursor-pointer transition-all aspect-[16/10] bg-slate-900 ${
                          isSelected
                            ? 'border-emerald-400 ring-2 ring-emerald-500/30 shadow-md shadow-emerald-500/20'
                            : 'border-slate-800 hover:border-slate-600'
                        }`}
                      >
                        <img
                          src={preset.thumbnail}
                          alt={preset.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-1.5 flex flex-col justify-end">
                          <span className="text-[10px] font-bold text-white leading-tight truncate">
                            {preset.name}
                          </span>
                        </div>
                        {isSelected && (
                          <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center text-black font-bold">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Overlay Opacity Slider */}
              <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                    <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                    Độ tối lớp phủ (Tăng độ tương phản chữ):
                  </span>
                  <span className="text-emerald-400 font-mono font-bold">
                    {Math.round(localConfig.bannerOverlayOpacity * 100)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="0.8"
                  step="0.05"
                  value={localConfig.bannerOverlayOpacity}
                  onChange={(e) =>
                    setLocalConfig((prev) => ({
                      ...prev,
                      bannerOverlayOpacity: parseFloat(e.target.value)
                    }))
                  }
                  className="w-full accent-emerald-500 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Wallpaper Tab */}
              <div className="p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/30 text-xs text-cyan-300">
                Hình nền toàn trang sẽ được phủ mờ phía sau toàn bộ nội dung ứng dụng, mang lại cảm giác không gian sân cỏ sống động.
              </div>

              {/* Upload Box for Wallpaper */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  Tải hình nền toàn trang từ máy hoặc album điện thoại:
                </label>

                <input
                  type="file"
                  ref={bgFileInputRef}
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e, 'background')}
                />

                <div
                  onClick={() => bgFileInputRef.current?.click()}
                  className="group relative cursor-pointer border-2 border-dashed border-slate-700 hover:border-cyan-400/80 rounded-xl p-5 text-center transition-all bg-slate-900/40 hover:bg-cyan-950/20"
                >
                  <div className="flex flex-col items-center justify-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      {isProcessing ? (
                        <div className="w-5 h-5 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <Upload className="w-5 h-5" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                        {isProcessing ? 'Đang nén và tối ưu ảnh...' : 'Chọn ảnh nền từ máy tính hoặc album'}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">Hỗ trợ JPG, PNG, WebP từ điện thoại hoặc PC</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Presets for Wallpaper */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-slate-300">
                    Bộ sưu tập ảnh nền gợi ý:
                  </label>
                  {localConfig.appBgImage && (
                    <button
                      onClick={() => setLocalConfig((prev) => ({ ...prev, appBgImage: null }))}
                      className="text-[11px] text-amber-400 hover:underline flex items-center gap-1"
                    >
                      <RotateCcw className="w-3 h-3" />
                      Gỡ ảnh nền (Dùng màu tối chuẩn)
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {PRESET_IMAGES.map((preset) => {
                    const isSelected = localConfig.appBgImage === preset.url;
                    return (
                      <div
                        key={preset.id}
                        onClick={() => handleSelectPreset(preset.url, 'background')}
                        className={`group relative rounded-lg overflow-hidden border cursor-pointer transition-all aspect-[16/10] bg-slate-900 ${
                          isSelected
                            ? 'border-cyan-400 ring-2 ring-cyan-500/30 shadow-md shadow-cyan-500/20'
                            : 'border-slate-800 hover:border-slate-600'
                        }`}
                      >
                        <img
                          src={preset.thumbnail}
                          alt={preset.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-1.5 flex flex-col justify-end">
                          <span className="text-[10px] font-bold text-white leading-tight truncate">
                            {preset.name}
                          </span>
                        </div>
                        {isSelected && (
                          <div className="absolute top-1.5 right-1.5 w-5 h-5 rounded-full bg-cyan-400 flex items-center justify-center text-black font-bold">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Wallpaper Opacity Slider */}
              {localConfig.appBgImage && (
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300 flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                      Độ mờ hiển thị hình nền (Opacity):
                    </span>
                    <span className="text-cyan-400 font-mono font-bold">
                      {Math.round(localConfig.appBgOpacity * 100)}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0.05"
                    max="0.4"
                    step="0.02"
                    value={localConfig.appBgOpacity}
                    onChange={(e) =>
                      setLocalConfig((prev) => ({
                        ...prev,
                        appBgOpacity: parseFloat(e.target.value)
                      }))
                    }
                    className="w-full accent-cyan-400 h-1.5 bg-slate-700 rounded-lg cursor-pointer"
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-slate-800/80 bg-slate-950/70 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={() => {
              onResetDefault();
              setLocalConfig({
                bannerImage: null,
                bannerOverlayOpacity: 0.45,
                appBgImage: null,
                appBgOpacity: 0.15,
                enableParticles: true
              });
            }}
            className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Khôi phục mặc định ban đầu</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
            >
              Hủy
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all shadow-md shadow-emerald-500/20"
            >
              {saveSuccess ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-950 animate-bounce" />
                  <span>Đã lưu thành công!</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Áp dụng hình ảnh</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
