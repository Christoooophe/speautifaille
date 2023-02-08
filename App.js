import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './components/Loading';
import Connexion from './pages/Connexion';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CreateAcount/> */}
      <Connexion/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1b21',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    color : 'white'
  }
});
