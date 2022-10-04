import { View, Text, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';

const PrettyInput = ({ icon, placeholder, onChangeText, ...rest }) => {
	return (
		<View
			style={{
				borderBottomWidth: 1,
				padding: 5,
				flexDirection: 'row',
				alignItems: 'center',
			}}>
			{icon && (
				<MaterialCommunityIcons
					name={icon}
					size={30}
					style={{ padding: 5 }}
					color='grey'
				/>
			)}
			<TextInput
				placeholder={placeholder}
				style={{ flex: 1 }}
				onChangeText={onChangeText}
				{...rest}
			/>
		</View>
	);
};

export default PrettyInput;
