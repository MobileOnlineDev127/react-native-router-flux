import React from 'react';
import {View, Text, StyleSheet} from "react-native";
import Button from "react-native-button";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: 'red',
  }
});

class Launch extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text>Launch page</Text>
        <Button onPress={()=>Actions.loginContainer({data:"Custom data"})}>Go to Login page</Button>
        <Button onPress={Actions.register}>Go to Register page</Button>
        <Button onPress={Actions.tabbar}>Go to TabBar page</Button>
      </View>
    );
  }
}

module.exports = Launch;
