import { Provider } from 'react-redux';
import { store } from './redux/store';
import UserInfoScreen from './screens/UserInfoScreen';

export default function App() {
  return (
    <Provider store={store}>
      <UserInfoScreen/>
    </Provider>
  );
}
