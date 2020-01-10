import Taro from '@tarojs/taro';
import fetchData from './fetchData';

export interface IQueryOptions {
  variables?: {
    [key: string]: any;
  };
}

interface IQueryDataObject {
  query: string;
  variables?: {
    [key: string]: any;
  };
}

export default class TaroClient {
  private options: Taro.request.Option;

  public constructor(options: Taro.request.Option) {
    this.options = options;
  }

  public query(gqlQuery: string, options: IQueryOptions | null = null) {
    const dataObject: IQueryDataObject = { query: gqlQuery };
    if (options && options.variables) {
      dataObject.variables = options.variables;
    }

    // the data prop, to be passed to taro.request
    const data = JSON.stringify(dataObject);

    return fetchData(data, this.options);
  }
}
