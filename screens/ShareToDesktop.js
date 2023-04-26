import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, {useState, useContext} from 'react'
import { Button, Input, Image } from "react-native-elements";    
import { AuthContext } from '../context/AuthContext';
import { startRecording } from '../components/ScreenShare';
import {ImageBackground} from 'react-native'; // for background image


const ShareToDesktop = ({ navigation }) => {
  
    const localImage = require('../assets/greyscaleQPSlogo.png'); // for background image

    
  
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ImageBackground source={localImage} style={styles.image}>
  

          <Text style = {styles.msg}>Would you like to connect to Manager?</Text>
          <Text></Text>
          <Text></Text>
          <Video width = "700" height = "400" controls></Video>
  
          
          
  
        </ImageBackground>
      </KeyboardAvoidingView>
    )
}

export default ShareToDesktop

// <Button onPress={() => navigation.navigate("Home")} 
// containerStyle={styles.button} title="Return Home" />

//style sheet for different things on share to desktop screen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
    },
    inputContainer: {
      width: 300,
      //flex: null,
    },
    button: {
      //width: 300,
      marginBottom: 20,
    },
    //input: {
      //height: 40,
      //margin: 12,
      //borderWidth: 1,
      //padding: 10,
    //},
    msg: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
      //height: 100,
    },
  
    image: { // the background image
      //flex: 1,
      justifyContent: 'center',
      resizeMode: 'contain',
      height: 300,
      height: 300,
      width: 250,
    }

  });