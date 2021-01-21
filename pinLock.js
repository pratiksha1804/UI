import React, { Component } from 'react'
import { Text, View ,StyleSheet,TouchableOpacity,Button} from 'react-native'
export class PinLock extends Component {
    constructor(props){
        super(props);
        this.state={
            passcode:['','','','']
        }
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
        this.setState({passcode:tempcode})
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

    render() {
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
            <Button
            title="Cancel"
            onPress={() => this.props.navigation.navigate('Login')}

            />
            </View>
            <View style={styles.buttonText2}>
            <Button
            title="Confirm"
            onPress={() => this.props.navigation.navigate('createVendor')}

            />
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