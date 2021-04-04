import {AxiosRequestConfig} from "axios";
import {BASE_URL} from "../../config/api";
import ajaxRequest from "../ajaxRequest";
import {ILoadVideo} from "./types";

const loadVideo: ILoadVideo = async ({id, file, uploadProgressCb}) => {
  const formData = new FormData();
  formData.append('Code', id);
  formData.append('Template', '1');
  formData.append('FIle', file);
  const requestConfig: AxiosRequestConfig = {
    baseURL: BASE_URL,
    method: "post",
    data: formData,
    onUploadProgress: uploadProgressCb,
  }
  await ajaxRequest(requestConfig);
}

export default loadVideo;
