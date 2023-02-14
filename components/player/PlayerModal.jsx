import React from 'react';
import { Image, Text, View } from 'react-native';

const PlayerModal = () => {
    return (
        <View>
            <View>
                <Image source={require('../../assets/right-arrow.png')}/>
            </View>
            <Image source={require('../../assets/electro.jpg')}/>
            <View>
                <Text>Deep</Text>
                <Text>Malaa</Text>
            </View>
        </View>
    );
};

export default PlayerModal;