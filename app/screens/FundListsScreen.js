import React from 'react';
import AppFlatlist from '../courses/fundamentals/flatlists/AppFlatlist';
import Screen from '../components/Screen';
import { Text, View } from 'react-native';

const FundListsScreen = () => {
	return (
		<Screen>
			<Text
				style={{
					textAlign: 'center',
					fontSize: 25,
					borderWidth: 1,
					fontWeight: 'bold',
				}}>
				LISTS
			</Text>
			<View style={{ marginTop: 20 }} />
			<AppFlatlist />
		</Screen>
	);
};

export default FundListsScreen;
