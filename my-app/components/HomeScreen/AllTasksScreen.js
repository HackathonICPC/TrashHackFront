import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { URL_API } from '../urls';
import axios from 'axios';
import TaskList from './TaskList'; // Импортируем компонент TaskList
import { getToken } from '../../utils/storage'; // Импортируем функцию для получения токена

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]); // Состояние для хранения списка задач

  useEffect(() => {
    fetchTasks(); // Вызов функции загрузки списка задач при монтировании компонента
  }, []);

  const fetchTasks = async () => {
    const userToken = await getToken(); // Получение токена из AsyncStorage

    if (!userToken) {
      console.error('User token is missing');
      return;
    }

    axios.get(URL_API + '/task/list', {
      headers: {
        Authorization: `Bearer ${userToken}`, // Установка заголовка с токеном
      },
    })
      .then(response => {
        const tasksData = response.data;
        setTasks(tasksData); // Обновление состояния с полученным списком задач
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  };

  const handleTaskPress = (task) => {
    // Навигация на экран таски с передачей параметров
    navigation.navigate('TaskDetails', { task });
  };

  return (
    <View style={styles.container}>
      <TaskList tasks={tasks} onTaskPress={handleTaskPress} />
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


// import React from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { URL_API } from './urls';
// import { setToken, getToken } from '../utils/storage';
// import axios from 'axios';
// import TaskList from './TaskList'; // Импортируем компонент TaskList


// // const tasks = [
// //   { id: 1, description: 'Task 1', status: 'In progress' },
// //   { id: 2, description: 'Task 2', status: 'In progress' },
// //   { id: 3, description: 'Task 3', status: 'In progress' },
// //   // { id: 2, image: require('../../resourses/rayan2.jpg'), description: 'Task 2', status: 'Waiting' },
// //   // Другие таски
// // ];

// const HomeScreen = ({ navigation }) => {
//   const handleTaskPress = (task) => {
//     // Навигация на экран таски с передачей параметров
//     navigation.navigate('TaskDetails', { task });
//   };

//   return (
//     <View style={styles.container}>
//       <TaskList tasks={tasks} onTaskPress={handleTaskPress} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 30,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default HomeScreen;
