import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";
import AuthScreen from "./screens/AuthScreen";
import HomeScreen from "./screens/HomeScreen";

//this stack holds all the screens you swipe through on the app
const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: "#2C6BED"},
  headerTitleStyle: {color: "white"},
  headerTintColor: "white",
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen name="Login" component = {LoginScreen} />
      <Stack.Screen name="Authenticator" component = {AuthScreen} />
      <Stack.Screen name="Home" component = {HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3BC6D7',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//when you clone this, open a terminal and make sure your in this folder example C:\User\GitHub\HAZH-Mobile"
//then type: npm install
//this will download all the packages and libraries for this
//then in your phone, go to app store and download "Expo Go"
//once thats done, in the terminal here type: npm start
//a QR code should come up
//scan QR code with your phone to see the app on your phone
//when it crashes, hold three fingers on the screen and click reload from the menu that pops up

//watch this vid ive linked the current time, he explains hwo to set up expo and how it works on iOS and android, basically all the stuff i just said above
//https://youtu.be/VozPNrt-LfE?t=1567

//this other video is what im using to create the login and register functions and how they look
//https://youtu.be/AkEnidfZnCU?t=41594

//asdasd
// :)
// hello

//test
//stuff to install if you need to. but, the npm install command should just grab it all

//npm install @react-navigation/native-stack
//npx expo install react-native-screens react-native-safe-area-context
//npm install @react-navigation/native   
//npx expo install react-native-gesture-handler
//npx expo install react-native-reanimated@~2.14.4
//npm install react-native-elements