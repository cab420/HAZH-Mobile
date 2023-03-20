import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, {useContext, useState} from 'react'
import { Button, Input, Image } from "react-native-elements";
import { AuthContext } from '../context/AuthContext';



//loginscreen backend here
const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const {isLoading, login} = useContext(AuthContext);
  
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}> 
      <Image source={require("../assets/badge.png")} style={styles.logo}/>

        <View style={styles.inputContainer}>
            <Input 
              placeholder="Enter Email" 
              type="email" 
              value={email} 
              onChangeText={(text) => setEmail(text)}
              />
            <Input 
              placeholder="Enter Password" 
              secureTextEntry
              type="password" 
              value={password} 
              onChangeText={(text) => setPassword(text)}
              />
        </View>
        <Button containerStyle={styles.button1} type="outline" title="Forgot Password?" />
        <Button title="Login"
            onPress={() => {
            login(email, password);
        }}
        containerStyle={styles.button2}
        />
        
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
    button1: {
      width: 200,
      marginTop: 10,
    },
    button2: {
      width: 100,
      marginTop: 30,
    },
    logo: {
      width:200,
      height: 270,
      marginBottom: 80
    },
});
