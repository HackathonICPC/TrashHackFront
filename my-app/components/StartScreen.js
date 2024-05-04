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
      <Text style={styles.title}>Welcome to Sigma Trash App!!!!!</Text>
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
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#ff00ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
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
