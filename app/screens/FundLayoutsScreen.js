import { StyleSheet, View, Text } from 'react-native';
import AppDimensions from '../courses/fundamentals/layouts/AppDimensions';
import AppFlexbox from '../courses/fundamentals/layouts/AppFlexbox';
import AppPosition from '../courses/fundamentals/layouts/AppPosition';

const FundLayoutsScreen = () => {
	return (
		<View>
			{/* 
                This Is Layout Course
             */}
			<Text style={[styles.title, { marginTop: 5 }]}>
				FUNDAMENTALS LAYOUT
			</Text>
			{/* DIMENSIONS */}
			<AppDimensions />
			{/* FLEXBOX */}
			<AppFlexbox />
			{/* POSITIONS */}
			<AppPosition />
		</View>
	);
};

const styles = StyleSheet.create({
	title: {
		fontSize: 25,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		textAlign: 'center',
		fontWeight: 'bold',
	},
});

export default FundLayoutsScreen;
