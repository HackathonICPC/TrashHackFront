import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import axios from 'axios';

const URL_API = "http://10.124.249.25:8080/api/";

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const requestData = {
        username: username,
        password: password
      };
      // console.log(username);
      // console.log(password);
      axios.post(URL_API+"auth/login", requestData)
        .then(response => {
            // console.log('!' + username);
            // console.log(password);
            const data = response.data; // Данные, которые пришли с сервера
            // console.log(response);
            // console.log(data);
            // console.log(response.status);
            
            if (response.status === 200) {
                console.log('Login successful. Token:', response.status);
                // Сохраните токен в AsyncStorage или контексте приложения
                // Перенаправьте пользователя на следующий экран или выполните необходимые действия
                } else {
                console.error('Login failed. Invalid response from server:', data);
                // Добавьте код для обработки неверного ответа сервера
                }
            })
        .catch(error => {
            console.error('Login error:', error);
            // Добавьте код для обработки ошибки входа
        });

    // Ваша логика входа здесь, например, проверка данных на сервере или в локальном хранилище
    console.log('Username:', username);
    console.log('Password:', password);

    //потом убери
    navigation.navigate('HomeMenu'); 
  };

  const handleRegistration = () => {
    navigation.navigate('HomeMenu'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
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

export default RegisterScreen;