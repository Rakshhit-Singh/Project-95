import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import ListScreen from '../screens/ListScreen';
import RecipeScreen from '../screens/RecipeScreen';
import { AppTabNavigator } from './AppTabNavigator';


export const AppStackNavigator = createStackNavigator(
  {
    AppTabNavigator: {
        screen: AppTabNavigator,
        navigationOptions: { headerShown: false },
      },
    ListScreen: {
      screen: ListScreen,
      navigationOptions: { headerShown: false },
    },
    RecipeScreen: {
      screen: RecipeScreen,
      navigationOptions: { headerShown: false },
    },
  },
  { initialRouteName: AppTabNavigator }
);
