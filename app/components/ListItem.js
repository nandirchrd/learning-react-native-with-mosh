import { View, Text } from 'react-native';
import React from 'react';

const ListItem = ({ item }) => {
	return (
		<View style={{ padding: 10 }}>
			<Text>Name: {item.name}</Text>
			<Text>Age: {item.age}</Text>
		</View>
	);
};

export default ListItem;
