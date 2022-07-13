import React from 'react';
import {View, StyleSheet, Text, ImageBackground, Image, TextInput} from 'react-native';
import {CardInitial} from '../CardInitial/CardInitial';  
import { Filter } from '../Filter/Filter';

export function Card(){
	return (
		<View style={styles.container}>
			<ImageBackground source={require('../../assets/Pokeball-BG.png')} resizeMode="cover" style={styles.image}>
				<Filter />
				<Text style={styles.title}>Pokédex</Text>
				<Text style={styles.texto}>Search for Pokémon by name or using the National Pokédex number.</Text>
			</ImageBackground>
			<View style={{paddingHorizontal: 40, paddingBottom: 200}}>
				<TextInput 
					style={styles.search}
					placeholder="What Pokémon are you looking for?"
					placeholderTextColor="#747476"
				/>
				<CardInitial />
			</View>
		</View>
  	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},

	title: {
		fontSize: 32,
		fontWeight: 'bold',
		color: '#17171B',
		textAlign: 'left',
		marginTop: 50,
	},
	texto: {
		fontSize: 16,
		color: '#c4c4c4',
		paddingTop: 10,
		marginBottom: 25,
		lineHeight: 19,
	},
	search: {
		backgroundColor: '#F2F2F2',
		borderRadius: 10,
		marginBottom: 44,
		paddingHorizontal: 30,
		height: 60,
	},
	image: {
		paddingHorizontal: 40,
	},
	filter: {
		paddingTop: 40,
		flexDirection: 'row-reverse'
	}
});