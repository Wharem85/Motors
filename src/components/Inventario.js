import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font'

export default function Inventario() {
	const [loaded] = useFonts({
		rubik: require('../../assets/fonts/Rubik-VariableFont_wght.ttf'),
	});

	if(!loaded) {
		return null;
	}

	return (
		<ScrollView style={styles.container}>
			<View style={styles.contentTitle}>
				<Text style={styles.title}>Recently Added</Text>
				<TouchableOpacity style={styles.contentButton}>
					<Text style={styles.textButton}>View All Inventary</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	container: {
		height: 300
	},
	contentTitle: {
		width: "100%",
		height: 250,
		alignItems: "center",
		paddingTop: 80
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		textTransform: "uppercase",
		fontFamily: 'rubik'
	},
	contentButton: {
		marginTop: 30,
		width: 250,
		height: 60,
		borderWidth: 2,
		borderColor: "#0d46ff",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		borderBottomLeftRadius: 30,
		borderBottomRightRadius: 30,
		alignItems: "center"
	},
	textButton: {
		fontSize: 22,
		paddingTop: 12,
		color: "#0d46ff",
		fontFamily: 'rubik'
	}
})
