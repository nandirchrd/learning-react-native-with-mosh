import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FundStylingScreen from './app/screens/FundStylingScreen';

export default function App() {
	return (
		<View style={styles.container}>
			<ScrollView>
				<FundStylingScreen />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
