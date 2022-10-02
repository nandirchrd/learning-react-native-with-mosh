import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const AppFlexbox = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>FLEXBOX</Text>
			<View>
				<Text style={styles.subTitle}>Justify Start</Text>
				<View style={[styles.boxContainer, { flexDirection: 'row' }]}>
					<View style={[styles.box, { backgroundColor: 'red' }]} />
					<View style={[styles.box, { backgroundColor: 'green' }]} />
					<View style={[styles.box, { backgroundColor: 'purple' }]} />
					<View style={[styles.box, { backgroundColor: 'cyan' }]} />
					<View style={[styles.box, { backgroundColor: 'yellow' }]} />
					<View style={[styles.box, { backgroundColor: 'orange' }]} />
				</View>
			</View>
			<View>
				<Text style={styles.subTitle}>Justify Center</Text>
				<View
					style={[
						styles.boxContainer,
						{ flexDirection: 'row', justifyContent: 'center' },
					]}>
					<View style={[styles.box, { backgroundColor: 'red' }]} />
					<View style={[styles.box, { backgroundColor: 'green' }]} />
					<View style={[styles.box, { backgroundColor: 'purple' }]} />
					<View style={[styles.box, { backgroundColor: 'cyan' }]} />
					<View style={[styles.box, { backgroundColor: 'yellow' }]} />
					<View style={[styles.box, { backgroundColor: 'orange' }]} />
				</View>
			</View>
			<View>
				<Text style={styles.subTitle}>Justify Flex-End</Text>
				<View
					style={[
						styles.boxContainer,
						{ flexDirection: 'row', justifyContent: 'flex-end' },
					]}>
					<View style={[styles.box, { backgroundColor: 'red' }]} />
					<View style={[styles.box, { backgroundColor: 'green' }]} />
					<View style={[styles.box, { backgroundColor: 'purple' }]} />
					<View style={[styles.box, { backgroundColor: 'cyan' }]} />
					<View style={[styles.box, { backgroundColor: 'yellow' }]} />
					<View style={[styles.box, { backgroundColor: 'orange' }]} />
				</View>
			</View>
			<View>
				<Text style={styles.subTitle}>Justify Between</Text>
				<View
					style={[
						styles.boxContainer,
						{
							flexDirection: 'row',
							justifyContent: 'space-between',
						},
					]}>
					<View style={[styles.box, { backgroundColor: 'red' }]} />
					<View style={[styles.box, { backgroundColor: 'green' }]} />
					<View style={[styles.box, { backgroundColor: 'purple' }]} />
					<View style={[styles.box, { backgroundColor: 'cyan' }]} />
					<View style={[styles.box, { backgroundColor: 'yellow' }]} />
					<View style={[styles.box, { backgroundColor: 'orange' }]} />
				</View>
			</View>
			<View>
				<Text style={styles.subTitle}>Justify Evenly</Text>
				<View
					style={[
						styles.boxContainer,
						{
							flexDirection: 'row',
							justifyContent: 'space-evenly',
						},
					]}>
					<View style={[styles.box, { backgroundColor: 'red' }]} />
					<View style={[styles.box, { backgroundColor: 'green' }]} />
					<View style={[styles.box, { backgroundColor: 'purple' }]} />
					<View style={[styles.box, { backgroundColor: 'cyan' }]} />
					<View style={[styles.box, { backgroundColor: 'yellow' }]} />
					<View style={[styles.box, { backgroundColor: 'orange' }]} />
				</View>
			</View>
			<View>
				<Text style={styles.subTitle}>Justify Around</Text>
				<View
					style={[
						styles.boxContainer,
						{
							flexDirection: 'row',
							justifyContent: 'space-around',
						},
					]}>
					<View style={[styles.box, { backgroundColor: 'red' }]} />
					<View style={[styles.box, { backgroundColor: 'green' }]} />
					<View style={[styles.box, { backgroundColor: 'purple' }]} />
					<View style={[styles.box, { backgroundColor: 'cyan' }]} />
					<View style={[styles.box, { backgroundColor: 'yellow' }]} />
					<View style={[styles.box, { backgroundColor: 'orange' }]} />
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'royalblue',
		marginTop: 5,
		width: '90%',
		alignSelf: 'center',
		borderRadius: 5,
		overflow: 'hidden',
		padding: 5,
	},
	boxContainer: {
		borderWidth: 1,
	},
	title: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
		color: 'white',
	},
	subTitle: {
		color: 'white',
		fontSize: 20,
	},
	box: {
		width: 30,
		height: 30,
	},
});
export default AppFlexbox;
