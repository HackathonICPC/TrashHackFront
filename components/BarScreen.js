import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';
import MapScreen from './MapScreen';
import NewTaskScreen from './NewTaskScreen';
import AllTasksScreen from './AllTasksScreen';

const Tab = createBottomTabNavigator();

const MainScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="All Tasks" component={AllTasksScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="New Task" component={NewTaskScreen} />
    </Tab.Navigator>
  );
};

export default MainScreen;
