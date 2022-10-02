import { SafeAreaView, StyleSheet, StatusBar, ScrollView } from 'react-native';
import FundLayoutsScreen from './app/screens/FundLayoutsScreen';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<FundLayoutsScreen />
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		height: '100%',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
});
