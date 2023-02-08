import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loading from './components/Loading';

export default function App() {
  return (
    <View style={styles.container}>
      <Loading/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text : {
    color : 'white'
  }
});
