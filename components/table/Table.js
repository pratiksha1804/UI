import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, FlatList} from 'react-native';
// import { Table, Button } from 'reactstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
 
export default class VendorTable extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      dataSource:[]
     };
   }
 
  componentDidMount(){
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
        return (
          <View style={styles.container}s>
            <table borderStyle={{borderColor: 'transparent'}}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Location</th>
                  <th>Gmail</th>
                  <th>Contact</th>
                
                </tr>
              </thead>
              <tbody>
                { (this.state.dataSource.length > 0) ? this.state.dataSource.map( (dataSource, index) => {
                   return (
                    <tr key={ index }>
                      <td>{ dataSource.company_name }</td>
                      <td>{ dataSource.company_location }</td>
                      <td>{ dataSource.company_gmail}</td>
                      <td>{ dataSource.company_contact }</td>
                      
                    </tr>
                  )
                 }) : <tr><td colSpan="5">Loading...</td></tr> }
              </tbody> 
            </table>
            </View>
          );
        }
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 5 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 55, height: 18, backgroundColor: '#1c313a',  borderRadius: 2, margin: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});