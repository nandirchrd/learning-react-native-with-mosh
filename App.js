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
				<View style={[styles.chart, { height: 20 }, styles.red]} />
				<View style={[styles.chart, { height: 40 }, styles.green]} />
				<View style={[styles.chart, { height: 70 }, styles.blue]} />
				<View style={[styles.chart, { height: 20 }, styles.green]} />
				<View style={[styles.chart, { height: 100 }, styles.blue]} />
			</View>
			{/* POSITIONS */}
			<View
				style={{
					marginTop: 10,
					borderWidth: 1,
					flexDirection: 'row',
					height: 200,
				}}>
				<View style={[styles.box, { backgroundColor: 'red' }]} />
				<View
					style={[
						styles.box,
						{ right: 40, top: 40, backgroundColor: 'green' },
					]}
				/>
				<View
					style={[
						styles.box,
						{
							position: 'absolute',
							bottom: 0,
							right: 0,
							backgroundColor: 'yellow',
						},
					]}
				/>
				<View style={[styles.box, { backgroundColor: 'blue' }]} />
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
	chart: {
		width: 40,
		// height: 97.6,
	},
	box: {
		width: 80,
		height: 80,
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
