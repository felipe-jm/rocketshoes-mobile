import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '10.1.1.118' })
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  console.tron = tron;

  tron.clear();
}

export default Reactotron;
