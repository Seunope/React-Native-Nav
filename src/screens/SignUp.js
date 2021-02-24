import React from 'react';
import {Button} from 'react-native';

export default ({navigation}) => (
  <>
    <Button title="Sign in" onPress={() => navigation.push('SignIn')} />
  </>
);
