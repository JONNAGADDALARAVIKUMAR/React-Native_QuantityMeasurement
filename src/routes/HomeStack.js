import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LengthScreen from '../components/LengthScreen';
import TemparatureScreen from '../components/TemperatureScreen';
import VolumeeScreen from '../components/VolumeScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Length" screenOptions = {{headerShown : true}}>
                <Stack.Screen name = "Length" component = {LengthScreen}/>
                <Stack.Screen name = "Temperature" component = {TemparatureScreen}/>
                <Stack.Screen name = "Volume" component = {VolumeeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default HomeStack;