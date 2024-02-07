import { View, Text,TextInput,Button,StyleSheet } from 'react-native'
import React,{useState }from 'react'

const BLogPostForm = ({onSubmit,initialValues}) => {
    const [title,setTitle]=useState(initialValues.title)
    const [content,setContent]=useState(initialValues.content);
    return (
        <View>
          <Text style={styles.label}>Enter</Text>
          <TextInput style={styles.input} value={title} onChangeText={text=>{setTitle(text)}}/>
          <Text style={styles.label}>Create</Text>
          <TextInput style={styles.input} value={content} onChangeText={text=>{setContent(text)}}/>
    
          <Button title='Save Blog Post'
          onPress={()=>onSubmit(title,content)}
          />
    
        </View>
      )
}
BLogPostForm.defaultProps={
    initialValues:{
        title:'',
        content:''
    }
}


const styles = StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        marginBottom:15,
        padding:5,
        margin:5,
    },
    label:{
        fontSize:20,
        marginBottom:5,
        marginLeft:5,
    }

})
export default BLogPostForm