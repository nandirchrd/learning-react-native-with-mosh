import {
	View,
	Text,
	TouchableHighlight,
	TouchableOpacity,
	TouchableNativeFeedback,
} from 'react-native';
import React from 'react';

const ListItem = ({ item, onPress, renderRightAction }) => {
	return (
		<View style={{ flexDirection: 'row' }}>
			<TouchableNativeFeedback onPress={onPress}>
				<View
					style={{
						backgroundColor: 'royalblue',
						padding: 10,
						flex: 1,
					}}>
					<Text>Name: {item.name}</Text>
					<Text>Age: {item.age}</Text>
				</View>
			</TouchableNativeFeedback>
			{renderRightAction && (
				<View
					style={{
						backgroundColor: 'red',
						justifyContent: 'center',
						alignItems: 'center',
						padding: 10,
					}}>
					{renderRightAction}
				</View>
			)}
		</View>
	);
};

export default ListItem;
