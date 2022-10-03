import { StyleSheet, Text, View } from 'react-native';
import { Zocial } from '@expo/vector-icons';
import React from 'react';

const AppIcon = () => {
	return (
		<View>
			<Text
				style={{
					fontSize: 25,
					textAlign: 'center',
					fontWeight: 'bold',
				}}>
				ICONS
			</Text>
			<View style={{ flexDirection: 'row' }}>
				<Zocial
					style={{ padding: 20 }}
					name='facebook'
					color='blue'
					size={50}
				/>
				<Zocial
					style={{ padding: 20 }}
					name='youtube'
					color='red'
					size={50}
				/>
				<Zocial
					style={{ padding: 20 }}
					name='amazon'
					color='black'
					size={50}
				/>
				<Zocial
					style={{ padding: 20 }}
					name='spotify'
					color='lime'
					size={50}
				/>
			</View>
		</View>
	);
};

export default AppIcon;

const styles = StyleSheet.create({});
