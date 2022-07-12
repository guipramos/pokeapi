import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { api } from '../../services/api';

export function CardScreen() {
	const [pokemon, setPokemon] = useState('');

	useEffect(() => {
		api.get('/pokemon/venusaur')
			.then((response) => {
				console.log(response.data) 
				setPokemon(response.data)
			})
			.catch((err) => {
				console.error("ops! ocorreu um erro" + err);
			})
	}, [])

	return(
		<>
			<View><Text>dfgdfgdf</Text></View>
		</>
	);
}

const styles = StyleSheet.create({
	
})