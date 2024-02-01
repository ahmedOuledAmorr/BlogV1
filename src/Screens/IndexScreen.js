import { View, Text } from 'react-native'
import React,{useContext}from 'react'
import BlogContext from '../context/BlogContext';


export default function IndexScreen() {
  const value=useContext(BlogContext);
  return (
    <View>
      <Text>IndexScreen</Text>
      <Text>{value}</Text>
    </View>
  )
}