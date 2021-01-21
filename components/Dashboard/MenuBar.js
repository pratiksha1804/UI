import React, { Component } from 'react';
import { View, Text,TextInput,StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import { Platform } from 'react-native';
import MyComponent from '../table/DataTable';
import { TouchableOpacity } from 'react-native-gesture-handler';

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          visible:false,
          setVisible:false
         };
       }

       openMenu = () => {
        this.setState({
            visible : true
        });
    }

    closeMenu = () => {
        this.setState({
            visible : false
        });
    }

    render() { 
        // const [visible, setVisible] = React.useState(false);

        return (
            <View>
          <Appbar.Header>
        <Appbar.Content title="Kanse And Company" />
            {/* <Appbar.Action icon="magnify" onPress={() => {}} /> */}
            <Appbar.Action icon={MORE_ICON} onPress={this.openMenu} />
            </Appbar.Header>

            <Provider>
                <View>
                <Menu
                    visible={this.state.visible}
                    onDismiss={this.closeMenu}
                    anchor={{ x: 20, y: 100 }}
                    >
                   
                    <TouchableOpacity style={styles.button}>
                         <Menu.Item title="Vendor" 
                          onPress={() =>
                            this.props.navigation.navigate('vendorTable')
                            }
                            ></Menu.Item>
                              
                    </TouchableOpacity>
                   
                    
                    <Menu.Item onPress={() => { }} title="Work Order" />
                    <Divider />
                    <Menu.Item onPress={() => { }} title="User" />
                </Menu>
                </View>
            </Provider>

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


