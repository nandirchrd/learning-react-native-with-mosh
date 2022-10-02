import { View, Text, StyleSheet } from 'react-native';
import {
	useDimensions,
	useDeviceOrientation,
} from '@react-native-community/hooks';
import React from 'react';

const AppDimensions = () => {
	const dimensions = useDimensions();
	const orientation = useDeviceOrientation();
	return (
		<View style={styles.container}>
			<Text
				style={[
					styles.text,
					{
						backgroundColor: orientation.landscape
							? 'red'
							: 'royalblue',
						color: orientation.landscape ? 'yellow' : 'white',
					},
				]}>
				Orientation {orientation.landscape ? 'Landscape' : 'Potrait'}
			</Text>
			<View
				style={{
					marginTop: 5,
					backgroundColor: 'royalblue',
					borderRadius: 10,
					justifyContent: 'center',
					padding: 10,
				}}>
				<Text
					style={{
						fontWeight: 'bold',
						fontSize: 15,
						color: 'white',
					}}>
					DIMENSIONS:
				</Text>
				<View>
					<Text style={{ color: 'white' }}>
						WIDTH: {dimensions.screen.width}
					</Text>
					<Text style={{ color: 'white' }}>
						HEIGHT: {dimensions.screen.height}
					</Text>
					<Text style={{ color: 'white' }}>
						SCALE: {dimensions.screen.scale}
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: '90%',
		alignSelf: 'center',
		marginTop: 5,
	},
	text: {
		padding: 10,
		borderRadius: 10,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});
export default AppDimensions;
