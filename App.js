import { View, StyleSheet, Text, Image } from 'react-native';
import SpaceX from './app/assets/images/space-x.jpg';

const longText =
	'This is so long text so i just write anything to check the numberOfLine function is working. and I just try to write random things in this variable. heheheheheheheeheheh!';
export default function App() {
	return (
		<View style={styles.container}>
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
			<Image
				blurRadius={10}
				fadeDuration={1000}
				source={SpaceX}
				style={styles.img}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		height: '100%',
		paddingTop: 20,
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
