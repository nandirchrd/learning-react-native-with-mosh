import {
	View,
	StyleSheet,
	Text,
	Image,
	TouchableOpacity,
	TouchableNativeFeedback,
	Button,
	Alert,
	Platform,
	StatusBar,
	SafeAreaView,
} from 'react-native';
import SpaceX from './app/assets/images/space-x.jpg';

const longText =
	'This is so long text so i just write anything to check the numberOfLine function is working. and I just try to write random things in this variable. heheheheheheheeheheh!';
export default function App() {
	console.log(StatusBar.currentHeight);
	return (
		<SafeAreaView style={styles.container}>
			{/* TEXT */}
			<Text numberOfLines={2} style={styles.text}>
				{longText}
			</Text>
			{/* IMAGE */}
			<Text
				style={{
					textAlign: 'center',
					fontSize: 20,
					borderTopWidth: 1,
					marginTop: 5,
				}}>
				This Is Image
			</Text>
			<TouchableOpacity>
				<Image
					blurRadius={10}
					fadeDuration={1000}
					source={SpaceX}
					style={styles.img}
				/>
			</TouchableOpacity>
			{/* Touchables */}
			<TouchableNativeFeedback>
				<View
					style={{
						backgroundColor: 'dodgerblue',
						width: '80%',
						height: 100,
						alignSelf: 'center',
						borderRadius: 10,
						marginTop: 5,
						justifyContent: 'center',
						alignItems: 'center',
					}}>
					<Text
						style={{
							fontSize: 20,
							padding: 10,
							fontWeight: '500',
						}}>
						TouchableNativeFeedback
					</Text>
				</View>
			</TouchableNativeFeedback>
			{/* Button */}
			<View style={{ marginTop: 5 }}>
				<Button
					color='red'
					title='This is button'
					onPress={() =>
						// Alert.alert('The Title', 'The body', [
						// 	{ text: 'YES', onPress: () => console.log('YES') },
						// 	{ text: 'NO', onPress: () => console.log('NO') },
						// ])
						Alert.prompt('The title', 'The body', (v) =>
							console.log(v)
						)
					}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		height: '100%',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
	},
	text: {
		backgroundColor: 'red',
		padding: 2,
		borderRadius: 7,
	},
	img: {
		width: '100%',
		height: 200,
	},
});
