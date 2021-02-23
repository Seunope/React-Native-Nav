import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderTitle} from '@react-navigation/stack';

import ContactsList from '../screens/ContactsList';
import ContactsDetails from '../screens/ContactDetails';

const ContactsStack = createStackNavigator();
const ContactsStackScreen = () => {
  return (
    <ContactsStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: 'gray'},
      }}>
      <ContactsStack.Screen
        name="ContactsList"
        component={ContactsList}
        options={{headerTitle: 'Contacts'}}
      />
      <ContactsStack.Screen
        name="ContactsDetails"
        component={ContactsDetails}
        options={({route}) => {
          return {
            headerTitle: `${route.params.contact.name.first} ${route.params.contact.name.last}`,
            headerStyle: {backgroundColor: 'green'},
          };
        }}
      />
    </ContactsStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <ContactsStackScreen />
    </NavigationContainer>
  );
};

//return <ContactsList />;
