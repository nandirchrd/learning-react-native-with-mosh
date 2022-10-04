import { View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import AppInput from '../couses/fundamentals/inputs/AppInput';
import PrettyInput from '../couses/fundamentals/inputs/PrettyInput';
import AppSwitch from '../couses/fundamentals/inputs/AppSwitch';
import AppPicker from '../couses/fundamentals/inputs/AppPicker';
import Constants from 'expo-constants';

const FundInputScreen = () => {
	const items = [
		{
			id: 1,
			name: 'Horror',
		},
		{
			id: 2,
			name: 'Comedy',
		},
		{
			id: 3,
			name: 'Thriller',
		},
		{
			id: 4,
			name: 'Fiction',
		},
	];
	const [selectedItem, setSelectedItem] = useState('');

	const handleSelectedItem = (item) => {
		setSelectedItem(item.name);
	};
	return (
		<View style={styles.container}>
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

			<Text
				style={{
					textAlign: 'center',
					fontSize: 15,
					fontWeight: 'bold',
					marginTop: 10,
				}}>
				APP PICKER
			</Text>
			<AppPicker
				placeholder='Category'
				icon='apps'
				items={items}
				selectedItem={selectedItem}
				onSelectedItem={handleSelectedItem}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingTop: Constants.statusBarHeight,
	},
});
export default FundInputScreen;
