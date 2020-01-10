import Taro from '@tarojs/taro';
import TaroClient from './TaroClient';

// this context should never be used with the default values
const ClientContext = Taro.createContext<TaroClient>((null as unknown) as TaroClient);
export default ClientContext;
