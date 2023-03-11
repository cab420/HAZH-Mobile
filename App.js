import "react-native-gesture-handler";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";

//this stack holds all the screens you swipe through on the app
//const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>test</Text>
          <StatusBar style="auto" />
      </View>
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
//npm install react-native-reanimated
