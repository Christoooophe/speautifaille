import React from 'react';
import { Button, View, StyleSheet, Pressable, Text, TextInput } from 'react-native';

const Inputs = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.label}</Text>
            <TextInput 
            style={styles.textInput}
            value={props.number}/>
        </View>
      );
};

export default Inputs;

const styles = StyleSheet.create({
    container : {
      display : 'flex',
      alignItems : 'center',
      justifyContent : 'center'
    },
    text : {
      color : 'white',
      marginBottom : 15,
    },
    textInput : {
      color : 'white',
      backgroundColor : 'transparent',
      borderWidth : 2,
      borderColor : 'white',
      textAlign : 'center',
      height : 40,
      width : 200,
      borderRadius : 10,
      marginBottom : 30,
    }
  });