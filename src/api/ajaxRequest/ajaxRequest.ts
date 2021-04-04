import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import logger from "../../utils/logger";
import {IAjaxRequestFnCreatorDI, IAjaxRequestLog} from "./types";

const ajaxRequestFnCreator = (DI: IAjaxRequestFnCreatorDI) =>
  async (ajaxRequestConfig: AxiosRequestConfig): Promise<AxiosResponse | undefined> => {
    const log: IAjaxRequestLog = {
      ajaxRequestConfig,
      response: null,
      error: null
    }
    try {
      const response: AxiosResponse = await DI.axios(ajaxRequestConfig);
      log.response = response;
      return response;
    } catch (e) {
      log.error = e;
      throw e;
    } finally {
      DI.logger('ajaxRequest', log);
    }
  }

const ajaxRequest = ajaxRequestFnCreator({
  logger,
  axios,
});

export default ajaxRequest;
