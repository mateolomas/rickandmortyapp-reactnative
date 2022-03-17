import { useNavigation } from '@react-navigation/native';
import React, { useReducer, useState } from 'react';
import { createContext } from 'react';
import { authReducer } from './authReducer';

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
}

export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
};

// Usaremos para decirle a react como luce y expone el context
export interface AuthContextProps {
    authState: AuthState;
    signInWithUser: (username: string) => void;
    signOut: () => void;
    signInWithoutUser: () => void;
}

//Create context
export const AuthContext = createContext({} as AuthContextProps);

//Componente proveedor de estado

export const AuthProvider = ({ children }: any) => {

    const navigation = useNavigation();

    const [authState, dispatch] = useReducer(authReducer, authInitialState);

    const signInWithUser = (username: string) => {
        dispatch({ type: 'signInWithUser', payload: username });

    }

    const signInWithoutUser = () => {
        dispatch({ type: 'signInWithoutUser', payload: 'anonimus' });
    }

    const signOut = () => {
        dispatch({ type: 'signOut' });
    }



    return (
        <AuthContext.Provider
            value={{ authState, signInWithUser, signOut, signInWithoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

