import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Icon} from 'native-base';

import ContactsList from '../screens/ContactsList';
import ContactsDetails from '../screens/ContactDetails';
import ActionsList from '../screens/ActionsList';
import ActionsDetails from '../screens/ActionDetails';
import Settings from '../screens/Settings';

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
  <AppTabs.Navigator
    tabBarOptions={{
      activeTintColor: 'red',
      activeBackgroundColor: 'blue',
    }}>
    <AppTabs.Screen
      name="Contacts"
      component={ContactsStackScreen}
      options={{
        tabBarIcon: (props) => (
          <Icon name="ios-people" size={props.size} color={props.color} />
        ),
      }}
    />
    <AppTabs.Screen
      name="Actions"
      component={ActionsStackScreen}
      options={{
        tabBarIcon: () => <Icon name="ios-checkmark-circle-outline" />,
      }}
    />
  </AppTabs.Navigator>
);

const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
  <AppDrawer.Navigator drawerType="slide">
    <AppDrawer.Screen name="Tabs" component={AppTabsScreen} />
    <AppDrawer.Screen name="Settings" component={Settings} />
  </AppDrawer.Navigator>
);

export default () => {
  return (
    <NavigationContainer>
      <AppDrawerScreen />
    </NavigationContainer>
  );
};

//return <ContactsList />;
