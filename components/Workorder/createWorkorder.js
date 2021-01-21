import React,{ useState,Component } from 'react';
import { View, Text,TextInput,StyleSheet,TouchableOpacity,Picker,Button,SafeAreaView} from 'react-native';
// import DropDownPicker from 'react-native-dropdown-picker';
//import CalendarPicker from 'react-native-calendar-picker';
// import DatePicker from 'react-datepicker';
import DatePicker from 'react-native-datepicker';

class CreateWorkorder extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedValue:'',
      onValueChange:'',
      Startdate:'01-01-2021',
       Enddate:'01-01-2021'
      
      
      }
      
    

    // click=()=>{
    //   this.setState({
    //     date:'2016-05-15'
    //   })
    // }
    
  }

  render() {
    
   


    return (
        
      <View style={styles.container}>
          
         
          <Picker style={styles.dropdownpicker}
               selectedValue={this.state.company}
               onValueChange={(itemValue, itemIndex) => this.setState({company: itemValue})}
                
              >
                <Picker.Item key={-1} label={'Select Company Name'} value="first" />
                <Picker.Item key={0} label={'SAMSUNG'} value="02" />
                <Picker.Item key={1} label={'OPPO'} value="03" />
                
              </Picker>
        
         
         
          <Picker  style={styles.dropdownpicker}
                 selectedValue={this.state.Pump}
                 onValueChange={(itemValue, itemIndex) => this.setState({Pump: itemValue})}
              >
                <Picker.Item key={-1} label={'Select Pump Type'} value="first" />
                <Picker.Item key={0} label={'Mud Pump'} value="02" />
                <Picker.Item key={1} label={'Water Pump'} value="03" />
                
              </Picker>
         
          <Picker  style={styles.dropdownpicker}
              selectedValue={this.state.Power}
              onValueChange={(itemValue, itemIndex) => this.setState({Power: itemValue})}
              >
                <Picker.Item key={-1} label={'Select Power'} value="first" />
                <Picker.Item key={0} label={'50W'} value="02" />
                <Picker.Item key={1} label={'100W'} value="03" />
                
              </Picker>
          
          <Picker  style={styles.dropdownpicker}
                selectedValue={this.state.cable}
                onValueChange={(itemValue, itemIndex) => this.setState({cable: itemValue})}
              >
                <Picker.Item key={-1} label={'Select cable'} value="first" />
                <Picker.Item key={0} label={'Twisted Pair '} value="02" />
                <Picker.Item key={1} label={'Single pair'} value="03" />
                
              </Picker>
         
            
              <TextInput style={styles.inputBox} placeholder='Rate'></TextInput>
              <TextInput style={styles.inputBox} placeholder='Refered By'></TextInput>
              <View style={{ flexDirection: 'row',paddingTop:10,justifyContent:"center" }}>
  <View style={styles.datecontainer}>
       
       <DatePicker
         style={styles.datePickerStyle}
         date={this.state.Startdate} // Initial date from state
         mode="date" // The enum of date, datetime and time
         placeholder="select Startdate"
         format="DD-MM-YYYY"
         minDate="01-01-2016"
         maxDate="01-01-2050"
         confirmBtnText="Confirm"
         cancelBtnText="Cancel"
         customStyles={{
           dateIcon: {
            //  display: 'none',
             position: 'absolute',
             left: 0,
             top: 4,
             marginLeft: 0,
           },
           dateInput: {
             marginLeft: 36,
           },
         }}
         onDateChange={(date) => {
           this.setState({Startdate:date});
         }}
       />
     </View>
  
 
 <View style={styles.datecontainer}>
       
       <DatePicker
         style={styles.datePickerStyle}
         date={this.state.Enddate} // Initial date from state
         mode="date" // The enum of date, datetime and time
         placeholder="select Enddate"
         format="DD-MM-YYYY"
         minDate="01-01-2016"
         maxDate="01-01-2050"
         confirmBtnText="Confirm"
         cancelBtnText="Cancel"
         customStyles={{
           dateIcon: {
            //  display: 'none',
             position: 'absolute',
             left: 0,
             top: 4,
             marginLeft: 0,
           },
           dateInput: {
             marginLeft: 36,
           },
         }}
         onDateChange={(date) => {
           this.setState({Enddate:date});
         }}
       />
     </View>
  
 </View>

              <TextInput style={styles.inputBox} placeholder='Upload Document'></TextInput>

          
             
             


<View style={{ flexDirection: 'row',paddingTop:20,justifyContent:"center" }}>
<View style={styles.buttonText1}>
     <Button
       title="Cancel"
      
     />
   </View>
  <View style={styles.buttonText2}>
    <Button
      title="Submit"
     
   />
   </View>
  
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
   middle:{
     position:'relative',
     width:'100%',
     height:'100%',
     top:'5%',
     paddingVertical:'50%',
     alignSelf:"center",
   },
   inputBox:{
    margin: 5,
    paddingLeft:5,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:10,
    
   },
   scrollView: {
    backgroundColor: '#ffffff',
    marginHorizontal: 20,
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
  
  dropdownpicker:{
    height: 56,
    width: 300,
    margin:5,
    borderRadius:10,
    borderColor: 'black',
    borderWidth: 1,
  },
  datePickerStyle: {
    width: 150,
    marginTop: 20,
  }

  });
export default CreateWorkorder;