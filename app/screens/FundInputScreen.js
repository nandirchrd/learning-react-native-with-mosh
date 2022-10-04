import { View, Text } from 'react-native';
import React from 'react';
import AppInput from '../couses/fundamentals/inputs/AppInput';

const FundInputScreen = () => {
	return (
		<View>
			<Text
				style={{
					borderWidth: 1,
					padding: 5,
					textAlign: 'center',
					fontSize: 25,
					fontWeight: 'bold',
				}}>
				FUNDAMENTALS INPUT
			</Text>
			<AppInput />
		</View>
	);
};

export default FundInputScreen;
