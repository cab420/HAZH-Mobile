import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "./screens/LoginScreen";

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
      <Stack.Screen
       name="Login" component = {LoginScreen} />
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

//stuff to install

//npm install @react-navigation/native-stack
//npx expo install react-native-screens react-native-safe-area-context
//npm install @react-navigation/native   
//npx expo install react-native-gesture-handler
//npx expo install react-native-reanimated@~2.14.4
//npm install react-native-elements