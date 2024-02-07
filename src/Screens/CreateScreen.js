import { StyleSheet, } from 'react-native'
import React ,{useContext}from 'react';
import { Context } from '../context/BlogContext';
import BLogPostForm from '../Component/BLogPostForm';

const CreateScreen = ({navigation}) => {

    const {addBlogPost}=useContext(Context);
  return(
    <BLogPostForm onSubmit={(title,content)=>{
      addBlogPost(title,content,()=> navigation.navigate('Blogs'))
    }}/>
  )
}
const styles = StyleSheet.create({
})

export default CreateScreen