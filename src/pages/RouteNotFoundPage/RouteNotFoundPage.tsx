import React from "react";
import MainLayout from "../../layouts/MainLayout";
import {useHistory} from "react-router";

const RouteNotFoundPage: React.FC = (): JSX.Element => {
  const history = useHistory();

  const goToSelectKeyPage = (e: React.MouseEvent) => {
    e.preventDefault();
    history.push('/');
  }

  return (
    <MainLayout>
      <div className="d-flex flex-grow-1">
        <div className="d-flex justify-content-center align-items-center flex-grow-1 flex-column">
          <div className="h1">Страница не существует!</div>
          <button
            className="btn btn-primary"
            onClick={goToSelectKeyPage}
          >
            Перейти к выбору ключа
          </button>
        </div>
      </div>

    </MainLayout>
  )
}

export default RouteNotFoundPage
