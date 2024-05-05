import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';

const StartScreen = ({ navigation }) => {
  const opacity = new Animated.Value(0);

  const startAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  };

  React.useEffect(() => {
    startAnimation();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Animated.View style={[styles.glow, { opacity }]} /> */}
      <Image source={require('../resourses/turtle.gif')} style={styles.logo} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Login")}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
      {/* <Image source={require('../resourses/turtle.gif')} style={styles.turtle} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0a0a0a',
  },
  // logo: {
  //   width: 200,
  //   height: 200,
  //   marginBottom: 20,
  // },
  glow: {
    position: 'absolute',
    backgroundColor: '#666DD7',
    width: 400,
    height: 400,
    borderRadius: 400,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#89BC57', /* Задаем цвет текста розовым */
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#89BC57',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50, /* Используйте большее значение радиуса для создания формы таблетки */
    marginTop: 50,
    shadowColor: '#DBEEC9', /* Цвет тени */
    shadowOffset: { width: 0, height: 2 }, /* Смещение тени */
    shadowOpacity: 0.1, /* Прозрачность тени */
    shadowRadius: 5, /* Радиус размытия тени */
    elevation: 5, /* Это свойство применяется только для Android и создает восприятие тени */
  },
  buttonText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
  },
  logo: {
    width: "55%",
    height: "15%",
    marginTop: 20,
  },
});

export default StartScreen;
