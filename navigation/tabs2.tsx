import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// screens
import HomeScreen from '../Screens/HomeScreen'
import Material from '../Screens/Material'
import Challenge from '../Screens/Challenge'

export type RootStackParamList = {
    HomeScreen: undefined;
    Material: undefined;
    Challenge: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const tabs2 = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name='HomeScreen'
                component={HomeScreen}
            />
            <Stack.Screen 
                name='Material'
                component={Material}
            />
            <Stack.Screen 
                name='Challenge'
                component={Challenge}
            />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default tabs2

const styles = StyleSheet.create({})