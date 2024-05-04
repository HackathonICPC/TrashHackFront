import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { URL_API } from './urls';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    // Здесь должна быть логика регистрации, например, отправка данных на сервер
    console.log('Registration username:', username);
    console.log('Registration password:', password);

    // Переход на следующий экран после успешной регистрации
    navigation.navigate('HomeMenu');
  };

  const handleLogin = () => {
    // Переход на экран входа
    navigation.navigate('Login');
  };

  return (
    <ImageBackground source={require('../resourses/register-background.jpg')} style={styles.backgroundImage}>
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
        <View style={styles.buttonContainer}>
          <Button title="Back to Login" onPress={handleLogin} />
          <Button title="   Register   " onPress={handleRegistration} /><Button title="HOME" onPress={() => navigation.navigate("HomeMenu")} />  
        </View> 
        
              
      
      <View style={styles.overlay} />
      </View>
    </ImageBackground>
  );
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    zIndex: -1,
  },
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginLeft: '0%', // сдвиг контейнера на 5% влево
    marginTop: '50%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    zIndex: 2,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    zIndex: 2,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%', // кнопки занимают 80% ширины экрана
    zIndex: 2,
    marginTop: 10, // чтобы кнопки были ближе друг к другу
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.5)', // белый полупрозрачный цвет
    width: '110%', // измените ширину по вашему усмотрению
    height: '57%', // измените высоту по вашему усмотрению
    borderRadius: 10,
    top: '-5%', // расположение сверху
    left: '2%', // расположение слева
    zIndex: 1,
  },
  link: {
        marginTop: 10,
        color: 'blue',
        textDecorationLine: 'underline',
        zIndex: 2,
      },
});
//   return (
//     <ImageBackground source={require('../resourses/login-background.jpg')} style={styles.backgroundImage}>
    
//     <View style={styles.container}>
//       <Text style={styles.title}>Register</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter username"
//         value={username}
//         onChangeText={setUsername}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />

//       <View style={styles.buttonContainer}></View>

//         <Button title="Register" onPress={handleRegistration} />
//         <Text style={styles.link} onPress={handleLogin}>Уже есть аккаунт? Зайди!</Text>
//         <Button title="HOME" onPress={() => navigation.navigate("HomeMenu")} />
//       </View>

//       <View style={styles.overlay} />
//   </ImageBackground>
//   );
// };

// const styles = StyleSheet.create({
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//     zIndex: -1,
//   },
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     marginLeft: '0%', // сдвиг контейнера на 5% влево
//     marginTop: '50%',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     zIndex: 2,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//     zIndex: 2,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '70%', // кнопки занимают 80% ширины экрана
//     zIndex: 2,
//     marginTop: 10, // чтобы кнопки были ближе друг к другу
//   },
//   link: {
//     marginTop: 10,
//     color: 'blue',
//     textDecorationLine: 'underline',
//     zIndex: 2,
//   },
//   overlay: {
//     position: 'absolute',
//     backgroundColor: 'rgba(255, 255, 255, 0.5)', // белый полупрозрачный цвет
//     width: '110%', // измените ширину по вашему усмотрению
//     height: '55%', // измените высоту по вашему усмотрению
//     borderRadius: 10,
//     top: '-5%', // расположение сверху
//     left: '2%', // расположение слева
//     zIndex: 1,
//   },
// });

export default RegisterScreen;