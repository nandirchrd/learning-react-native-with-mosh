import { View, FlatList, Text } from 'react-native';
import React from 'react';

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
					<View style={{ height: 1, backgroundColor: '#000' }} />
				)}
				renderItem={({ item }) => (
					<View style={{ padding: 10 }}>
						<Text>Name: {item.name}</Text>
						<Text>Age: {item.age}</Text>
					</View>
				)}
			/>
		</View>
	);
};

export default AppFlatlist;
