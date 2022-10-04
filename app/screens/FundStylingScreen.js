import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AppBorder from '../courses/fundamentals/styling/AppBorder';
import AppShadow from '../courses/fundamentals/styling/AppShadow';
import AppTextStyling from '../courses/fundamentals/styling/AppTextStyling';
import AppIcon from '../courses/fundamentals/styling/AppIcon';

const FundStylingScreen = () => {
	return (
		<View>
			<Text style={[styles.title, { marginTop: 5 }]}>
				FUNDAMENTALS STYLING
			</Text>
			<AppBorder />
			<AppShadow />
			<AppTextStyling />
			<AppIcon />
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		textAlign: 'center',
		fontWeight: 'bold',
	},
});
export default FundStylingScreen;
