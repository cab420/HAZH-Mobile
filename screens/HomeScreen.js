import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, {useState, useContext} from 'react'
import { Button, Input, Image } from "react-native-elements";    
import { AuthContext } from '../context/AuthContext';
import { startRecording } from '../components/ScreenShare';

const HomeScreen = ({ navigation }) => {
    const {isLoading, logout, userInfo} = useContext(AuthContext);
    
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View>
          <Text>Welcome {userInfo.name}</Text>
          <Text></Text>
          <Text></Text>
          <Button 
            onPress={() => { 
              startRecording();             
            }}
            containerStyle={styles.Button} title="Share to Desktop" 
          />
          <Text></Text>
          <Button 
            onPress={() => {
              navigation.navigate("RecordHistory")
            }}
            containerStyle={styles.Button} title="Screen Records History" 
          />
          <Text></Text>
          <Button 
            onPress={() => {
              //logout();
              navigation.navigate("Login")
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