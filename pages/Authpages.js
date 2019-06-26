import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../components/home/home'
import Pagea from '../components/pagea/pagea'
import Pageb from '../components/pageb/pageb'

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  Pagea: { screen: Pagea },
  Pageb: { screen: Pageb },
}

);

export default createAppContainer(AppNavigator);