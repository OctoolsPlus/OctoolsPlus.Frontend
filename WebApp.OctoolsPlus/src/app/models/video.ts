export interface video {
  formats: Format[];
  title: string;
  idVideo: string;
  thumbnail: string;
  viewCount: string;
  dutation: string;
  }

  export interface Format {
    format: string;
    quality: string;
    size: string;
    loading: boolean;
}

