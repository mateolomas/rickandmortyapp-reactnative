import React, { useContext } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CharacterList from '../screens/CharacterList';
import { DrawerBasic } from './DrawerBasic';
import WelcomeScreen from '../screens/WelcomeScreen';
import Home from '../screens/Home';
import { AuthContext } from '../context/AuthContext';

const Stack = createNativeStackNavigator();



export const StackBasic = () => {

    const { authState } = useContext(AuthContext);

    return (
        <Stack.Navigator>
            {
                !authState.isLoggedIn ? (
                    <Stack.Screen
                        options={{
                            headerShown: false,
                        }}
                        name="WelcomeScreen"
                        component={WelcomeScreen}
                    />
                ) : (
                    <Stack.Screen
                        options={{
                            headerShown: false,
                        }}
                        name="Drawer" component={DrawerBasic} />
                )
            }






        </Stack.Navigator>
    );
};
