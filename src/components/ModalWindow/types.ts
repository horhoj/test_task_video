export interface IModalWindowProps {
  isShow: boolean;
  hideCb?: IModalWindowHideCb;
}

export interface IModalWindowHideCb {
  (): void;
}
