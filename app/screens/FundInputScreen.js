import { View, Text } from 'react-native';
import React from 'react';
import AppInput from '../couses/fundamentals/inputs/AppInput';
import PrettyInput from '../couses/fundamentals/inputs/PrettyInput';
import AppSwitch from '../couses/fundamentals/inputs/AppSwitch';

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

			<Text
				style={{
					textAlign: 'center',
					fontSize: 15,
					fontWeight: 'bold',
					marginTop: 10,
				}}>
				PRETTY INPUT
			</Text>

			<PrettyInput
				icon='email'
				onChangeText={(text) => console.log(text)}
				placeholder='Masukan nama anda'
			/>
			<PrettyInput
				icon='email'
				onChangeText={(text) => console.log(text)}
				placeholder='Masukan nama anda'
			/>
			<AppSwitch />
		</View>
	);
};

export default FundInputScreen;
