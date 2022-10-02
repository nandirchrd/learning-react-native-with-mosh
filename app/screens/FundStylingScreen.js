import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AppBorder from '../courses/fundamentals/styling/AppBorder';

const FundStylingScreen = () => {
	return (
		<View style={styles.container}>
			<AppBorder />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '90%',
		alignSelf: 'center',
	},
});
export default FundStylingScreen;
