import MainLayout from "../../layouts/MainLayout";
import React, {useRef, useState} from "react";
import loadVideo from "../../api/loadVideo";
import {useHistory, useParams} from "react-router";
import ModalWindow from "../../components/ModalWindow";
import delay from "../../utils/effects/delay";
import Spinner from "../../components/Spinner";
import {ILoadVideoUploadProgressCb} from "../../api/loadVideo/types";
import logger from "../../utils/logger";
import AjaxErrorRepresentation from "../../components/AjaxErrorRepresentation";

const VideoLoadPage: React.FC = (): JSX.Element => {
  const {id} = useParams<{ id: string }>();
  const inputFileRefContainer = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [uploadProgressPercentage, setUploadProgressPercentage] = useState<number>(0);
  const history = useHistory();
  const [lastLoadError, setLastLoadError] = useState<Error | null>(null);
  const [selectedFile, setSelectedFIle] = useState<File | null | undefined>(null);

  const uploadProgressCb: ILoadVideoUploadProgressCb = (upload: ProgressEvent) => {
    setUploadProgressPercentage(Math.round((upload.loaded / upload.total) * 100));
  }

  const loadBtnHandle = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      setLastLoadError(null);
      if (inputFileRefContainer.current) {
        const file: File | null | undefined = inputFileRefContainer.current.files?.item(0);
        if (file) {
          setUploadProgressPercentage(0);
          setIsLoading(true);
          // await delay(2000)
          // throw new Error('Test Error');
          await loadVideo({id, file, uploadProgressCb});
          setIsLoading(false);
          await delay(400);
          history.push(`/video/${id}`);
        }
      }
    } catch (e) {
      setIsLoading(false);
      logger('VideoLoadPage loadBtnHandle Error', e);
      setLastLoadError(e);
    }
  }

  const goToSelectKeyPage = () => {
    history.push('/');
  }

  const fileChangeHandle = () => {
    if (inputFileRefContainer.current) {
      const file: File | null | undefined = inputFileRefContainer.current.files?.item(0);
      setSelectedFIle(file)
    }
  }

  return (
    <MainLayout>
      <ModalWindow
        isShow={isLoading}
      >
        <div className="bg-white border p-5 rounded d-flex justify-content-center align-items-center flex-column">
          <div className="mb-3">Загружаем видео: {uploadProgressPercentage}%</div>
          <Spinner/>
        </div>
      </ModalWindow>

      <div
        className="d-flex flex-grow-1 justify-content-center align-items-center flex-column"
      >
        <div className="h4">
          Выберите файл для загрузки
        </div>
        <div className="w-100">
          <label className="w-100" >
            <input
              type="file"
              ref={inputFileRefContainer}
              accept="video/*"
              className="d-none"
              onChange={fileChangeHandle}
            />
            <div className="btn btn-primary w-100">
              {selectedFile ? selectedFile.name : 'выберите файл для загрузки'}
            </div>
          </label>
        </div>
        <div className="mt-2">
          <button
            className="btn btn-primary btn-sm m-1"
            onClick={loadBtnHandle}
          >
            Загрузить видео
          </button>
          <button
            className="btn btn-primary btn-sm m-1"
            onClick={goToSelectKeyPage}
          >
            Вернутся к выбору ключа
          </button>
        </div>
        <div className="mt-2">
          <AjaxErrorRepresentation
            title="Во время загрузки произошла ошибка!"
            error={lastLoadError}
          />
        </div>

      </div>

    </MainLayout>
  )
}

export default VideoLoadPage;
