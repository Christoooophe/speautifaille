import React, {useState} from 'react';
import { Image, View, StyleSheet, Text, TouchableOpacity, Modal, Pressable } from 'react-native';

const PlayerMini = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/electro.jpg')} style={styles.image}/>
            <TouchableOpacity style={styles.text}>
                <Pressable
                    onPress={() => setModalVisible(true)}>
                    <Text>Deep</Text>
                    <Text>Malaa</Text>
                </Pressable>
            </TouchableOpacity>
            <Image source={require('../../assets/001-bouton-jouer.png')} style={styles.playPause}/>
            <Modal
            animationType="slide"
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(!modalVisible);
              }}>
                <View style={styles.modal}>
                    <Pressable
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Image source={require('../../assets/down.png')}/>
                    </Pressable>
                    <Image source={require('../../assets/electro.jpg')}/>
                    <View>
                        <Text>Deep</Text>
                        <Text>Malaa</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default PlayerMini;

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'grey',
        height : 50,
        width : 400,
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-around',
        alignItems : 'center'
    },
    text : {
        color : 'white',

    },
    image : {
        width : 45,
        height : 45
    },
    playPause : {
        width : 30,
        height :30
    },
    modal : {
        backgroundColor : '#cf5a00',
        height : 750
    },
    hideModal : {
        
    }
  });