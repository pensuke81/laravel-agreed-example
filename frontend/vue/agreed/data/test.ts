export interface ITestData {
  data: {
    string: string;
    number: number;
    stringNumber: string;
    object: Object;
    array: number[];
  };
}

export const testData: ITestData = {
  data: {
    string: 'hello',
    number: 1,
    stringNumber: '1',
    object: {
      key: 'value'
    },
    array: [1, 2, 3]
  }
};
