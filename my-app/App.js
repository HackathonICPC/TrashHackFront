import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StartScreen from './components/StartScreen';
import MenuScreen from './components/HomeScreen/MenuScreen';
import LoginScreen from './components/LoginScreen';
import TaskDetailsScreen from './components/HomeScreen/TaskDetailsScreen';
import RegisterScreen from './components/RegisterScreen';
import {YaMap} from 'react-native-yamap';


const API_TOKEN = '916b0343-b8f7-4baa-ac7a-077d4a5386dd';
YaMap.init(API_TOKEN);


const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
       
            <Stack.Screen name="Start" component={StartScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            {/* Возможно стоит оставить ибо по-другому не работает? */}
            <Stack.Screen name="TaskDetails" component={TaskDetailsScreen} />
            {/* Потом убрать */}
            <Stack.Screen name="HomeMenu" component={MenuScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;