
import React from 'react';
import { Text, useColorScheme, View, ScrollView } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerBasic } from './src/navigator/DrawerBasic';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <DrawerBasic />
        {/* <WelcomeScreen /> */}
      </AppState>
    </NavigationContainer>
  );
};


const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App;
