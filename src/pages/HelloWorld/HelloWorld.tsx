import { Text, View } from '@tarojs/components';
import Taro from '@tarojs/taro';
import useQuery from '../../utils/graphql/useQuery';

interface IProps {
  nothing?: any;
}

const query = `
  query getMovie($title: String!) {
    Movie(title: $title) {
      releaseDate
      actors {
        name
      }
    }
  }
`;
const variables = {
  title: 'Inception',
};

const HelloWorld: Taro.FunctionComponent<IProps> = () => {
  const result = useQuery(query, { variables });
  console.log(result);
  return (
    <View className='index'>
      <Text>Hello world!! !!</Text>
    </View>
  );
};

export default HelloWorld;
