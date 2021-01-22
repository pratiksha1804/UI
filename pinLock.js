import React, { Component } from 'react'
import { Text, View ,StyleSheet,TouchableOpacity,Button} from 'react-native'
import { concat } from 'react-native-reanimated';
import Dashboard from './components/Dashboard/MenuBar';
import LoginScreen from './LoginScreen';
let code=''
export class PinLock extends Component {
    constructor(props){
        super(props);
        this.state={
            passcode:['','','',''],
            code:'',
            isRedirectDashboard:false,
            isredirectToLogin:false,
            userdata:JSON.parse(this.props.userdata)
        }
        console.log("o pin lock data is..."+this.state.userdata.user_name)
    }
    _onPressNumber= num =>{
        console.log(num)
        let tempcode=this.state.passcode;
        for(var i=0;i<tempcode.length;i++){
            if(tempcode[i]==''){
                tempcode[i]=num;
                break;
            }
            else{
                continue;
            }
        }
        this.setState({
            passcode:tempcode,
    })
    code=code+num.toString()
    console.log("code is"+code)
    }

    _onPressCancel =()=>{
        let tempcode=this.state.passcode;
        for(var i=tempcode.length-1;i>=0;i--){
            if(tempcode[i]!=''){
                tempcode[i]='';
                break;
            }
            else{
                continue;
            }
        }
        this.setState({passcode:tempcode})
    }
    createUser(){
        console.log("user is "+this.state.userdata )
        let data=null
       data=JSON.stringify({
         ...this.state.userdata,
         user_pin:code
     });
    console.log("pinlock data is..."+data)
     
     fetch('http://localhost:5001/api/userCreate',{
       method: 'POST',
       body: data
     }).then(response => {
       console.log("response is........"+response)
        if(response.status === 201){
            this.setState({
                isRedirectDashboard:true
         })
     }
       else{
          alert("error occured")
     }
     
     })
      }

      redirectToLogin = ()=>{
          this.setState({
              isredirectToLogin:true
          })
      }

    render() {
        if(this.state.isRedirectDashboard) {
            return <Dashboard/>
        }
        if(this.state.isredirectToLogin){
            return <LoginScreen/>
        }
        let numbers =[
            {id:1 },
            {id:2 },
            {id:3 },
            {id:4 },
            {id:5 },
            {id:6 },
            {id:7 },
            {id:8 },
            {id:9 },
            {id:0 }
        ]

        return (
            <View style={styles.container}>
                <View>
                <Text style={styles.passcodeText}> Enter Passcode </Text>
                </View>
                <View style={styles.codecontainer}>
                    {
                        this.state.passcode.map(p=>{
                            let style = p!=''?styles.code2:styles.code1;
                            return <View style={style}></View>
                        })
                    }
                    {/* <View style={styles.code1}></View>
                    <View style={styles.code1}></View>
                    <View style={styles.code1}></View>
                    <View style={styles.code1}></View>

 */}

                </View>
           <View style={{alignItems:'center',justifyContent:'center'}}>
               <View style={styles.numberContainer}>
                   {
                       numbers.map(num=>{
                           return( <TouchableOpacity style={styles.number} key={num.id}
                           onPress={()=>this._onPressNumber(num.id)}
                           >
                            <Text style={styles.numberText}>{num.id}</Text>
                        </TouchableOpacity>)
                       })
                   }
                
               </View>
           </View>
           <View style={{ flexDirection: 'row',paddingTop:20,justifyContent:"center" }}>
            <View style={styles.buttonText1}>
            <TouchableOpacity
                    onPress={() => this.redirectToLogin}
            >
            <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
            
            </View>
            <View style={styles.buttonText2}>
            <TouchableOpacity
         onPress={() =>
          this.createUser()
        }
        >
        <Text style={styles.buttonText}>Confirm</Text>
        </TouchableOpacity>
            </View>

            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex:1,
        justifyContent:'center',
        alignItems:'center'
     },
     passcodeText:{
         fontFamily:'SFProDisplay-regular',
         fontSize:22,
         letterSpacing:0.34,
         lineHeight:25

     },
     codecontainer:{
         marginTop:12,
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'space-between'
     },
     code1:{
         width:13,
         height:13,
         borderRadius:13,
         borderWidth:1,
         borderColor:'black',

     },
     code2:{
        width:13,
        height:13,
        borderRadius:13,
       backgroundColor:'black'
    },
     number:{
         width:75,
         height:75,
         borderRadius:75,
         margin:8,
         backgroundColor:'#455a64',
         justifyContent:'center',
         alignItems:'center'
     },
     numberContainer:{
         flexDirection:'row',
         flexWrap:'wrap',
         marginTop:50,
         width:282,
         height:348,
         alignItems:'center',
         justifyContent:'center'
     },
     numberText:{
         fontFamily:'SFProDisplay-Regular',
         fontSize:36,
         color:'#ffffff',
         letterSpacing:0,
         textAlign:'center'
     },
     button:{
        width:150,
        height:50,
        backgroundColor:'#1c313a',
        borderRadius:25,
        marginVertical:10,
        paddingVertical:16
    
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
    });
export default PinLock