import { Button } from '@tarojs/components';
import Taro from '@tarojs/taro';
import ClientContext from '../../utils/graphql/ClientContext';
import TaroClient from '../../utils/graphql/TaroClient';
import './index.scss';

const client = new TaroClient({
  method: 'POST',
  url: 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr',
  header: {
    'content-type': 'application/json',
  },
});
function gotoHelloWorld() {
  Taro.navigateTo({
    url: '/pages/HelloWorld/HelloWorld',
  });
}

const Index: Taro.FunctionComponent = () => {
  return (
    <ClientContext.Provider value={client}>
      <Button onClick={gotoHelloWorld}>HelloWorld</Button>
    </ClientContext.Provider>
  );
};

Index.config = {
  navigationBarTitleText: '首页',
};
export default Index;
