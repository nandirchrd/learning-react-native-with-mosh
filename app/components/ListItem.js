import {
	View,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	TouchableNativeFeedback,
} from 'react-native';
import React from 'react';

const ListItem = ({ item, onPress }) => {
	return (
		<TouchableNativeFeedback onPress={onPress}>
			<View style={{ backgroundColor: 'royalblue', padding: 10 }}>
				<Text>Name: {item.name}</Text>
				<Text>Age: {item.age}</Text>
			</View>
		</TouchableNativeFeedback>
	);
};

export default ListItem;
