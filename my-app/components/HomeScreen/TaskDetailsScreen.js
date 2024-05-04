import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const TaskDetailsScreen = ({ route }) => {
  const { task } = route.params;
  const [isRegistered, setIsRegistered] = useState(false);
  const [canRegister, setCanRegister] = useState(false);
  const [canStart, setCanStart] = useState(false);

  useEffect(() => {
    // Запрос на бэкенд для получения информации о задаче и статуса кнопок
    // Вместо setTimeout используйте реальный запрос к бэкенду
    setTimeout(() => {
      // Пример ответа от бэкенда
      const response = {
        isRegistered: false,
        canRegister: true,
        canStart: true,
      };
      setIsRegistered(response.isRegistered);
      setCanRegister(response.canRegister);
      setCanStart(response.canStart);
    }, 1000);
  }, []);

  const handleRegister = () => {
    // Запрос на бэкенд для регистрации на рейд
    // Обновление статуса и кнопок после успешной регистрации
    Alert.alert('Registration Success', 'You have been registered for the raid.');
    setIsRegistered(true);
    setCanRegister(false);
  };

  const handleStartRaid = () => {
    // Открытие окна выбора даты и времени рейда
    Alert.alert('Start Raid', 'Select date and time for the raid.');
    // Реализация логики выбора даты и времени, отправка запроса на бэкенд
    // Обновление статуса и кнопок после успешного начала рейда
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: task.photo }} style={styles.photo} />
      <Text style={styles.description}>{task.description}</Text>

      {!isRegistered && canRegister && (
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Register for Raid</Text>
        </TouchableOpacity>
      )}

      {canStart && (
        <TouchableOpacity style={styles.button} onPress={handleStartRaid}>
          <Text style={styles.buttonText}>Start Raid</Text>
        </TouchableOpacity>
      )}
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
  photo: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TaskDetailsScreen;
