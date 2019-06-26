import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../components/login/login';

const AppNavigator = createStackNavigator({
 Login: { screen: Login },
});

export default createAppContainer(AppNavigator);