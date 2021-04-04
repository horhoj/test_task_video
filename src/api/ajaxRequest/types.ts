import {ILogger} from "../../utils/logger/types";
import {AxiosRequestConfig, AxiosResponse} from "axios";

export interface IAjaxRequestFnCreatorDI {
  logger: ILogger,

  axios(AjaxRequestConfig: AxiosRequestConfig): Promise<AxiosResponse>
}


export interface IAjaxRequestLog {
  ajaxRequestConfig: AxiosRequestConfig,
  response: AxiosResponse | null,
  error: any
}
