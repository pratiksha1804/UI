import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, TextInput, Button } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component'; 
export default class VendorDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Company Name', 'Company Location', 'GST', 'Gmail', 'Action'],
      tableData: [
        ['1', '2', '3', '4', '6'],
        ['a', 'b', 'c', 'd', 'f'],
        ['Shahoo Industry', 'Pune', 'ABC', 'shahoodeepak@gmail.com', 'f'],
      ],
      textInput : []      
    }
  }
 
  
  removeTextInput = (index) => {
    let tableData = this.state.tableData;
    tableData.splice(index,1);
    this.setState({ tableData });
  }

  addTextInput = (index) => {
    let tableData = this.state.tableData;
    tableData.push(<Table border= '2'><tr><td>1</td><td><TextInput style={styles.textInput}
      onChangeText={(text) => this.addValues(text, index)} /></td>
      </tr></Table>);
    this.setState({ tableData });
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
 
  render() {
    const state = this.state;
    const element = (data, index) => ([
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Edit</Text>
        </View>
      </TouchableOpacity>,
      <TouchableOpacity onPress={() => this.removeTextInput(index)}>
      <View style={styles.btn}>
      <Text style={styles.btnText}>Delete</Text>
      </View>
    </TouchableOpacity>
  ]
    );

    return (
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 4 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
        <TouchableOpacity  onPress={() =>
          this.props.navigation.navigate('createVendor')}>
            <View style={styles.btn}>
              <Text style={styles.btnText}>Add</Text>
            </View>
          </TouchableOpacity>
          {/* {this.state.tableData.map((value) => {
          return value
        })} */}
    </View>
    )
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