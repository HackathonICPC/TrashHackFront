import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MyCard from './MyCard';

const TaskList = ({ tasks, onTaskPress }) => {
  // Добавляем проверку на undefined перед использованием toString()

  // console.log('tasks:', tasks);

  const keyExtractor = (item) => {
    // console.log('tasks:', tasks);
    // console.log('item', item);
    // console.log('item.id', item.id);
    // console.log('item.desk', item.description);
    // console.log('item.img', item.image);
    console.log('item:', item);
    return item.id ? item.id.toString() : "";
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <MyCard title={item.title} description={item.description} image={item.image} task={item} />
      </View>
    );
  };

  // Выводим данные в консоль перед отображением списка задач
  // console.log(tasks);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    paddingTop: 20,
    marginHorizontal: 10,
  },
  cardContainer: {
    marginVertical: 8,
  },
});

export default TaskList;
