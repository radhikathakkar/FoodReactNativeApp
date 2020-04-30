import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import SearchBar from './src/screens/SearchBar/SearchScreen';
import { createAppContainer } from 'react-navigation';
import ResultShowScreen from './src/screens/ResultShowScreen';

const Navigator = createStackNavigator(
  {
    Search: SearchBar,
    ResultShow: ResultShowScreen
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "App"
    }
  }
)

export default createAppContainer(Navigator)