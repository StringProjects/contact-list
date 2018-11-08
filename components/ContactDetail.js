import React, {Component} from 'react';
import {Platform, StyleSheet, Text, Image, View} from 'react-native';


//type Props = {};
export default class ContactDetail extends Component {
  render() {
    const {img , name , tlf} = this.props.navigation.state.params;
    return (
      <View>
          
          <Image
          style={{width: '100%', height: 250}}
          source={{uri: img}}
          />
      <Text>
        {name}
        {tlf}
      </Text>
      </View>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});