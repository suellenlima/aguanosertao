import React from 'react';
import { View, StatusBar } from 'react-native';

const App: React.FC = () => (
    <>
        <StatusBar barStyle="light-content" backgroundColor="#E76F51" />
        <View style={{ flex: 1, backgroundColor: '#E76F51' }} />
    </>
);

export default App;