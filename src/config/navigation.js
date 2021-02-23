import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ContactsList from '../screens/ContactsList';
import ContactsDetails from '../screens/ContactDetails';

const ContactsStack = createStackNavigator();
const ContactsStackScreen = () => {
  return (
    <ContactsStack.Navigator>
      <ContactsStack.Screen name="ContactsList" component={ContactsList} />
      <ContactsStack.Screen
        name="ContactsDetails"
        component={ContactsDetails}
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
