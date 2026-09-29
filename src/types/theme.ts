export interface CustomImageConfig {
  bannerImage: string | null;
  bannerOverlayOpacity: number;
  appBgImage: string | null;
  appBgOpacity: number;
  enableParticles: boolean;
}

export interface PresetImage {
  id: string;
  name: string;
  category: string;
  url: string;
  thumbnail: string;
}
