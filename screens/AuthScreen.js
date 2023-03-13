import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Button, Input, Image } from "react-native-elements";       

const AuthScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
    <View>
      <Text>2FAScreen - placeholder</Text>
      <Button onPress={() => navigation.navigate("Home")} containerStyle={styles.Button} title="Continue" />
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
    width: 200,
    marginBottom: 200,
  },
  logo: {
    width:200,
    height: 250
  },
});