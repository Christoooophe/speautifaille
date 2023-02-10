import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';

const Parcourir = (props) => {
    return (
        <View style={styles.container}>
            <Image source={props.image} style={styles.image}/>
            <Text style={styles.titre}>{props.titre}</Text>
        </View>
    );
};

export default Parcourir;

const styles = StyleSheet.create({
    container : {
        width : 150,
        marginBottom : 20
    },
    image : {
        width : 150,
        height : 150
    },
    titre : {
        color : 'white',
        textAlign : 'center',
        marginTop : 2
    }
  });