import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import FindFoodScreen from '../screens/FindFoodScreen';
import ScanScreen from '../screens/ScanScreen';

export const AppTabNavigator = createMaterialBottomTabNavigator(
    {
        HomeScreen: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View style={{marginBottom:10}}>
                        <MaterialCommunityIcons name="food" size={24} color={tintColor} />
                    </View>
                ),
                tabBarLabel: 'Fun Recipes',
            },
        },

        FindFoodScreen: {
            screen: FindFoodScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <MaterialCommunityIcons name="file-find" size={24} color={tintColor} />
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#a3c2fa',
                barStyle: { backgroundColor: '#2163f6' },
                tabBarLabel: 'Find Food',
            },
        },

        ScanScreen: {
            screen: ScanScreen,
            navigationOptions: {
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <MaterialCommunityIcons name="barcode-scan" size={24} color={tintColor} />
                    </View>
                ),
                activeColor: '#ffffff',
                inactiveColor: '#92c5c2',
                barStyle: { backgroundColor: '#2c6d6a' },
                tabBarLabel: 'Scan',
            },
        },
    },
    {
        initialRouteName: 'HomeScreen',
        activeColor: '#ffffff',
        inactiveColor: '#bda1f7',
        barStyle: { backgroundColor: '#6948f4' },
    }
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
