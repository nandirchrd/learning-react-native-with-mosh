import { View, Button, StyleSheet } from 'react-native';
import React from 'react';

const AppButton = () => {
	return (
		<View style={styles.container}>
			<Button color='royalblue' title='This is button' />
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
	},
});
export default AppButton;
