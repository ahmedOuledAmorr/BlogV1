import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/Screens/IndexScreen';
import { Provider } from './src/context/BlogContext'; 
import ShowScreen from './src/Screens/ShowScreen';
import CreateScreen from './src/Screens/CreateScreen';
import { Feather } from '@expo/vector-icons';
import EditScreen from './src/Screens/EditScreen';



const  App=() =>{
  const Stack = createNativeStackNavigator();

  return (
  <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Blogs" component={IndexScreen} options={{ title: 'Blogs' }}/>
        <Stack.Screen name="Show" component={ShowScreen} options={{ title: 'Show' }}/>
        <Stack.Screen name="Create" component={CreateScreen} options={{ title: 'Create' }}/>
        <Stack.Screen name="Edit" component={EditScreen} options={{ title: 'Edit' }}/>


      </Stack.Navigator>
  </NavigationContainer>
  );
}
export default ()=>{
  return <Provider>
      <App/>
    </Provider>
}