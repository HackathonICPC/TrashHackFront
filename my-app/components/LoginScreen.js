import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { URL_API } from './urls';
import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const requestData = {
        "login": username,
        "password": password
      };

      // debug START
      console.log();
      // degug END

      axios.post(URL_API + "/auth/login", requestData)
        .then(response => {
            const data = response.data; 
            console.log(URL_API + "/auth/login")
            
            if (response.status === 200 && response.data.length > 0 && response.data.length < 300) {
                console.log('Login successful. Token:', response.data);
                AsyncStorage.setItem('userToken', response.data);
                navigation.navigate('HomeMenu'); 
              } else if (response.status === 401) {
                console.error('Invalid credentials (code ' + response.status + ')');
              }
              else {
                console.error('Critical server error (code ' + response.status + ')');
              }
            })
        .catch(error => {
            //Нужно здесь написать нормальное ловление исключений. 
            //Потому что я сверху написал случай когда код 401 (неавторизован пользователь - неправильный пароль)
            //но этот случай уходит сюда с кучей ненужной инфы
            //кто нибудь зафиксите это
            console.error('Login error:', error);
            console.error(error.response);
            console.error('Login error:', error.response.data);
        });
  };

  const handleRegistration = () => {
    navigation.navigate('Register'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.link} onPress={handleRegistration}>У меня нет аккаунта, переведи меня на регистрацию</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  link: {
    marginTop: 10,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;