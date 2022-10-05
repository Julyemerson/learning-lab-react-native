import React from 'react';
import { View,Text, StyleSheet, TouchableOpacity } from "react-native";
import Home from './components/Home'

export default function App() {
    return (
      <View style={styles.container}>
        <Home/>
        <TouchableOpacity style={styles.button}>
            <Text> Go </Text>
        </TouchableOpacity>
      </View>
      );
}



const styles = StyleSheet.create({
  container: {
    flex: 1, 
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
  },
  button: {
    width: 60, 
    height: 60,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: '#00A5AD',
}, 
})