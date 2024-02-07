import { StyleSheet} from 'react-native'
import React,{ useContext} from 'react';
import { Context } from '../context/BlogContext';
import BLogPostForm from '../Component/BLogPostForm';

const EditScreen = ({route,navigation}) => {
    const id=route.params.id
    const {state,editBlogPost}=useContext(Context);
    const blogPost=state.find(blogPost=>blogPost.id===id);
  return (
    
        <BLogPostForm 
        initialValues={{title:blogPost.title,content:blogPost.content}}
        onSubmit={(title,content)=>{
            editBlogPost(id,title,content,()=>navigation.goBack())
        }}/>
    
    
  )
}
const styles = StyleSheet.create({
input:{
    fontSize:25,
    borderWidth:1,
    borderColor:'black',
    paddingVertical:15,
    marginTop:10,
    marginLeft:10,
},
title:{
    fontSize:20,
    marginLeft:10
}
})
export default EditScreen