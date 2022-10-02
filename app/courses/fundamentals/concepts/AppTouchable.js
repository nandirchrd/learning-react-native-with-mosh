import {
	View,
	TouchableHighlight,
	TouchableNativeFeedback,
	TouchableOpacity,
	Text,
	StyleSheet,
} from 'react-native';
import React from 'react';

const AppTouchable = ({ type }) => {
	let Touchable, title;
	switch (type) {
		case 'opacity':
			Touchable = TouchableOpacity;
			title = 'Touchable Opacity';
			break;
		case 'highlight':
			Touchable = TouchableHighlight;
			title = 'Touchable Highlight';
			break;
		case 'native':
			Touchable = TouchableNativeFeedback;
			title = 'Touchable Native Feedback';
			break;
		default:
			Touchable = TouchableOpacity;
			title = 'Touchable Opacity';
			break;
	}

	return (
		<View style={styles.container}>
			<Touchable>
				<Text style={styles.text}>{title}</Text>
			</Touchable>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		width: '90%',
		alignSelf: 'center',
		borderRadius: 10,
		overflow: 'hidden',
		marginTop: 5,
	},
	text: {
		backgroundColor: 'royalblue',
		padding: 10,
		textAlign: 'center',
		fontSize: 20,
		fontWeight: '400',
		color: 'white',
	},
});
export default AppTouchable;
