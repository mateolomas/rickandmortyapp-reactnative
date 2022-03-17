import { useNavigation } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react'
import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext';

const logo = require('../assets/image/logo.png')

interface Props extends NativeStackScreenProps<any, any> { };

const WelcomeScreen = ({ navigation }: Props) => {


    const { signInWithUser, signOut, signInWithoutUser, authState } = React.useContext(AuthContext);




    return (

        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'

        }}>
            <Text style={{
                fontSize: 29,
                fontWeight: 'bold',
                color: '#000',
                textAlign: 'center'
            }}>Welcome to the Rick and Morty app!</Text>
            <Image source={logo} style={
                {
                    width: 200,
                    height: 200
                }
            } />
            {
                !authState.isLoggedIn ? (
                    <>
                        <TouchableOpacity

                        >
                            <Button title='Ingresar con usuario ' onPress={() => signInWithUser('Rick')} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Button title='Ingresar anonimamente' onPress={() => signInWithoutUser()} />
                        </TouchableOpacity>
                    </>
                ) : <TouchableOpacity>

                </TouchableOpacity>

            }

        </View>
    )
}

export default WelcomeScreen