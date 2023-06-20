import { View, Text } from 'react-native'
import React from 'react'
import Tabs from './navigation/tabs'
import Tabs2 from './navigation/tabs2'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  )
}

export default App
