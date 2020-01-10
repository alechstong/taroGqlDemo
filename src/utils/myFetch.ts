import Taro from '@tarojs/taro';

type MethodEnum = 'GET' | 'POST' | 'DELETE' | 'OPTIONS' | 'TRACE' | 'PUT' | 'CONNECT' | 'HEAD';

const myFetch = (url: string, options?: RequestInit | undefined) =>
  Taro.request({
    url,
    method: options && (options.method as MethodEnum),
    data: options && options.body,
    header: options && options.headers,
  }).then(({ data, statusCode }) => {
    const result: Response = {
      ok: statusCode >= 200 && statusCode < 300,

      //    () => {
      //    return statusCode >= 200 && statusCode < 300;
      //  }
      text: () => {
        return Promise.resolve(JSON.stringify(data));
      },
    } as Response;

    return result;
  });

export default myFetch;
