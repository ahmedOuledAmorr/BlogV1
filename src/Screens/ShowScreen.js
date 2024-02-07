import { View, Text,TouchableOpacity } from 'react-native'
import React,{useContext,useLayoutEffect} from 'react';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';




const ShowScreen = ({route,navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit',{id:route.params.id})}>
      <EvilIcons name="pencil" size={35} />
      </TouchableOpacity>
),
    });
  }, [navigation]);

    const {state}=useContext(Context);
    const blogPost=state.find(blogPost=>blogPost.id===route.params.id)
    
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}


export default ShowScreen