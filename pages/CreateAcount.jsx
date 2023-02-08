import React from 'react';
import { Text, View, StyleSheet, Image, Alert } from 'react-native';
import ButtonPerso from '../components/buttons/ButtonPerso';
import Inputs from '../components/inputs/Inputs';

const CreateAcount = () => {

    function inscription(){
        Alert.alert("ça y est t'es inscrit")
    }

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/music-and-multimedia.png')}/>
            <View style={styles.containerInscription}>
                <Inputs label='Votre mail'/>
                <Inputs label='Votre mot de passe' value='password'/>
                <Inputs label='Répétez votre mot de passe'/>
                <ButtonPerso title='Inscription' onPress={inscription}/>
            </View>
        </View>
    );
};

export default CreateAcount;

const styles = StyleSheet.create({
    container : {
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center'
    },
    containerInscription : {
        width : 300,
        height : 500,
        borderWidth : 2,
        borderColor : 'white',
        borderRadius : 25,
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center'
        
    },
    text : {
        color : 'white'
    },
    logo : {
        width : 125,
        height : 125,
        marginBottom : 25
    }
  });