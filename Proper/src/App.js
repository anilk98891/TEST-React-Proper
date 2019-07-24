import React from 'react'
import {View} from 'react-native'
import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './components/Login'
import HomeScreen from './components/Home'

const AppStack = createStackNavigator({
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: 'Login',
        headerTitle: 'Sign In',
      }
    },
    Home: {
        screen: HomeScreen,
        navigationOptions: {
          title: 'Home',
          headerTitle: 'Home',
        }
      },
});

export default createAppContainer(AppStack)