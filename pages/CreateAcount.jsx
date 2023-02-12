import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Alert, TouchableOpacity, TextInput, Button } from 'react-native';
const CreateAcount = ({navigation}) => {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const creatUser = () =>{
        
        let Email = name;
        let Password = password;
    
        if(Email.length === 0|| Password.length === 0){
            alert("Rempli les champs");
        }
        else if(Email.length <=2){
            alert('nom trop court')
        }
        else if(Password.length <=7){
            alert('mot de passe trop court')
        }
        else{
            let InsertAPIURL = "exp://192.168.1.31:8000/php/SignUp.php"; 
            //Trouver comment aller sur le php depuis l'url
            let headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
            let Data ={
                Email: Email,
                Password: Password
            };
            fetch(InsertAPIURL,{
                method:'POST',
                headers:headers,
                body: JSON.stringify(Data) //convert data to JSON
            })
                .then((response)=>response.text()) //check response type of API (CHECK OUTPUT OF DATA IS IN JSON)
                .then((response)=>{
                alert(response[0].Message);       // If data is in JSON => Display alert msg
                navigation.navigate("Connexion"); //Navigate to next screen if authentications are valid
                })
                .catch((error)=>{
                    alert("Error Occured" + error);
                })
                }
            }
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/music-and-multimedia.png')}/>
            <View style={styles.containerInscription}>
                <Text style={styles.text}>{name ? `${name}` : 'indique ton blase'}</Text>
                <TextInput style={styles.textInput} onChangeText={text => setName(text)}/>
                <Text style={styles.text}>Mot de passe</Text>
                <TextInput style={styles.textInput} onChangeText={text => setPassword(text)}/>
                {/* <TouchableOpacity onPress={creatUser}>
                    <ButtonPerso title='Inscription'/> Marche pas pour le moment 
                </TouchableOpacity> */}
                <Button onPress={creatUser} title="go"/>
            </View>
        </View>
    );
};

export default CreateAcount;

const styles = StyleSheet.create({
    container : {
        backgroundColor: '#000000',
        flex : 1,
        display : 'flex',
        flexDirection : 'column',
        alignItems : 'center',
        justifyContent : 'center'
    },
    containerInscription : {
        width : 300,
        height : 450,
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
    },
    
    textInput : {
        color : 'white',
        backgroundColor : 'transparent',
        borderWidth : 2,
        borderColor : 'white',
        textAlign : 'center',
        height : 40,
        width : 200,
        borderRadius : 10,
        marginBottom : 30,
      }
  });