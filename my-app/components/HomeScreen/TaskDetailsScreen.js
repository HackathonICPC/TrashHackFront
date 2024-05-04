import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskDetailsScreen = ({ route }) => {
  // Получение параметров из навигации
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text>Task Details</Text>
      <Text style={styles.title}>Task Details</Text>
      <Text>ID: {task.id}</Text>
      <Text>Description: {task.description}</Text>
      <Text>Status: {task.status}</Text>
      {/* Другие детали таски */}
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
});

export default TaskDetailsScreen;
