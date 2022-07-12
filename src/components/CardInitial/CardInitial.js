import React, { useState, useEffect } from 'react';
import {
    View, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    Image, 
    ImageBackground, 
    FlatList
} from 'react-native';

import {api} from '../../services/api';  
import { useNavigation } from '@react-navigation/native';
import {colors, textColor, backgroundColors} from '../../ui/colorsDefault'

export function CardInitial(){
    const [pokemons, setPokemon] = useState([]);

    useEffect(() => {
        async function getAllPokemons(){
            const response = await api.get('/pokemon?limit=100000&offset=0')
            const { results } = response.data;

            const payloadPokemons = await Promise.all(
                results.map(async pokemon => {
                    const { id, types} = await getInfoPokemons(pokemon.url)

                    return {
                        name: pokemon.name,
                        id,
                        types
                    }
                })
            )

            setPokemon(payloadPokemons);
        }

        getAllPokemons();
    }, [])

    async function getInfoPokemons(url){
        const response = await api.get(url)
        const { id, types } = response.data;

        return {
            id, types
        }
    }

    return (
        <View>
            <FlatList
                data={pokemons}
                keyExtractor={pokemon => pokemon.id.toString()}
                renderItem={({item: pokemon}) => (
                    <PokemonShow data={pokemon}/>
                )}
            />
        </View>
    )
}

function PokemonShow(data){
    const navigation = useNavigation();
    
    return (
        <ImageBackground 
            source={require('../../assets/bg.png')} 
            resizeMode="cover" 
            style={[styles.cardMain, {backgroundColor: backgroundColors[data.data.types[0].type.name]}]} 
        >
            <TouchableOpacity
                onPress={() => navigation.navigate('CardScreen')}
                style={styles.button}
            >
                <Text style={styles.titleId}>#00{data.data.id}</Text>
                <Text style={styles.title}>{data.data.name} </Text>
                <View style={{flexDirection: 'row'}}>
                    {data.data.types.map((pokemonType, index) => 
                        <View style={[styles.tag, {backgroundColor: colors[pokemonType.type.name]}]} key={index}>
                            <Text 
                                style={{color: "#fff"}}
                            >
                                {pokemonType.type.name}
                            </Text>
                        </View>
                    )}
                </View>
                <Image 
                    style={styles.img}
                    source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.data.id}.png`}}
                />
            </TouchableOpacity>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    card: {
		marginVertical: 12,
		padding: 15,
		borderRadius: 20,
		flexDirection: 'row',
		borderWidth: 1,
	},
	nomeText: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#000',
	},
    cardMain: {
        borderRadius: 10,
        marginTop: 30,
        padding: 20
    },
    titleId: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'rgba(23, 23, 27, 0.6)'
    },
	title: {
		fontSize: 25,
		fontWeight: 'bold',
		color: '#fff',
		textAlign: 'left',
        textTransform: 'capitalize'
	},

    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    img: {
        width: 130,
        height: 130,
        position: 'absolute',
        top: -50,
        right: 0,
    },
    tag: {
        borderRadius: 3,
        marginTop: 11,
        marginBottom: 20,
        marginRight: 5,
        paddingHorizontal: 10,
        paddingVertical: 3,
        backgroundColor: {...colors}
    }
});