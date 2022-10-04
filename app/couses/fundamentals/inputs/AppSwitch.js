import { View, Text, SwitchComponent, Switch } from 'react-native';
import React, { useState } from 'react';

const AppSwitch = () => {
	const [isOn, setIsOn] = useState(false);
	return (
		<View>
			<Text
				style={{
					textAlign: 'center',
					fontSize: 15,
					fontWeight: 'bold',
					marginTop: 10,
				}}>
				SWITCH
			</Text>
			<Switch value={isOn} onValueChange={(value) => setIsOn(value)} />
		</View>
	);
};

export default AppSwitch;
