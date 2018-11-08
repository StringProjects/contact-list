
import { StackNavigator } from 'react-navigation';
import ContactDetail from './ContactDetail';
import ContactList from './ContactList';

export const FeedStack = StackNavigator({
  ContactList: {
    screen: ContactList,
    navigationOptions: {
      title: 'LISTA DE CONTACTOS',
    },
  },
  ContactDetail: {
    screen: ContactDetail,
    navigationOptions: {
      title: 'DETALLE',
    },
    // navigationOptions: ({ navigation }) => ({
    //  title: `${navigation.state.params.name.toUpperCase()}`,
    //   }),
  },
});