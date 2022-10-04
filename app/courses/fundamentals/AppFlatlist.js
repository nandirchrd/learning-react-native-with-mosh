import { View, FlatList, Text } from 'react-native';
import React from 'react';
import ListItem from '../../components/ListItem';

const data = [
	{
		id: 1,
		name: 'Nandi',
		age: 90,
	},
	{
		id: 2,
		name: 'Greg Hardy',
		age: 90,
	},
	{
		id: 3,
		name: 'Robert Whittacker',
		age: 90,
	},
	{
		id: 4,
		name: 'Cyril Gane',
		age: 90,
	},
];

const AppFlatlist = () => {
	return (
		<View>
			<FlatList
				data={data}
				keyExtractor={(data) => data.id.toString()}
				ItemSeparatorComponent={() => (
					<View
						style={{
							height: 1,
							backgroundColor: '#000',
						}}
					/>
				)}
				renderItem={({ item }) => (
					<ListItem onPress={() => console.log(item)} item={item} />
				)}
			/>
		</View>
	);
};

export default AppFlatlist;
