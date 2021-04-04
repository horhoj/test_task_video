import React, {useEffect, useState} from "react";
import styles from './styles.module.scss';
import {IModalWindowProps} from "./types";
import delay from "../../utils/effects/delay";
import {MODAL_HIDE_CHILDREN_DELAY} from "../../config/modalWindow";


const ModalWindow: React.FC<IModalWindowProps> = ({children, hideCb, isShow}): JSX.Element => {
  const [isShowChildren, setIsShowChildren] = useState(true);
  useEffect(() => {
    if (isShow) {
      const body = document.body;
      if (body) {
        body.style.overflow = 'hidden';
      }
      return () => {
        if (body) body.style.overflow = 'visible';
      }
    }
  }, [isShow]);


  useEffect(() => {
    if (isShow) {
      setIsShowChildren(true);
    } else {
      (
        async () => {
          await delay(MODAL_HIDE_CHILDREN_DELAY);
          setIsShowChildren(false);
        }
      )();
    }
  }, [isShow]);


  return (
    <div
      className={`${styles.modalWindowExternalContainer} ${!isShow ? styles.hiddenExternalContainer : ''}`}
      onClick={hideCb}
    >
      <div
        className={`${styles.modalWindowInternalContainer} ${!isShow ? styles.hiddenInternalContainer : ''}`}
        onClick={e => e.stopPropagation()}
      >
        {isShowChildren ? children : ''}
      </div>
    </div>
  )
}

export default ModalWindow;
