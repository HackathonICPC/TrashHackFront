import React from 'react';
import { View, Text, Button } from 'react-native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import ProfileScreen from './ProfileScreen';
import MapScreen from './MapScreen';
import AllTasksScreen from './AllTasksScreen';
import NewTaskScreen from './NewTaskScreen';

const Tab = createBottomTabNavigator();

const MenuScreen = ({ navigation }) => {
  return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Add Task" component={NewTaskScreen} />
        <Tab.Screen name="All Tasks" component={AllTasksScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  );
};

export default MenuScreen;
