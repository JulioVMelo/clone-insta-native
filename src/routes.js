import { createAppContainer, createBottomTabNavigator } from 'react-navigation';

import Home from './screens/Home';
import User from './screens/User';
import Search from './screens/Search';
import Photo from './screens/Photo';
import History from './screens/History';

const Routes = createAppContainer(
  createBottomTabNavigator(
    {
      Home,
      Search,
      Photo,
      History,
      User
    },
    {
      initialRouteName: 'Home',
      defaultNavigationOptions: {
      },
      tabBarOptions: {
        showLabel: false,
        activeTintColor: "#000",
        style : {
          backgroundColor:'#F6F6F6'
        }
      }
    }
  )
);

export default Routes;
