import { View, Button, StyleSheet, Alert, Text } from 'react-native';
import React, { useState } from 'react';

const AppButtonWithAlert = () => {
	const [pressed, setPressed] = useState(null);
	return (
		<View style={styles.container}>
			{pressed && (
				<Text
					style={{
						color: 'black',
						textAlign: 'center',
						padding: 2,
						fontWeight: '400',
						backgroundColor: 'red',
						color: 'white',
					}}>
					{pressed}
				</Text>
			)}
			<View
				style={{
					borderRadius: 15,
					overflow: 'hidden',
				}}>
				<Button
					color='royalblue'
					title='Button With Alert'
					onPress={() =>
						Alert.alert('THIS IS ALERT', 'ALERT DESCRIPTION', [
							{
								text: 'YES',
								onPress: () => {
									console.log('YES PRESSED');
									setPressed('Yes Pressed!');
									setTimeout(() => setPressed(null), 800);
								},
							},
							{
								text: 'NO',
								onPress: () => {
									console.log('NO PRESSED');
									setPressed('No Pressed!');
									setTimeout(() => setPressed(null), 800);
								},
							},
						])
					}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 5,
		width: '90%',
		alignSelf: 'center',
		overflow: 'hidden',
	},
});
export default AppButtonWithAlert;
