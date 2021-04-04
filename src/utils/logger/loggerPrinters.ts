import {IPrinterCb} from "./types";

const consolePrinter: IPrinterCb = (title: string, ...arg: Array<any>) => console.log(`LOG: ${title} => `, ...arg);

export default consolePrinter;
