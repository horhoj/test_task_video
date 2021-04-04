import React from "react";
import logger from "../../utils/logger";

class ErrorBoundary extends React.Component {
  state = {hasError: false};

  static getDerivedStateFromError(error: any) {
    return {hasError: true};
  }

  componentDidCatch(error: any, errorInfo: any) {
    logger('GLOBAL REACT ERROR', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="d-flex justify-content-center align-items-center vw-100 vh-100">
          <div className="p-5 border rounded-lg bg-white d-flex justify-content-center align-items-center flex-column">
            <h1>Что то пошло не так!</h1>
            <h2>Мы уже работаем над этим!</h2>
            <h4>Попробуйте перезагрузить страницу позднее!</h4>
          </div>
        </div>
      )
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
