import { View, Text, TextInput } from 'react-native';
import React, { useState } from 'react';

const AppInput = () => {
	const [firstName, setFirstName] = useState('');
	return (
		<View style={{ marginTop: 5, width: '90%', alignSelf: 'center' }}>
			<TextInput
				onChangeText={(text) => setFirstName(text)}
				style={{
					borderWidth: 1,
					borderColor: 'gray',
					padding: 5,
					borderRadius: 10,
				}}
				placeholder='Masukan Nama'
			/>
			<Text style={{ fontWeight: 'bold', marginTop: 10 }}>
				NAME : {firstName}
			</Text>
		</View>
	);
};

export default AppInput;
