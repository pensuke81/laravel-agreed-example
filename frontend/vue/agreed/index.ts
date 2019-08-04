require('module-alias/register');
import {
  APIDef,
  GET,
  Capture,
  Success200,
  ResponseDef,
  convert
} from 'agreed-typed';
import { ITestData, testData } from '@agreed/data/test.ts';

/**
 * @summary Test API
 * @description 色々な型を返すAPI
 */
export type TestGetAPI = APIDef<
  GET, // HTTP Method
  ['api/test', Capture<':id'>], // request path => /user/:id
  {}, // request header
  {}, // request query
  undefined, // request body
  {}, // response header
  ResponseDef<Success200, ITestData>
>;

const api: Array<TestGetAPI> = [
  {
    request: {
      path: ['api/test', '1'], // Capture<:id, number>として定義
      method: 'GET',
      body: undefined
    },
    response: {
      status: 200,
      body: testData
    }
  }
];

module.exports = convert(...api);
