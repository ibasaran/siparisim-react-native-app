
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../Auth/Login';
import HomeScreen from '../HomeScreen';
import AuthLoadingScreen from '../Auth/AuthLoadingScreen';
import RestaurantList from '../RestaurantList/RestaurantList';

const AppStack = createStackNavigator({ Home: RestaurantList });
const AuthStack = createStackNavigator({ SignIn: Login });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
));