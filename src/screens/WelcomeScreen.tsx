import React from 'react'
import { View, Text, Image, TouchableOpacity, Button } from 'react-native'
import { AuthContext } from '../context/AuthContext';

const logo = require('../assets/image/logo.png')

const WelcomeScreen = () => {



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
                        <TouchableOpacity>
                            <Button title='Ingresar con usuario ' onPress={() => signInWithUser("Rick")} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Button title='Ingresar anonimamente' onPress={signInWithoutUser} />
                        </TouchableOpacity>
                    </>
                ) : <TouchableOpacity>
                    <Button title='Cerrar sesion' onPress={signOut} />
                </TouchableOpacity>

            }




        </View>
    )
}

export default WelcomeScreen