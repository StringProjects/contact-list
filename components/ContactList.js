import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class ContactList extends Component {
 


  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.props.list}
          renderItem={({item}) =>

          <TouchableOpacity
            style={styles.containerItem}
            onPress = {() => {
              this.props.navigation.navigate('ContactDetail', {...item});
            }}
          >
             <Image
              style={styles.itemImage}
              source={{uri: item.img}}
          />
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
          }
          renderSectionHeader={({section}) => 
            <Text style={styles.sectionHeader}>{section.title}</Text>
          }
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: state.phone.phoneList
  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ContactList)

const styles = StyleSheet.create({
  container: {
    width: 350,
    flex: 1,
    paddingTop: 22
  },
  containerItem: {
    padding: 10, 
    flexDirection: 'row',
  },
  itemImage: {
    width: 40, 
    height: 40, 
    borderRadius: 20
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: '#deeefc',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})


