import React from 'react';
import { Text, View, StyleSheet, Image, Alert } from 'react-native';
import ButtonPerso from '../components/buttons/ButtonPerso';

const Accueil = ({navigation}) => {
    

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/music-and-multimedia.png')}/>
            <ButtonPerso title='Inscription' onPress={() => navigation.navigate('Inscription')}/>
            <ButtonPerso title='Connexion' onPress={() => navigation.navigate('Connexion')}/>
        </View>
    );
};

export default Accueil;

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#0d1b21',
        flex : 1,
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center'
    },
    logo : {
        width : 125,
        height : 125,
        marginBottom : 25
    }
  });