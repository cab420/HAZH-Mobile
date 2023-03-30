import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, {useState, useContext} from 'react'
import { Button, Input, Image } from "react-native-elements";    
import { AuthContext } from '../context/AuthContext';

const HomeScreen = ({ navigation }) => {
    const {isLoading, logout} = useContext(AuthContext);
    
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View>
          <Text>Home screen placeholder - functions here = share to desktop, screen records history, user</Text>
          <Button 
            onPress={() => {
              logout();
            }}
            containerStyle={styles.Button} title="Logout" 
          />
        </View>
      </KeyboardAvoidingView>
    )
  }

export default HomeScreen

//style sheet for different things on login screen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
    },
    inputContainer: {
      width: 300,
    },
    button: {
      width: 200,
      marginBottom: 200,
    },
    logo: {
      width:200,
      height: 250
    },
  });