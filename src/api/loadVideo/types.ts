export interface ILoadVideo {
  (loadVideoConfig: ILoadVideoConfig): void;
}

export interface ILoadVideoConfig {
  id: string;
  file: File;
  uploadProgressCb: ILoadVideoUploadProgressCb;
}

export interface ILoadVideoUploadProgressCb {
  (upload: ProgressEvent): void;
}
