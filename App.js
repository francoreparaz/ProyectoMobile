import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button,Image,TouchableOpacity } from "react-native";
import { createAppContainer } from "react-navigation";
import{NavigationContainer} from "react-navigation"
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./AppScreens/WelcomeScreen";

export  function App() {
  return (
    <View>
      <Text>APP</Text>
    </View>
  );
}

const AppNavigator=createStackNavigator({
  WelcomeScreen:{
    screen:WelcomeScreen
  }
})

export default createAppContainer(AppNavigator)
