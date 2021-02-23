import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ContactsList from '../screens/ContactsList';
import ContactsDetails from '../screens/ContactDetails';
import ActionsList from '../screens/ActionsList';
import ActionsDetails from '../screens/ActionDetails';

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

const ActionStack = createStackNavigator();
const ActionsStackScreen = () => (
  <ActionStack.Navigator>
    <ActionStack.Screen name="ActionList" component={ActionsList} />
    <ActionStack.Screen name="ActionDetails" component={ActionsDetails} />
  </ActionStack.Navigator>
);

const AppTabs = createBottomTabNavigator();
const AppTabsScreen = () => (
  <AppTabs.Navigator>
    <AppTabs.Screen name="Contacts" component={ContactsStackScreen} />
    <AppTabs.Screen name="Actions" component={ActionsStackScreen} />
  </AppTabs.Navigator>
);

export default () => {
  return (
    <NavigationContainer>
      <AppTabsScreen />
      {/* <ContactsStackScreen /> */}
    </NavigationContainer>
  );
};

//return <ContactsList />;
