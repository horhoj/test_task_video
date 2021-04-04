import React, {useEffect, useState} from "react";
import {IAjaxErrorRepresentationProps} from "./types";
import {AxiosError} from "axios";

const getRecommendation = (errorCode: number | undefined) => {
  switch (errorCode) {
    case undefined:
      return 'сервер не ответил или ответ не возможно прочитать, проверьте сетевое соединение и соблюдение политики CORS';
    case 404:
      return 'запрошенный по ключу ресурс отсутствует на сервере, вернитесь к выбору ключа и введите другое значение';
    case 413:
      return 'Вероятно вы попытались загрузить файлы слишком большого размера, попробуйте загрузить данные меньшего объема ';
    default:
      return 'к сожалению по данной проблеме у нас нет рекомендаций';
  }
}

const AjaxErrorRepresentation: React.FC<IAjaxErrorRepresentationProps> = ({error, title}): JSX.Element => {
  const [errorCode, setErrorCode] = useState<number | undefined>(undefined);
  useEffect(() => {
    const code = (error as AxiosError)?.response?.status;
    setErrorCode(code);
  }, [error])


  return error ?
    <div className="alert alert-danger small">
      <div className="font-weight-bold ">{title}</div>
      <div className="mt-2"><span className="font-weight-bold">Наименование: </span>{error.name}</div>
      <div><span className="font-weight-bold">Сообщение: </span>{error.message}</div>
      <div>
        <span className="font-weight-bold">Код ошибки протокола: </span>
        {errorCode === undefined ? 'не подлежит определению' : errorCode}
      </div>
      <div className="mt-2">
        <span className="font-weight-bold">Обновите страницу или попробуйте другие действия</span>
      </div>
      <div>
        <span className="font-weight-bold">Рекомендации: </span>
        {getRecommendation(errorCode)}
      </div>
    </div> : <></>

}

export default AjaxErrorRepresentation;
