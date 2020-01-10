import Taro from '@tarojs/taro';

export default async function fetchData(data: string, options: Taro.request.Option) {
  try {
    const { data: response } = await Taro.request({
      // the default values
      method: 'POST',
      header: {
        'content-type': 'application/json',
      },
      ...options,

      // the request content (payload)
      data,
    });

    const { data: resData, errors } = response;
    const theErrors = errors && errors.length ? (errors as Error[]) : null;
    return { loading: false, data: resData, errors: theErrors };
  } catch (error) {
    return {
      loading: false,
      data: null,
      errors: [error as Error],
    };
  }
}
