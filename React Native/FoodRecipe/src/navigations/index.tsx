import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/homeScreen/HomeScreen';
import ReceipeDetails from '../screens/ReceipeDetails';

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ReceipeDetail" component={ReceipeDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
