import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AppBorder from '../courses/fundamentals/styling/AppBorder';
import AppShadow from '../courses/fundamentals/styling/AppShadow';
import AppTextStyling from '../courses/fundamentals/styling/AppTextStyling';
import AppIcon from '../courses/fundamentals/styling/AppIcon';

const FundStylingScreen = () => {
	return (
		<View style={styles.container}>
			<AppBorder />
			<AppShadow />
			<AppTextStyling />
			<AppIcon />
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
