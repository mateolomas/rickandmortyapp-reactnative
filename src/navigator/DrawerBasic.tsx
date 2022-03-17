import React from 'react';
import {
    createDrawerNavigator,
    DrawerContentComponentProps,
    DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import WelcomeScreen from '../screens/WelcomeScreen';
import CharacterList from '../screens/CharacterList';
import Home from '../screens/Home';
import { AuthContext, AuthState } from '../context/AuthContext';

const profileImage = require('../assets/image/logo.png');
const Drawer = createDrawerNavigator();



export const DrawerBasic = () => {
    return (
        <Drawer.Navigator drawerContent={props => <MenuInterno {...props} />}>
            <Drawer.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Drawer.Screen name="CharacterList" component={CharacterList} />
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    );
};

const MenuInterno = ({
    navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {

    const { authState } = React.useContext(AuthContext);




    return (
        <DrawerContentScrollView style={{ backgroundColor: '#263238' }}>
            {/* Parte del avatar */}

            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://medgoldresources.com/wp-content/uploads/2018/02/avatar-placeholder.gif',
                    }}
                    style={styles.avatar}
                />
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            fontSize: 20,
                            color: 'white',
                        }}>
                        Bienvenido
                    </Text>

                    <Text
                        style={{
                            fontSize: 18,
                            color: 'blue',
                        }}>
                        {authState.username}
                    </Text>
                </View>
            </View>

            {/* Opciones de menú */}
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={{
                        ...styles.menuBoton,
                        flexDirection: 'row',
                    }}
                    onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.menuTexto}> Welcome</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ ...styles.menuBoton, flexDirection: 'row' }}
                    onPress={() => navigation.navigate('CharacterList')}>
                    <Text style={styles.menuTexto}>Character List</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{ ...styles.menuBoton, flexDirection: 'row' }}
                    onPress={() => navigation.navigate('WelcomeScreen')}>

                    {
                        !authState.isLoggedIn ? <Text style={styles.menuTexto}>Ingresar</Text> : <Text style={styles.menuTexto}>Salir</Text>
                    }

                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    avatarContainer: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 20,
    },
    menuContainer: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 20,
    },
    menuBoton: {
        padding: 10,

        justifyContent: 'center',
    },
    menuTexto: {
        fontSize: 20,
        color: 'white',
    },
});
