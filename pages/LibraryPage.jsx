import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const LibraryPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>library</Text>
        </View>
    );
};

export default LibraryPage;

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#000000',
        flex : 1
    },
    text : {
        color : 'white'
    }
  });