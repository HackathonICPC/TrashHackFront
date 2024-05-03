import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewTaskScreen = () => {
  return (
    <View style={styles.container}>
      <Text>New Task Screen</Text>
      {/* Дополнительный код для создания новой таски */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewTaskScreen;
