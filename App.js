import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignScreen from './screens/SignScreen';
import { AppStackNavigator } from './components/AppStackNavigator';

export default function App() {
  return <AppContainer />;
}

const switchNavigator = createSwitchNavigator({
  SignScreen: { screen: SignScreen },
  Stack: { screen: AppStackNavigator },
  
});

const AppContainer = createAppContainer(switchNavigator);
