import React from 'react';
import {Button} from 'react-native';

export default ({navigation}) => (
  <>
    <Button title="Sign In" onPress={() => alert('To do!')} />
    <Button title="Sign Up" onPress={() => navigation.push('SignUp')} />
  </>
);
