import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View, Image } from 'react-native';
// import { createStackNavigator } from 'react-navigation';
import ContactDetail from './ContactDetail';

// const Route = createStackNavigator({
//   Profile: { screen: ContactDetail },
// });


export default class ContactList extends Component {
  // static navigationOptions = {
  //   title: 'Profile',
  // };
  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {
              title: 'B', 
              data: [
                {
                  img: 'https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fpeopledotcom.files.wordpress.com%2F2017%2F04%2Fbrad-pitt-1.jpg%3Fw%3D450&w=700&c=sc&poi=face&q=85', 
                  name:'Brad Pitt'
                }
              ]
            },
            {
              title: 'C', 
              data: [
                {
                  img: 'https://media.wmagazine.com/photos/5a6276541f0ccf26968b8269/4:3/w_1536/1316.w.MS.royals.image2.jpg', 
                  name:'Chris Evans'
                },
                {
                  img: 'https://files.rcnradio.com/public/styles/image_834x569/public/2018-08/chrishemsworth1_1_0.jpg?itok=aC1thlFk', 
                  name:'Chris Hemsworth'
                },
                {
                  img: 'https://s2.glbimg.com/wqj7SaZaybTctAt-VxiW31w0RAs=/620x620/top/e.glbimg.com/og/ed/f/original/2017/01/16/chris-pratt-february-vf-02-17-02.jpg', 
                  name:'Chris Pratt'
                },
              ]
            },
            {
              title: 'D', 
              data: [
                {
                  img: 'http://as01.epimg.net/deporteyvida/imagenes/2018/10/05/portada/1538746122_339970_1538746267_noticia_normal.jpg', 
                  name:'Daniel Craigh'
                },
              ]
            },
            {
              title: 'H', 
              data: [
                {
                  img: 'http://img.europapress.es/fotoweb/fotonoticia_20160201120627_1280.jpg', 
                  name:'Hugh Jackman (Wolverine)'
                },
              ]
            },
            {
              title: 'J', 
              data: [
                {
                  img: 'http://www.kozmica.com/wp-content/imagenes/judelawenenemigoalasecho.jpg', 
                  name:'Jude Law'
                },
              ]
            },
            {
              title: 'L', 
              data: [
                {
                  img: 'https://i.pinimg.com/originals/d9/9d/56/d99d5658cba5d545a404e58b66ddcda1.jpg', 
                  name:'Liam Hemsworth'
                },
              ]
            },
            {
              title: 'M', 
              data: [
                {
                  img: 'https://i.pinimg.com/originals/55/c1/c2/55c1c20efe1421659654cf108b8ea1c5.jpg', 
                  name:'Miguel Ángel Silvestre'
                },
                {
                  img: 'http://i0.wp.com/blog.only-apartments.es/wp-content/uploads/2014/11/michael-fassbender-nueva-york.jpg?resize=500%2C750', 
                  name:'Michael Fassbender'
                },
              ]
            },
            {
              title: 'T', 
              data: [
                {
                  img: 'https://media.vanityfair.com/photos/545f7cbfcb308b5575a48eef/master/w_600,h_720,c_limit/image.jpg', 
                  name:'Theo James'
                },
              ]
            },
          ]}
          renderItem={({item}) =>
          <View 
            style={styles.containerItem}
            // onPress={() =>
            //   navigate('Profile', { name: 'Jane' })
            // }
          >
             <Image
              style={styles.itemImage}
              source={{uri: item.img}}
          />
            <Text style={styles.item}>{item.name}</Text>
          </View>
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


