import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const AppBorder = () => {
	return (
		<View style={{ marginTop: 5, width: '90%', alignSelf: 'center' }}>
			<Text
				style={{
					fontWeight: 'bold',
					textAlign: 'center',
					padding: 5,
					fontSize: 20,
				}}>
				BORDER
			</Text>
			<View
				style={{
					flexDirection: 'row',
					flexWrap: 'wrap',
					backgroundColor: 'royalblue',
					padding: 10,
				}}>
				<View style={[styles.box, { borderWidth: 2 }]}>
					<Text style={{ fontWeight: 'bold' }}>BorderWidth: 2</Text>
				</View>
				<View
					style={[
						styles.box,
						styles.yellow,
						{ borderWidth: 2, marginLeft: 5 },
					]}>
					<Text style={{ fontWeight: 'bold', color: 'black' }}>
						borderColor: Yellow
					</Text>
				</View>
				<View
					style={[
						styles.box,
						{ borderWidth: 2, marginTop: 5, borderRadius: 50 },
					]}>
					<Text style={{ fontWeight: 'bold', color: 'black' }}>
						borderRadius: 50
					</Text>
				</View>
			</View>
			{/* BORDER WIDTH */}
			<Text
				style={{
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: 20,
				}}>
				Border Width
			</Text>
			<View
				style={{
					flexDirection: 'row',
					marginTop: 5,
					flexWrap: 'wrap',
					backgroundColor: 'royalblue',
					padding: 10,
				}}>
				<View
					style={[
						styles.box,
						{
							borderTopWidth: 2,
							backgroundColor: '#041050',
						},
					]}>
					<Text style={{ fontWeight: 'bold', color: 'white' }}>
						borderTopWidth: 2
					</Text>
				</View>
				<View
					style={[
						styles.box,
						{
							borderLeftWidth: 3,
							backgroundColor: '#041050',
							marginLeft: 2,
						},
					]}>
					<Text style={{ fontWeight: 'bold', color: 'white' }}>
						borderLeftWidth: 3
					</Text>
				</View>
				<View
					style={[
						styles.box,
						{
							borderBottomWidth: 3,
							backgroundColor: '#041050',
							marginTop: 2,
						},
					]}>
					<Text style={{ fontWeight: 'bold', color: 'white' }}>
						borderBottomWidth: 3
					</Text>
				</View>
				<View
					style={[
						styles.box,
						{
							borderRightWidth: 3,
							backgroundColor: '#041050',
							marginTop: 2,
							marginLeft: 2,
						},
					]}>
					<Text style={{ fontWeight: 'bold', color: 'white' }}>
						borderRightWidth: 3
					</Text>
				</View>
			</View>
			{/* BORDER RADIUS */}
			<Text
				style={{
					textAlign: 'center',
					fontWeight: 'bold',
					fontSize: 20,
				}}>
				Border Radius
			</Text>
			<View
				style={{
					flexDirection: 'row',
					marginTop: 5,
					flexWrap: 'wrap',
					backgroundColor: 'royalblue',
					padding: 10,
				}}>
				<View
					style={[
						styles.box,
						{
							borderWidth: 3,
							backgroundColor: '#041050',
							borderTopLeftRadius: 10,
						},
					]}>
					<Text style={{ fontWeight: 'bold', color: 'white' }}>
						borderTopLeftRadius: 10
					</Text>
				</View>
				<View
					style={[
						styles.box,
						{
							borderWidth: 3,
							backgroundColor: '#041050',
							marginTop: 2,
							borderTopRightRadius: 10,
						},
					]}>
					<Text style={{ fontWeight: 'bold', color: 'white' }}>
						borderTopRightRadius: 3
					</Text>
				</View>
				<View
					style={[
						styles.box,
						{
							borderWidth: 3,
							backgroundColor: '#041050',
							marginTop: 2,
							borderBottomLeftRadius: 10,
						},
					]}>
					<Text style={{ fontWeight: 'bold', color: 'white' }}>
						borderBottomLeftRadius: 10
					</Text>
				</View>
				<View
					style={[
						styles.box,
						{
							borderWidth: 3,
							backgroundColor: '#041050',
							marginTop: 2,
							marginLeft: 2,
							borderBottomRightRadius: 10,
						},
					]}>
					<Text style={{ fontWeight: 'bold', color: 'white' }}>
						borderBottomLeftRadius: 10
					</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	box: {
		padding: 15,
		justifyContent: 'center',
		alignItems: 'center',
	},
	red: {
		backgroundColor: 'red',
	},
	green: {
		backgroundColor: 'green',
	},
	blue: {
		backgroundColor: 'blue',
	},
	yellow: {
		backgroundColor: 'yellow',
	},
});
export default AppBorder;
