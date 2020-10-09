import React from 'react';
import {LogBox, StyleSheet} from 'react-native';
import BioMetrcisLogin from "./Components/BiometricsLogin";
import GoogleLogin from "./Components/GoogleLogin";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createAppContainer} from "react-navigation";
import { AntDesign,Entypo } from '@expo/vector-icons';


const bottomTabNavigator = createBottomTabNavigator(
    {
        Google:{
            screen:GoogleLogin,
            navigationOptions:{
                tabBarIcon:({tintColor}) =>(
                    <AntDesign name="google" size={24} color={tintColor} />
                )
            }
        },
        BioMetrics: {
            screen:BioMetrcisLogin,
            navigationOptions:{
                tabBarIcon:({tintColor}) =>(
                    <Entypo name="fingerprint" size={24} color={tintColor} />
                )
            }
        }
    }
);

const AppNav = createAppContainer(bottomTabNavigator);
export default AppNav;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
