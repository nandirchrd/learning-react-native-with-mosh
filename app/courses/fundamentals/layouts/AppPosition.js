import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const AppPosition = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>POSITIONS</Text>
			<View style={{ height: 300, borderWidth: 1, flexDirection: 'row' }}>
				<View
					style={{
						width: 100,
						height: 100,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: 'red',
						position: 'absolute',
						bottom: 0,
						right: 0,
					}}>
					<Text style={{ color: 'white', fontWeight: 'bold' }}>
						ABSOLUTE: BOTTOM: 0 RIGHT: 0
					</Text>
				</View>
				<View
					style={{
						width: 100,
						height: 100,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: 'green',
						top: 100,
					}}>
					<Text style={{ color: 'white', fontWeight: 'bold' }}>
						RELATIVE: TOP: 100
					</Text>
				</View>
				<View
					style={{
						width: 100,
						height: 100,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: 'purple',
					}}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'royalblue',
		marginTop: 5,
		borderWidth: 1,
		width: '90%',
		alignSelf: 'center',
	},
	title: {
		textAlign: 'center',
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
		padding: 5,
	},
});
export default AppPosition;
