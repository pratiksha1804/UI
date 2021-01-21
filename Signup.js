import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet,TouchableOpacity,Picker,Button,SafeAreaView,ScrollView } from 'react-native';
import { PinLock } from './pinLock'
import LoginScreen from './LoginScreen';
let userdata=null
class CreateVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirectSetpin: false,
      user_name:'',
      email_id:'',
      phone_no:'',
      birth_date:'',
      password:'',
      file_path:'',
      // userdata:[]

    };
  }
  formHandler = (event) => {
    event.preventDefault();
     this.setState({
         [event.target.name]: event.target.value
     })
     console.log(event.target.name)
 }
 createUser(){
   console.log("user is "+this.state.user_name )
   let data=null
  data=JSON.stringify({
    "user_name":this.state.user_name,
    "user_gmail":this.state.email_id,
    "user_phone":this.state.phone_no,
    "user_bdate":this.state.birth_date,
    "user_password":btoa(this.state.password),
    "user_photo_url":this.state.file_path,
    "user_pin":"1234"
});
if(data!=null){
  console.log("data is..."+data)
  userdata=data

  this.setState({
    isRedirectSetpin:true,

  })
  console.log("user data is..."+userdata)
}
 

// fetch('http://localhost:5001/api/userCreate',{
//   method: 'POST',
//   body: data
// }).then(response => {
//   console.log("response is........"+response)
//    if(response.status === 201){
//   alert("success")
// }
//   else{
//      alert("error occured")
// }

// })
 }
  render() {
    if(this.state.isRedirectSetpin) {
      console.log("here is my data "+userdata)
      return <PinLock userdata={userdata}/>
  }
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
          <View style={styles.middle}>
         
      <TextInput style={styles.TextInput} placeholder='Name' onChangeText={(value) => this.setState({user_name: value})}></TextInput>
      <TextInput name='email_id' style={styles.TextInput} placeholder='Email Id' onChangeText={(value) => this.setState({email_id: value})}></TextInput>
      <TextInput name='phone_no' style={styles.TextInput} placeholder='Phone No.' onChangeText={(value) => this.setState({phone_no: value})}></TextInput>
      <TextInput name='birth_date' style={styles.TextInput} placeholder='Birth Date' onChangeText={(value) => this.setState({birth_date: value})}></TextInput>
      <TextInput name='password' style={styles.TextInput} placeholder='Password' onChangeText={(value) => this.setState({password: value})}></TextInput>
      <TextInput style={styles.TextInput} placeholder='Confirmed Password'></TextInput>
      <TextInput name='file_path' style={styles.TextInput} placeholder='Photo Upload' onChangeText={(value) => this.setState({file_path: value})}></TextInput>
      <TouchableOpacity style={styles.button}
         onPress={() =>
          this.createUser()
        }
        >
        <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
      </SafeAreaView>
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
     scrollView: {
      backgroundColor: '#ffffff',
      marginHorizontal: 20,
    },
      middle:{
      position:'relative',
      width:'100%',
      paddingVertical:'50%',
      top:'5%',
      alignSelf:"center",
    },
     TextInput:{
      margin: 5,
      paddingLeft:5,
      height: 50,
      borderColor: 'black',
      borderWidth: 1,
      borderRadius:10,

     },
     dropdownpicker:{
     
        height: 56,
        width: 300,
        margin:5,
        borderRadius:10,
        borderColor: 'black',
        borderWidth: 1,
      },
      buttonText1:{
        textAlign:"center",
        width:150,
        height:50,
        paddingRight:10,
        borderRadius:25,
      
      },
      buttonText2:{
       textAlign:"center",
       width:150,
        height:50,
        borderRadius:25,
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
}
    })

export default CreateVendor;