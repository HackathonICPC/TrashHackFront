import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import MyCard from './MyCard';

const TaskList = ({ tasks }) => {
  const keyExtractor = (item) => {
    console.log('item:', item);
    return item.id ? item.id.toString() : "";
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.cardContainer}>
        <MyCard task={item} />
      </View>
    );
  };

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
