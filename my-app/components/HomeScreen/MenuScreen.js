import React from 'react';
import { View, Text, Button , Image } from 'react-native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // импорт иконок из библиотеки Ionicons


import ProfileScreen from './ProfileScreen';
import MapScreen from './MapScreen';
import AllTasksScreen from './AllTasksScreen';
import NewTaskScreen from './NewTaskScreen';

const Tab = createBottomTabNavigator();

const MenuScreen = ({ navigation }) => {
  return (
      <Tab.Navigator         
        screenOptions={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconSource = focused ? require('../../resourses/nav-button.png') : require('../../resourses/nav-button-grey.png'); // Замените путем к вашему изображению
            return <Image source={iconSource} style={{ width: size, height: size }} />;
          },
        
        tabBarLabelStyle: {
          fontSize: 14, // размер шрифта
          // fontWeight: 'bold', // жирный
          paddingVertical: 2, // отступы по вертикали
          paddingHorizontal: 12, // отступы по горизонтали
        },
        // tabBarOptions={{
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        // }}
        }}
        >
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="All Tasks" component={AllTasksScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
};

export default MenuScreen;
