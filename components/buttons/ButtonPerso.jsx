import React from 'react';
import { Button, View, StyleSheet, Pressable, Text } from 'react-native';

const ButtonPerso = (props) => {
    return (
        <Pressable style={styles.container} onPress={props.onPress}>
          <Text style={styles.text}>{props.title}</Text>
        </Pressable>
      );
};

export default ButtonPerso;

const styles = StyleSheet.create({
    container : {
      display : 'flex',
      alignItems : 'center',
      justifyContent : 'center',
      marginTop : 15
    },
    text : {
      color : '#0d1b21',
      backgroundColor : 'white',
      textAlign : 'center',
      height : 40,
      width : 200,
      borderRadius : 10,
      padding : 8
    }
  });