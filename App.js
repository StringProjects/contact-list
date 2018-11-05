import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import ContactList from './components/ContactList';
import ContactSearch from './components/ContactSearch';
import BottomTab from './components/BottomTab';



//type Props = {};
export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <ContactSearch/>
          <ContactList/>
        </View>
        <BottomTab/>
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
});