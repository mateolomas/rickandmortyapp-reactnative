import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useFetch } from '../hooks/useFetch';
import { Characters, SingleCharacter, Result } from '../interfaces/types';
const logo = require('../assets/image/logo.png')

const green = require('../assets/icons/green.png')
const red = require('../assets/icons/red.png')
const gray = require('../assets/icons/grey.png')


const CharacterList = () => {
    const { data, loading, error } = useFetch<Characters>(
        'https://rickandmortyapi.com/api/character/',
    );

    if (data) console.log(data?.results);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleText}>Character List</Text>
            </View>



            {loading && <Text style={styles.loading}>Loading...</Text>}
            {data?.results?.map((character: Result) => {
                return (

                    <View style={styles.card_container}>
                        <View style={styles.card}>
                            <Image
                                style={styles.card_image}
                                defaultSource={logo}
                                source={{ uri: character.image }}
                            />
                            <View style={styles.textInfo}>


                                <View style={styles.textBlock}>

                                    <Text style={styles.titleText}>{character.name}</Text>
                                    <View style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                    }}>
                                        {character.status === 'Alive' ? <Image source={green} style={styles.status} />
                                            : character.status === 'Dead' ? <Image source={red} style={styles.status} />
                                                : <Image source={gray} style={styles.status} />
                                        }

                                        <Text style={styles.text}>  {character.status} - {character.species}</Text>
                                    </View>
                                </View>
                                <View style={styles.textBlock}>
                                    <Text style={styles.subtitle}>Last know location: </Text>
                                    <Text style={styles.text}>{character.location.name}</Text>
                                </View>
                                <View style={styles.textBlock}>
                                    <Text style={styles.subtitle}>First seen in: </Text>
                                    <Text style={styles.text}>{character.origin.name}</Text>
                                </View>
                            </View>

                        </View>
                    </View>

                );
            })}


        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#263238',
    },
    card: {
        backgroundColor: '#606168',
        borderRadius: 10,
        margin: 20,
        width: '90%',
    },
    title: {
        marginTop: 20,
        fontSize: 30,
        fontWeight: 'bold',


    },
    titleText: {
        fontSize: 30,
        color: "white",
        fontWeight: 'bold',
        textAlign: "center",

    },
    card_container: {
        flex: 1,
    },
    status: {
        width: 15,
        height: 15,
    },
    card_image: {
        flex: 1,
        width: "100%",
        height: 300,
        borderRadius: 10,
    },
    textInfo: {
        height: 300,
        justifyContent: 'space-around',

    },
    textBlock: {
        padding: 20,
    },
    card_title: {
        fontSize: 20,
    },
    card_subtitle: {
        fontSize: 30,
    },
    loading: {
        fontSize: 70,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 22,
        color: "gray",
        fontWeight: "400"
    },
    text: {
        fontSize: 20,
        color: "white",
    }

});

export default CharacterList;
