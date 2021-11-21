import React from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import Welcome from '../pages/welcome'

const Auth = createNativeStackNavigator();

const AuthRoutes: React.FC = () => (
    <Auth.Navigator 
        screenOptions={{
            headerShown: false,
            // headerTintColor: '#FFF',
            // headerStyle: {
            //     backgroundColor: '#E76F51'
            // },
            contentStyle: { backgroundColor: '#FFCC61' }
        }}
    >
        <Auth.Screen name="Welcome" component={Welcome} />
    </Auth.Navigator>
);

export default AuthRoutes;