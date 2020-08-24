import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StatusBar } from 'react-native';
import Weather from './components/Weather';
import ZipCodeScreen from './components/ZipCodeScreen';
import WeatherScreen from './components/WeatherScreen';
import Home from './components/Home';
const Stack = createStackNavigator();
export default function App() {
  return (

    <NavigationContainer>

      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
        <Stack.Screen name="Setting" component={ZipCodeScreen} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

