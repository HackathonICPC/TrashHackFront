import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthScreen from './components/AuthScreen';
import MenuScreen from './components/HomeScreen';
import LoadingScreen from './components/LoadingScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const userToken = await AsyncStorage.getItem('userToken');
      if (userToken) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Ошибка при проверке аутентификации:', error);
    }
  };
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated === null ? (
          <Stack.Screen name="Loading" component={LoadingScreen} />
        ) : isAuthenticated ? (
          <Stack.Screen name="Home" component={MenuScreen} />
        ) : (
          <Stack.Screen name="Auth" component={AuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;