import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  FlatList
} from "react-native";
import { Icon } from 'native-base';

//type Props = {};
export default class ContactDetail extends Component {
  render() {
    const { img, name, tlf } = this.props.navigation.state.params;
    return (
      <View style={{ height: "100%", backgroundColor: "white" }}>
        <Image
          style={{ width: "100%", height: 300 }}
          source={{ uri: img }}
          resizeMode="cover"
        />
        <View style={[styles.lineText, styles.aling ]}>
          <Text style={styles.TextContent}>
            {name}
          </Text>
        </View>
        <View style={styles.lineText}>
          <Text>
            {tlf}
          </Text>
          <Icon name='ios-phone-portrait' style={{fontSize: 24, color: 'lightgray'}} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    //backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  lineText: {
    borderBottomWidth: 1, 
    borderBottomColor: 'lightgray',
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  TextContent: {
    fontSize: 30,
    textAlign: "center",
    justifyContent: "center",
  }, 
  aling: {
    justifyContent: "center",
  }
});
