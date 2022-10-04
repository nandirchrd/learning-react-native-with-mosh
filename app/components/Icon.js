import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

const Icon = ({
	name,
	size = 25,
	backgroundColor = 'black',
	iconColor = 'white',
	padding = 5,
}) => {
	return (
		<View
			style={{
				backgroundColor: backgroundColor,
				borderRadius: size + padding / 2,
				justifyContent: 'center',
				alignItems: 'center',
				padding: padding,
			}}>
			<MaterialCommunityIcons name={name} size={size} color={iconColor} />
		</View>
	);
};

export default Icon;

const styles = StyleSheet.create({});
