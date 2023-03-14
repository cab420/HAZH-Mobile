import { KeyboardAvoidingView, StyleSheet, Text, View, TextInput } from 'react-native'
import React, {useState} from 'react'
import { Button, Input, Image } from "react-native-elements";       

const AuthScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <View style={styles.inputContainer}>

      <Text style = {styles.msg}>Please enter the code sent to the Microsoft Authenticator App</Text>
      <TextInput style={styles.input}></TextInput>
      <Button onPress={() => navigation.navigate("Home")} containerStyle={styles.button} title="Continue" />

    </View>
    </KeyboardAvoidingView>
  )
}

export default AuthScreen

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
    width: 300,
    marginTop: 30,
  },
  logo: {
    width:200,
    height: 250
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  msg: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    height: 100,
  },
});