import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet,TouchableOpacity,Picker,Button,SafeAreaView,ScrollView } from 'react-native';


export class Dashboard extends Component {
    render() {
        return (
            <View>
            <View style={styles.buttonText1}>
                
                <Button  
                title="Vendor" 
                onPress={() =>
                this.props.navigation.navigate('vendorTable')
                }> 
                </Button>
            </View>
            <View style={styles.buttonText2}>
                
                <Button  
                title="Workorder" 
                onPress={() =>
                this.props.navigation.navigate('vendorTable')
                }> 
                </Button>
            </View>
            <View style={styles.buttonText2}>
                
                <Button  
                title="Delivery Challan" 
                onPress={() =>
                this.props.navigation.navigate('createChallan')
                }> 
                </Button>
            </View>
            </View>
          
        )
    }
}
const styles = StyleSheet.create({
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
      }
});
export default Dashboard
