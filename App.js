import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text } from 'react-native';

const longText =
	'This is so long text so i just write anything to check the numberOfLine function is working. and I just try to write random things in this variable. heheheheheheheeheheh!';
export default function App() {
	return (
		<View style={styles.container}>
			<Text numberOfLines={2} style={styles.text}>
				{longText}
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		height: '100%',
		paddingTop: 20,
	},
	text: {
		backgroundColor: 'red',
		padding: 2,
		borderRadius: 7,
	},
});
