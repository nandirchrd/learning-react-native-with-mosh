import { StatusBar } from 'expo-status-bar';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import {
	useDimensions,
	useDeviceOrientation,
} from '@react-native-community/hooks';

export default function App() {
	const { screen } = useDimensions();
	const orientation = useDeviceOrientation();

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.top}>
				<Text
					style={{
						backgroundColor: orientation.landscape ? 'red' : 'blue',
						color: orientation.landscape ? 'yellow' : 'white',
						padding: 10,
						borderRadius: 10,
						width: '80%',
						textAlign: 'center',
					}}>
					Orientation{' '}
					{orientation.landscape ? 'Landscape' : 'Potrait'}
				</Text>
			</View>
			{/* BODY FLEX */}
			<View
				style={{
					borderWidth: 1,
					marginTop: 5,
					flexDirection: 'row',
					alignItems: 'flex-end',
					height: '30%',
				}}>
				<View style={[styles.box, { height: 20 }, styles.red]}></View>
				<View style={[styles.box, { height: 40 }, styles.green]}></View>
				<View style={[styles.box, { height: 70 }, styles.blue]}></View>
				<View style={[styles.box, { height: 20 }, styles.green]}></View>
				<View style={[styles.box, { height: 80 }, styles.blue]}></View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	top: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
	body: {},
	box: {
		width: 40,
		// height: 97.6,
	},
	red: {
		backgroundColor: 'red',
	},
	green: {
		backgroundColor: 'green',
	},
	blue: {
		backgroundColor: 'blue',
	},
});
