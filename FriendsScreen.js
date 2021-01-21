import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class FriendsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add friends here!</Text>

        <Button
          title="Back to Login"
          onPress={() =>
            this.props.navigation.navigate('Login')
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
export default FriendsScreen;
