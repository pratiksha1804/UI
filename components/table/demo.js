import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
import { Table, Row, Rows ,Cols} from 'react-native-table-component';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
 
export default class Demo extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['comapany name','company location','company gmail','company contact'],
      dataSource:[],
      data:[]
     };
   }
 
  componentWillMount(){
   this.getVendorList()
    }
    getVendorList = () => {
      fetch('http://localhost:5002/api/get_all_vendors').then(res => res.json())
          .then((data) => {
           this.setState(
               { 
                   dataSource: data.data
              })
              console.log("vendor list is..............")
  
          console.log(this.state.vendorlist)
     })
  }
    render(){
      if(this.state.vendorlist!=null)
      {this.state.vendorlist.map((c, idx) =>{
           data.push({
              // clickEvent:()=>this.editClicked(this.state.data[idx]._id),
              "company_name": this.state.vendorlist[idx].company_name,
              "company_location":this.state.vendorlist[idx].company_location,
             
              }
              )
         
              })
              }
     return(
      <View style={{padding:10}}>
   
       <FlatList
    data={ this.state.dataSource }
    renderItem={({item}) => {
        return (
          <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Text>{item.company_name}</Text>
        <Text>{item.company_location}</Text>
        <Text>{item.company_gmail}</Text>
        <Text>{item.company_contact}</Text> 
        </Table>
        )
    }}  
   keyExtractor={(item, index) => index}
/>
      
     </View>
     )}
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  text: { margin: 6 }
});