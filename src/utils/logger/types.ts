export interface IPrinterCb {
  (title: string, ...arg: Array<any>): void;
}

export interface ILoggerFnCreator {
  (printerCb: IPrinterCb, isPrint: boolean): Function;
}

export interface ILogger {
  (title: string, ...arg: Array<any>): void
}
