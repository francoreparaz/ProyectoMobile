import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Button,Image,ImageBackground } from "react-native";
import { Text } from 'react-native-elements';

export default function Login({navigation}) {
  // const image= {uri:"."}
  return (
    
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require("../FolderApp/assets/mar.jpg")}>
    
      <Text style={styles.text} numberOfLines={1} h4>Vendé lo que ya no necesitas</Text>
      
 
     <View style={{flex:1, marginTop:550}}>
     <View style={{margin:15,width:380}}>
      <Button
        onPress={() => alert("Home")}
        title="Login"
        color="red"
        // style={{width:200}}
        />
        </View>
        <View style={{margin:15,width:380}}>
       <Button
        title="Register"
        onPress={() => alert("Register")}/>
        
        </View>
        </View>
        
</ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    color:"white",
    alignItems:"center",
    margin:15,
    marginLeft:55,
    marginTop:50,
    
   
  },
  image:{
    flex: 1,
    width:420,
   justifyContent: "center"
  }
});
