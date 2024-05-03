import React from 'react';
import { View, Text, Button } from 'react-native';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Screen1 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Экран 1</Text>
  </View>
);

const Screen2 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Экран 2</Text>
  </View>
);


const Tab = createBottomTabNavigator();

const MenuScreen = ({ navigation }) => {
  return (
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Экран 1" component={Screen1} />
        <Tab.Screen name="Экран 2" component={Screen2} />
      </Tab.Navigator>
  );
};

export default MenuScreen;
