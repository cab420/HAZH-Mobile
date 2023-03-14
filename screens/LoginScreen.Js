import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Button, Input, Image } from "react-native-elements";                                                                                                 

//loginscreen backend here
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}> 
      <Image source={require("../assets/badge.png")} style={styles.logo}/>

        <View style={styles.inputContainer}>
            <Input 
              placeholder="Email" 
              type="email" 
              value={email} 
              onChangeText={(text) => setEmail(text)}
              />
            <Input 
              placeholder="Password" 
              secureTextEntry
              ype="password" 
              value={password} 
              onChangeText={(text) => setPassword(text)}
              />
        </View>
        <Button containerStyle={styles.Button} type="outline" title="Forgot Password?" />
        <Button onPress={() => navigation.navigate("Authenticator")} containerStyle={styles.Button} title="Login" />
        <View style={{ height: 100 }}/> 
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

//style sheet for everything on the login screen
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 10,
      backgroundColor: '#FFFFFF' //this is the background color of the login page!
    },
    inputContainer: {
      width: 300,
    },
    button: {
      width: 200,
      marginTop: 10,
    },
    logo: {
      width:200,
      height: 270,
      marginBottom: 80
    },
});