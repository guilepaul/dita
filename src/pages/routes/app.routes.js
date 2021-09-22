import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../Home';
import {Checkout} from '../Checkout';

const {Navigator, Screen} = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator initialRouteName="Checkout">
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Checkout"
        component={Checkout}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default AppRoutes;
