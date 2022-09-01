import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screen/Home';
import Profile from '../Screen/Profile';
import MyPet from '../Screen/MyPet';

const Tab = createBottomTabNavigator();

export default function ButtonNav() {
    return (
            <Tab.Navigator initialRouteName='Home'>
                <Tab.Screen 
                name="Home" 
                component={Home}
                options={{ 
                    // tabBarIcon: ({color}) => (
                    //     <TabBarIcon name="home" color={color} />
                    // ), headerShown: false }} 
                    tabBarIcon: ({ focused}) => {
                        let icon = focused == true ? require('../Images/home2_icon.png') : require('../Images/home2_n_icon.png') 
                        return <Image source={icon} style={styles.tabIcon} />
                      }, headerShown: false }}
                />
                <Tab.Screen 
                name="MyPet" 
                component={MyPet} 
                options={{ 
                    tabBarIcon: ({ focused}) => {
                        let icon = focused == true ? require('../Images/huella_icon.png') : require('../Images/huella_n_icon.png') 
                        return <Image source={icon} style={styles.tabIcon} />
                      }, headerShown: false }}
                />
                <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{ 
                    tabBarIcon: ({ focused}) => {
                        let icon = focused == true ? require('../Images/account_icon.png') : require('../Images/account_n_icon.png') 
                        return <Image source={icon} style={styles.tabIcon} />
                      }, headerShown: false }}
                />              
            </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabIcon: {
      width: 30,
      height: 30
    }
 });