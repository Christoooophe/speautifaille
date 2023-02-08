import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../assets/music-and-multimedia.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
    },
    container: {
        backgroundColor : 'black'
    },   
    text : {
        color : 'white'
    }
  });