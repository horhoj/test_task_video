import React, {useState} from "react";
import TestKeySelect from "../../components/TestKeySelect";
import {ITestKeySelectFormHideCb, ITestKeySelectKeyValueChangeCb} from "../../components/TestKeySelect/types";
import ModalWindow from "../../components/ModalWindow";
import {useHistory} from "react-router";
import MainLayout from "../../layouts/MainLayout";

const KeySelectPage: React.FC = (): JSX.Element => {
  const [keyValue, setKeyValue] = useState<string>('');
  const [isShowTestKeySelectForm, setIsShowTestKeySelectForm] = useState<boolean>(false);

  const keyValueChangeHandle = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setKeyValue((e.target as HTMLInputElement).value);
  }

  const testKeyValueChangeCb: ITestKeySelectKeyValueChangeCb = (value: string) => setKeyValue(value);

  const testKeySelectFormHideCb: ITestKeySelectFormHideCb = () => setIsShowTestKeySelectForm(false);

  const showTestKeySelectFormHandle = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsShowTestKeySelectForm(!isShowTestKeySelectForm)
  }

  const history = useHistory()
  const sendKeyHandle = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const checkedKeyValue = keyValue.trim()
    setKeyValue(checkedKeyValue);
    if (checkedKeyValue) {
      history.push(`/video/${keyValue}`);
    }
  }

  return (
    <MainLayout>
      <div className="d-flex flex-column flex-grow-1 justify-content-center align-items-center">
        <div className="d-flex justify-content-center ">
          <button
            className="btn btn-sm btn-primary"
            onClick={showTestKeySelectFormHandle}
          >
            выбрать предоставленные значения <br/> тестовых ключей
          </button>
        </div>
        <form onSubmit={sendKeyHandle} className="w-100">
          <div className="w-100 d-flex justify-content-center p-2 mt-2">
            <input
              type="text"
              className="form-control"
              value={keyValue}
              onChange={keyValueChangeHandle}
              autoFocus={true}
            />
          </div>
          <div className="p-2 d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Отправить
            </button>
          </div>
        </form>
        <div>
          <ModalWindow
            hideCb={testKeySelectFormHideCb}
            isShow={isShowTestKeySelectForm}
          >
            <TestKeySelect
              testKeyValueChangeCb={testKeyValueChangeCb}
              testKeySelectFormHideCb={testKeySelectFormHideCb}
            />
          </ModalWindow>
        </div>
      </div>
    </MainLayout>
  )
}

export default KeySelectPage;
