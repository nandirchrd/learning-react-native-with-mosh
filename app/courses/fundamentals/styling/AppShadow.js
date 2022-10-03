import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AppShadow = () => {
	return (
		<View>
			<Text style={styles.title}>Shadow</Text>
			<View
				style={[
					styles.box,
					{
						backgroundColor: 'red',
						shadowColor: 'green',
						shadowOffset: { width: 0, height: 20 },
						shadowRadius: 10,
						shadowOpacity: 1,
						elevation: 30,
					},
				]}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
		padding: 10,
	},
	box: {
		width: 100,
		height: 100,
	},
});

export default AppShadow;
