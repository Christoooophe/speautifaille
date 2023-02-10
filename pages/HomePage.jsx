// Cette page va recevoir tous les éléments du site genre la barre de nav, la barre du son en cours ...
import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function HomePage(props) {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.text}>yo</Text>
            </ScrollView>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#000000',
        flex : 1
    },
    text : {
        color : 'white'
    }
  });