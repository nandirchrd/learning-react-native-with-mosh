import {
	View,
	Text,
	Modal,
	TouchableWithoutFeedback,
	Button,
	FlatList,
	TouchableNativeFeedback,
} from 'react-native';
import React, { useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AppPicker = ({
	placeholder,
	icon,
	items,
	selectedItem,
	onSelectedItem,
}) => {
	const [isVisible, setVisible] = useState(false);
	return (
		<>
			<TouchableWithoutFeedback onPress={() => setVisible(true)}>
				<View
					style={{
						backgroundColor: '#ddd',
						padding: 10,
						borderRadius: 10,
						flexDirection: 'row',
						alignItems: 'center',
					}}>
					{icon && (
						<MaterialCommunityIcons
							name={icon}
							size={30}
							style={{ marginRight: 5, color: '#333' }}
						/>
					)}
					<Text style={{ flex: 1 }}>
						{selectedItem ? selectedItem : placeholder}
					</Text>
					<MaterialCommunityIcons name='chevron-down' size={30} />
				</View>
			</TouchableWithoutFeedback>
			{/* MODAL SCROLLING */}
			<Modal animationType='slide' visible={isVisible}>
				<Button
					title='Close'
					color='red'
					onPress={() => setVisible(false)}
				/>
				<FlatList
					data={items}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<TouchableNativeFeedback
							onPress={() => {
								setVisible(false);
								onSelectedItem(item);
							}}>
							<View
								style={{
									backgroundColor: '#ddd',
									padding: 10,
									borderRadius: 10,
									flexDirection: 'row',
									alignItems: 'center',
									marginVertical: 5,
								}}>
								<Text>{item.name}</Text>
							</View>
						</TouchableNativeFeedback>
					)}
				/>
			</Modal>
		</>
	);
};

export default AppPicker;
