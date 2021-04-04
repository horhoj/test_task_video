export interface ITestKeySelectProps {
  testKeyValueChangeCb: ITestKeySelectKeyValueChangeCb;
  testKeySelectFormHideCb: ITestKeySelectFormHideCb;
}

export interface ITestKeySelectKeyValueChangeCb {
  (value: string): void;
}

export interface ITestKeySelectFormHideCb {
  (): void;
}
