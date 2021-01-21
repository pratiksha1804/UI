import React, {Component} from 'react';
import { DataTable } from 'react-native-paper';
import { Text, View,TouchableOpacity , StyleSheet} from 'react-native'
import Dashboard from '../Dashboard/MenuBar';

export default class MyComponent extends Component {
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



    render() {
        return (
            <View style={styles.table}>
                <DataTable >
                <DataTable.Header>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title numeric>Location</DataTable.Title>
                <DataTable.Title numeric>Gmail</DataTable.Title>
                <DataTable.Title numeric>Contact</DataTable.Title>
                <DataTable.Title numeric>Action</DataTable.Title>

                </DataTable.Header>
 { (this.state.dataSource.length > 0) ? this.state.dataSource.map( (dataSource, index) => {

     return(
        <DataTable.Row>
        <DataTable.Cell>{ dataSource.company_name }</DataTable.Cell>
        <DataTable.Cell>{ dataSource.company_location }</DataTable.Cell>
        <DataTable.Cell>{ dataSource.company_gmail }</DataTable.Cell>
        <DataTable.Cell>{ dataSource.company_contact }</DataTable.Cell>
        <DataTable.Cell>
        <TouchableOpacity>
                        <View style={styles.btn}>
                        <Text style={styles.btnText}>Edit</Text>
                        </View>
         </TouchableOpacity>
        </DataTable.Cell>

        </DataTable.Row>
     )
 }):<DataTable.Row><DataTable.Cell>No Data Found...</DataTable.Cell></DataTable.Row>}
                

           

                <DataTable.Pagination
                page={1}
                numberOfPages={3}
                onPageChange={page => {
                    console.log(page);
                }}
                label="1-2 of 6"
                />
             </DataTable>
            </View>
        )
    }
}
const styles= StyleSheet.create({

table:{
    width: '80%',
    padding: '5% 0 0',
    margin: 'auto',
    justifyContent:'center',
    alignItems:'center'
},
btn: 
{
     width: 55,
     height: 18,
     backgroundColor: '#1c313a',
     borderRadius: 2,
     alignContent:'center' 
},
btnText: 
  { 
      textAlign: 'center', 
      color: '#fff', 
      alignItems:'center' 
  }

});



