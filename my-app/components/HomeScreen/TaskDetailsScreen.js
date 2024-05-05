import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';
import { API_URL, URL_API } from '../urls'; // Подставьте свой URL бэкенда
import { getToken } from '../../utils/storage';

const TaskDetailsScreen = ({ route }) => {
  const { taskId } = route.params;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  useEffect(() => {
    fetchTaskInfo();
  }, []);

  const fetchTaskInfo = async () => {
    const userToken = await getToken(); 
    try {
      console.log(route);
      const response = await axios.post(URL_API+`/task/task?taskID=${taskId}`, { token : userToken});
      setTitle(response.data.taskTitle);
      setDescription(response.data.taskDescription);
    } catch (error) {
      console.error('Error fetching task info:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* <Image source={{  }} style={styles.photo} /> */}
      <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Register for Raid</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Start Raid</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 30,
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



// import React, { useState, useEffect } from 'react';
// import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

// const TaskDetailsScreen = ({ route }) => {
//   const { task } = route.params;
//   const [isRegistered, setIsRegistered] = useState(false);
//   const [canRegister, setCanRegister] = useState(false);
//   const [canStart, setCanStart] = useState(false);

//   useEffect(() => {
//     // Запрос на бэкенд для получения информации о задаче и статуса кнопок
//     // Вместо setTimeout используйте реальный запрос к бэкенду
//     setTimeout(() => {
//       // Пример ответа от бэкенда
//       const response = {
//         isRegistered: false,
//         canRegister: true,
//         canStart: true,
//       };
//       setIsRegistered(response.isRegistered);
//       setCanRegister(response.canRegister);
//       setCanStart(response.canStart);
//     }, 1000);
//   }, []);

//   const handleRegister = () => {
//     // Запрос на бэкенд для регистрации на рейд
//     // Обновление статуса и кнопок после успешной регистрации
//     Alert.alert('Registration Success', 'You have been registered for the raid.');
//     setIsRegistered(true);
//     setCanRegister(false);
//   };

//   const handleStartRaid = () => {
//     // Открытие окна выбора даты и времени рейда
//     Alert.alert('Start Raid', 'Select date and time for the raid.');
//     // Реализация логики выбора даты и времени, отправка запроса на бэкенд
//     // Обновление статуса и кнопок после успешного начала рейда
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: task.photo }} style={styles.photo} />
//       <Text style={styles.description}>{task.description}</Text>

//       {!isRegistered && canRegister && (
//         <TouchableOpacity style={styles.button} onPress={handleRegister}>
//           <Text style={styles.buttonText}>Register for Raid</Text>
//         </TouchableOpacity>
//       )}

//       {canStart && (
//         <TouchableOpacity style={styles.button} onPress={handleStartRaid}>
//           <Text style={styles.buttonText}>Start Raid</Text>
//         </TouchableOpacity>
//       )}

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//   },

//   photo: {
//     width: 200,
//     height: 200,
//     borderRadius: 10,
//     marginBottom: 20,
//   },
//   description: {
//     fontSize: 16,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   button: {
//     backgroundColor: 'blue',
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default TaskDetailsScreen;
