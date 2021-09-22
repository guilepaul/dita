import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../Home';

const {Navigator, Screen} = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default AppRoutes;
