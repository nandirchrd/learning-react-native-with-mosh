import { View, Image, StyleSheet, Text } from 'react-native';
import React from 'react';

import SpaceX from '../../../assets/images/space-x.jpg';
const AppImage = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>IMAGE</Text>
			<Image
				blurRadius={10}
				fadeDuration={1000}
				source={SpaceX}
				style={styles.image}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 5,
		width: '90%',
		alignSelf: 'center',
		borderRadius: 10,
		overflow: 'hidden',
		backgroundColor: 'royalblue',
	},
	title: {
		fontSize: 20,
		textAlign: 'center',
		fontWeight: 'bold',
		color: 'white',
	},
	image: {
		width: '100%',
		height: 200,
	},
});
export default AppImage;
