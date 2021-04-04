import React from "react";
import {testKeys} from "../../config/testKeys";
import styles from './styles.module.scss'
import {ITestKeySelectProps} from "./types";

const TestKeySelect: React.FC<ITestKeySelectProps> =
  ({
     testKeyValueChangeCb,
     testKeySelectFormHideCb,
   }): JSX.Element => {
    const testKeyBtnClkHandle = (e: React.MouseEvent) => {
      const element = e.target as HTMLElement;
      const tag = element.tagName;
      if (tag === 'BUTTON') {
        const keyId = element.getAttribute('data-key-id');
        if (keyId) {
          testKeyValueChangeCb(keyId)
        } else {
          throw new Error('KeyId is unknown!!!!!')
        }
        testKeySelectFormHideCb();
      }
    }
    return (
      <div className="bg-white border rounded p-2 ">
        <div className="d-flex justify-content-end mb-2">
          <button
            className="btn btn-sm btn-warning m-1"
            onClick={testKeySelectFormHideCb}
          >
            закрыть
          </button>
        </div>
        <div
          className={`${styles.buttonList}`}
          onClick={testKeyBtnClkHandle}
        >
          {
            testKeys?.length > 0
              ? testKeys.map((key: string, index: number) => (
                <button
                  key={key}
                  className="btn btn-primary btn-sm m-1 d-flex justify-content-start"
                  data-key-id={key}
                >
                  {index + 1}. {key}
                </button>
              )) : ''
          }
        </div>
      </div>
    )
  }

export default TestKeySelect;
