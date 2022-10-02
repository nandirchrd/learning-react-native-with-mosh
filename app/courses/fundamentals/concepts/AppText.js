import { Text, StyleSheet, View } from 'react-native';
import React from 'react';

const longText =
	'This is so long text so i just write anything to check the numberOfLine function is working. and I just try to write random things in this variable. heheheheheheheeheheh!';

const AppText = () => {
	return (
		<View style={styles.textContainer}>
			<Text style={styles.title}>THIS IS A TEXT</Text>
			<Text numberOfLines={2} style={styles.text}>
				{longText}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textContainer: {
		backgroundColor: 'royalblue',
		width: '90%',
		alignSelf: 'center',
		alignItems: 'center',
		borderRadius: 20,
		padding: 10,
		marginTop: 5,
	},
	title: {
		color: 'white',
		fontWeight: '900',
		fontSize: 20,
	},
	text: {
		marginTop: 5,
		color: 'white',
		width: '80%',
		borderRadius: 7,
	},
});
export default AppText;
