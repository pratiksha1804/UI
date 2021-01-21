import React from 'react';
import { StyleSheet,View, Text,Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Logo() {
return(
    <View style={styles.container}>
    <Image
    style={{width:50,height:70}}
    source={require('../Images/logo.png')}
    />
    <Text style={styles.logoText}>Welcome to my app</Text>
    </View>
    
)
}
const styles = StyleSheet.create({
    container: {
        // flexGrow:1,
        justifyContent:'center',
        alignItems:'center'
     },
     logoText:{
         marginVertical:15,
         fontSize:18,
         color:'blue'
     }
  });
