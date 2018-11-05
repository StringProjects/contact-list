import React, { Component } from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { Icon } from 'native-base';

export default class ContactSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Buscar' };
  }

  render() {
    return (
      <TextInput
        style={styles.container}
        onChangeText={(text) => this.setState({text})}
        placeholder='Buscar'
        placeholderTextColor='#000'
      >
        <Icon name='md-search' style={{fontSize: 20, color: '#5b99d8'}} />
      </TextInput>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 40, 
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
    marginTop: 80,
    paddingLeft: 10,
    paddingRight: 10,
  },
});