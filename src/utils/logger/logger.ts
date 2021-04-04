import {ILogger, ILoggerFnCreator} from "./types";
import consolePrinter from "./loggerPrinters";
import {IS_PRINT} from "../../config/logger";

const loggerFnCreator: ILoggerFnCreator = (printerCb: Function, isPrint: boolean): ILogger =>
  (title: string, ...arg: Array<any>): void => {
    if (isPrint) {
      printerCb(title, ...arg);
    }
  }

const logger = loggerFnCreator(consolePrinter, IS_PRINT) as ILogger;

export default logger;
