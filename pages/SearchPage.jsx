import React from 'react';
import { Text, View, StyleSheet, ScrollView, TextInput } from 'react-native';
import Parcourir from '../components/parcourir/Parcourir';
import PlayerMini from '../components/player/PlayerMini';

const SearchPage = () => {
    return (
        <View style={styles.container}> 
            <Text style={styles.text}>Rechercher</Text>
            <TextInput style={styles.input} placeholder='Recherchez votre artiste préféré'/>
            <ScrollView>
                <View style={styles.parcourirContainer}>
                    <Parcourir image={require('../assets/electro.jpg')} titre='electro'/>
                    <Parcourir image={require('../assets/jazz.png')} titre='jazz'/>
                    <Parcourir image={require('../assets/rap.png')} titre='rap'/>
                    <Parcourir image={require('../assets/techno.jpg')} titre='techno'/>
                    <Parcourir image={require('../assets/electro.jpg')} titre='electro'/>
                    <Parcourir image={require('../assets/jazz.png')} titre='jazz'/>
                    <Parcourir image={require('../assets/rap.png')} titre='rap'/>
                    <Parcourir image={require('../assets/techno.jpg')} titre='techno'/>
                </View>
            </ScrollView>
            <PlayerMini/>
        </View>
    );
};

export default SearchPage;

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#000000',
        flex : 1,
        paddingTop : 50
    },
    text : {
        color : 'white',
        fontSize : 25,
        marginBottom : 10,
        paddingLeft : 10
    },
    parcourirContainer : {
        display : 'flex',
        flexDirection : 'row',
        flexWrap : 'wrap',
        alignItems : 'center',
        justifyContent : 'space-around',
    },
    input : {
        width : 300,
        height : 50,
        backgroundColor : 'white',
        borderRadius : 30,
        margin : 10,
        marginTop : 0,
        fontSize : 15,
        paddingLeft : 10,
        marginBottom : 30
    }
  });