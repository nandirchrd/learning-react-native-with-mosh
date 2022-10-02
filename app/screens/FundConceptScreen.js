import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import AppText from '../courses/fundamentals/concepts/AppText';
import AppImage from '../courses/fundamentals/concepts/AppImage';
import AppTouchable from '../courses/fundamentals/concepts/AppTouchable';
import AppButton from '../courses/fundamentals/concepts/AppButton';
import AppButtonWithAlert from '../courses/fundamentals/concepts/AppButtonWithAlert';

const FundConceptScreen = () => {
	return (
		<View>
			{/* 
					This Is Fundamentals Concept Course
				*/}
			<Text style={styles.title}>FUNDAMENTALS CONCEPTS</Text>
			{/* TEXT */}
			<AppText />
			{/* IMAGE */}
			<AppImage />
			{/* Touchables */}
			<AppTouchable type='opacity' />
			{/* Button */}
			<AppButton />
			{/* ALERT */}
			<AppButtonWithAlert />
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
export default FundConceptScreen;
