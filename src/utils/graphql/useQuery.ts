import Taro, { useCallback, useEffect, useContext, useState, useMemo } from '@tarojs/taro';
import ClientContext from './ClientContext';
import { IQueryOptions } from './TaroClient';

const initState: { loading: boolean; data: any; error: Error | null } = {
  loading: true,
  data: null,
  error: null,
};

export default function useQuery(query: string, gqlOptions: IQueryOptions | null = null) {
  const [state, setState] = useState(initState);
  const client = useContext(ClientContext);

  // doFetch cannot depend on gqlOptions, because it might be an inline object, whose ref changes on every render
  // it should instead depend on its content
  const usedOptions = useMemo(() => {
    return {
      variables: (gqlOptions && gqlOptions.variables) || undefined,
    };
    // eslint-disable-next-line
  }, [gqlOptions && gqlOptions.variables]);
  const doFetch = useCallback(async () => {
    console.log(`value of client: ${client}`);
    const { loading, data, errors } = await client.query(query, usedOptions);
    const error = errors && errors.length ? errors[0] : null;
    setState({
      loading,
      data,
      error,
    });
  }, [client, query, usedOptions]);
  // }, [client, gqlOptions, query, setState]);

  useEffect(() => {
    setState({ loading: true, data: null, error: null });
    doFetch();
    // }, [doFetch]);
  }, [doFetch, setState]);

  return state;
}
