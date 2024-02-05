import { View, Text,FlatList,Button,StyleSheet,TouchableOpacity} from 'react-native'
import React,{useContext,useLayoutEffect }from 'react'
import {Context} from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';


export default function IndexScreen({navigation}) {
  const {state,addBlogPost,deleteBlogPost}=useContext(Context);

  //Set Option , add headerRight with navigate to CreateScreen..
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather name="plus" size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);


  return (
    <View>
      <Text>IndexScreen</Text>
      <Button title='Add Post' onPress={addBlogPost}/>
      <FlatList
      keyExtractor={(blogPosts)=>blogPosts.title}
      data={state}
      renderItem={({item})=>{
        return (
            <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
              <View style={styles.row}>
              <Text style={styles.title}>{item.title} -{item.id}</Text>
                <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
              <Feather name="trash" style={styles.icon} />
                </TouchableOpacity>
              </View>
          </TouchableOpacity>            

        )
      }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  row:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:20,
    paddingHorizontal:10,
    borderBottomWidth:1,
    borderColor:'gray'
  },
  title:{
    fontSize:18,
  },
  icon:{
    fontSize:24
  }
})