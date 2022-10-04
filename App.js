import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FundInputScreen from './app/screens/FundInputScreen';

export default function App() {
	return (
		<View style={styles.container}>
			<FundInputScreen />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
