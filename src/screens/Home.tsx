import React from 'react'
import { View, Text, Image, TouchableOpacity, Button } from 'react-native'

const logo = require('../assets/image/logo.png')

const Home = () => {
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
            <Text
                style={{
                    fontSize: 20,
                }}
            >Desliza a la derecha para iniciar...</Text>

        </View>
    )
}

export default Home