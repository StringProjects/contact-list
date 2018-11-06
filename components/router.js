
import { StackNavigator } from 'react-navigation';
import ContactDetail from './ContactDetail';
import ContactList from './ContactList';

export const FeedStack = StackNavigator({
  ContactList: {
    screen: ContactList,
    navigationOptions: {
      title: 'CONTACTLIST ',
    },
  },
  ContactDetail: {
    screen: ContactDetail,
    // navigationOptions: ({ navigation }) => ({
    //   title: `${navigation.state.params.name.first.toUpperCase()} ${navigation.state.params.name.last.toUpperCase()}`,
    // }),
  },
});