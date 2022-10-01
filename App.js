import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import {
	useDimensions,
	useDeviceOrientation,
} from '@react-native-community/hooks';

export default function App() {
	const { screen } = useDimensions();
	const orientation = useDeviceOrientation();

	return (
		<View style={styles.container}>
			<Text
				style={{
					backgroundColor: orientation.landscape ? 'red' : 'blue',
					color: orientation.landscape ? 'yellow' : 'white',
					padding: 10,
					borderRadius: 10,
					width: '80%',
					textAlign: 'center',
				}}>
				Orientation {orientation.landscape ? 'Landscape' : 'Potrait'}
			</Text>
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
