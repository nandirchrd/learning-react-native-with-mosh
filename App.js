import { SafeAreaView, StyleSheet, StatusBar, ScrollView } from 'react-native';
import FundConceptScreen from './app/screens/FundConceptScreen';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				<FundConceptScreen />
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
