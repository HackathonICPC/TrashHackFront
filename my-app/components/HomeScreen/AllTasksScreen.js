import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import TaskList from './TaskList';
import { getToken } from '../../utils/storage';
import MyCard from './MyCard';
import { URL_API } from '../urls';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  console.log('Tasks:', tasks);

  useEffect(() => {
    fetchTasks();
  }, []);

  console.log('Tasks:', tasks);

  const fetchTasks = async () => {
    const userToken = await getToken();

    console.log('User token', userToken);

    if (!userToken) {
      console.error('User token is missing');
      return;
    }
  
    axios.post(URL_API + '/task/list', {token : userToken})
      .then(response => {
        const tasksData = response.data;
        console.log('tasksData', tasksData);
        setTasks(tasksData);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  };

  return (
    <View style={styles.container}>
      <TaskList tasks={tasks}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
