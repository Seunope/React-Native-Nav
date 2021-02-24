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
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import Loading from '../screens/Loading';
import Modal from '../screens/Modal';

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
    initialRouteName="Actions"
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

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator drawerType="slide">
    <AuthStack.Screen name="SignIn " component={SignIn} />
    <AuthStack.Screen name="SignUp" component={SignUp} />
  </AuthStack.Navigator>
);

const RootStack = createStackNavigator();
const RootStackScreen = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);

    setTimeout(() => {
      setUser({});
    }, 1000);
  }, []);

  return (
    <RootStack.Navigator headerMode="none" mode="modal">
      {isLoading ? (
        <RootStack.Screen name="Loading" component={Loading} />
      ) : user ? (
        <RootStack.Screen name="AppDrawerScreen" component={AppDrawerScreen} />
      ) : (
        <RootStack.Screen name="AuthStackScreen" component={AuthStackScreen} />
      )}
      <RootStack.Screen name="Modal" component={Modal} />

    </RootStack.Navigator>
  );
};

export default () => {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
};

//return <ContactsList />;
