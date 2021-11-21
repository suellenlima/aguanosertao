// import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
    <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor="#E76F51" />
        <View style={{ flex: 1, backgroundColor: '#E76F51' }}> 
            <Routes/>
        </View>
    </NavigationContainer>
);

export default App;