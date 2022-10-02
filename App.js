import {
	Text,
	SafeAreaView,
	StyleSheet,
	StatusBar,
	ScrollView,
} from 'react-native';
import AppText from './app/courses/fundamentals/concepts/AppText';
import AppImage from './app/courses/fundamentals/concepts/AppImage';
import AppTouchable from './app/courses/fundamentals/concepts/AppTouchable';
import AppButton from './app/courses/fundamentals/concepts/AppButton';
import AppButtonWithAlert from './app/courses/fundamentals/concepts/AppButtonWithAlert';
import AppDimensions from './app/courses/fundamentals/layouts/AppDimensions';
import AppFlexbox from './app/courses/fundamentals/layouts/AppFlexbox';
import AppPosition from './app/courses/fundamentals/layouts/AppPosition';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView>
				{/* 
					This Is Concept Course
				*/}
				<Text style={styles.title}>FUNDAMENTALS CONCEPTS</Text>
				{/* TEXT */}
				<AppText />
				{/* IMAGE */}
				<AppImage />
				{/* Touchables */}
				<AppTouchable type='opacity' />
				{/* Button */}
				<AppButton />
				{/* ALERT */}
				<AppButtonWithAlert />

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
	title: {
		fontSize: 25,
		borderTopWidth: 1,
		borderBottomWidth: 1,
		textAlign: 'center',
		fontWeight: 'bold',
	},
});
