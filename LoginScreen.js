import React from 'react';
import { StyleSheet, Text, View, Button,TextInput,TouchableOpacity,Image } from 'react-native';
import Logo from './components/Logo';

class LoginScreen extends React.Component {
  render() {
    return (
       
        <View style={styles.container}>
        <Image
        style={{width:50,height:40}}
        source={require('./Images/logo.png')}
        />
    <TextInput style={styles.inputBox} 
    placeholder='Email'
    ></TextInput>
    <TextInput style={styles.inputBox} 
    placeholder='Password'
    secureTextEntry={true}>
  </TextInput>
       
        <TouchableOpacity style={styles.button}
         onPress={() =>
          this.props.navigation.navigate('Dashboard')
        }
        >
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View>
        <Text style={styles.signupText}>Don't have an account yet?
        <TouchableOpacity><Text style={styles.signupButton}  
        onPress={() =>
            this.props.navigation.navigate('Signup')
          }> Signup</Text></TouchableOpacity>
        </Text>
     
          </View>
    
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    position:"relative"
 },
     inputBox:{
      width:300,
      height:50,
      backgroundColor:'#ffffff',
      borderRadius:25,
      marginVertical:10,
      paddingVertical:16,
      paddingHorizontal:16,
      borderColor:'black',
      borderWidth:1,
      // border: '1px solid #ccc',
      borderRadius: 4
      //  underlineColorAndroid:'rgba(0,0,0,0)'

   },
     button:{
        width:300,
        height:50,
        backgroundColor:'#24A0ED',
        marginVertical:10,
        paddingVertical:16

     },
     buttonText:{
         fontSize:16,
         fontWeight:'500',
         color:'#ffffff',
         textAlign:'center'
     },
     signupTextCont:{
        flex:1,
        alignItems:'flex-end',
        justifyContent:'center',
        paddingVertical:16,
        flexDirection:'row'
     },
     signupText:{
         color:'black',
         fontSize:16,
     },
     signupButton:{
         color:'blue',
         fontSize:16,
         fontWeight:'500'
     },
     logoText:{
        marginVertical:15,
        fontSize:18,
        color:'blue'
    }
   
  });

export default LoginScreen;