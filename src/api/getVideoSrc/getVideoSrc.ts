import ajaxRequest from "../ajaxRequest";
import {AxiosRequestConfig, AxiosResponse} from "axios";
import {BASE_URL} from "../../config/api";
import * as superStruct from 'superstruct';
import {GetVideoSrcResponse, TGetVideoSrcResponse} from "./types";

const getVideoSrc = async (id: string) => {

    const requestConfig: AxiosRequestConfig = {
      baseURL: BASE_URL,
      url: id,
      method: "get"
    }
    const response: AxiosResponse<TGetVideoSrcResponse> | undefined = await ajaxRequest(requestConfig);
    superStruct.assert(response?.data, GetVideoSrcResponse);
    return response?.data;

}

export default getVideoSrc;
