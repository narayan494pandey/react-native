import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Button,Image, Text, View } from 'react-native';
import {styles} from './Style'
export default function App() {
  const [text, setText] = useState('My First React App');
  return (
      <View style={styles.container}>
        <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
        <Button style={styles.button} title="Change Text" onPress={() => setText('The text is changed')} />
        <Text style={styles.text}>{text}</Text>
        <View style={styles.link}>
          <Button style={styles.button} title="Home"/>
          <Button style={styles.button} title="About"/>
          <Button style={styles.button} title="Login"/>
          <Button style={styles.button} title="SignUp"/>
         </View>
        <StatusBar style="auto" />  
      </View>
      
  );
}

