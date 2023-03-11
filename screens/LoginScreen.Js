import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Input, Image } from "react-native-elements";                                                                                                 


const LoginScreen = () => {
  return (
    <View>
      <Image source={require("../assets/qpslogo.png")} style={{width: 200, height:270}}/>

        <View style={styles.inputContainer}>
            <Input placeholder="Email" autoFocus type="email"/>
            <Input placeholder="Password" secureTextEntry type="password"/>
        </View>
    </View>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
    inputContainer:{

    }
});