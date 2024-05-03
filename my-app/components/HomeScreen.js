import React from 'react';
import { View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
    <Tab.Navigator>
      <Tab.Screen name="Экран 1" component={Screen1} />
      <Tab.Screen name="Экран 2" component={Screen2} />
    </Tab.Navigator>
  );
};

export default MenuScreen;
