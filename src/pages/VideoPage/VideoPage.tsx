import React, {useEffect, useState} from "react";
import MainLayout from "../../layouts/MainLayout";
import {useHistory, useParams} from "react-router";
import getVideoSrc from "../../api/getVideoSrc";
import Spinner from "../../components/Spinner";
import ModalWindow from "../../components/ModalWindow";
import logger from "../../utils/logger";
import AjaxErrorRepresentation from "../../components/AjaxErrorRepresentation";


const VideoPage: React.FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const {id} = useParams<{ id: string }>();
  const history = useHistory();
  const [lastLoadAjaxError, setLastLoadAjaxError] = useState<Error | null>(null)

  const loadData = async () => {
    try {
      setIsLoading(true);
      setLastLoadAjaxError(null);
      const response = await getVideoSrc(id);
      if (response?.video) {
        setIsLoading(false);
        setVideoSrc(response.video)
      } else {
        history.push(`/load/${id}`);
      }
    } catch (e) {
      setIsLoading(false);
      logger('VideoPage loadData Error', e);
      setLastLoadAjaxError(e);
    }
  }

  useEffect(() => {
    loadData();
  }, [])

  const goToSelectKeyPage = () => {
    history.push('/');
  }

  return (
    <MainLayout>
      <div className="d-flex flex-column flex-grow-1 justify-content-center ">

        <ModalWindow
          isShow={isLoading}
        >
          <Spinner parentComponentCenterPosition={true}/>
        </ModalWindow>
        <div className="w-100 d-flex flex-column">
          <button
            className="btn btn-primary"
            onClick={goToSelectKeyPage}
          >
            Вернутся к выбору ключа
          </button>
        </div>

        <div className="mt-1">

          {videoSrc ?
            <div className="d-flex flex-column p-1 justify-content-center  bg-primary rounded ">
              <video
                src={videoSrc}
                autoPlay={true}
                controls={true}
              />
            </div>

            : ''}
        </div>
        <div className="mt-1">
          <div>
            <span className="font-weight-bold">Тестовый ключ: </span>{id}
          </div>
          {
            videoSrc ?
              <div>
                <span className="font-weight-bold">Файл: </span>{videoSrc}
              </div> : ''
          }

        </div>
        <div className="mt-1">
          <AjaxErrorRepresentation
            title="При проверке видео возникли ошибки!"
            error={lastLoadAjaxError}
          />
        </div>
      </div>

    </MainLayout>
  )
}

export default VideoPage;
