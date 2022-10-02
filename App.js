import { SafeAreaView, StyleSheet, StatusBar, ScrollView } from 'react-native';
import FundConceptScreen from './app/screens/FundConceptScreen';
import FundLayoutsScreen from './app/screens/FundLayoutsScreen';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<FundConceptScreen />
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
