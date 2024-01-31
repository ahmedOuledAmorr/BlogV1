import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/Screens/IndexScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
  <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Blogs" component={IndexScreen} options={{ title: 'Blogs' }}/>
      </Stack.Navigator>
  </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  
});
