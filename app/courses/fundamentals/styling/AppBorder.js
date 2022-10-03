import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const AppBorder = () => {
	return (
		<View style={{ marginTop: 5 }}>
			<Text
				style={{
					fontWeight: 'bold',
					textAlign: 'center',
					padding: 10,
					fontSize: 20,
				}}>
				BORDER
			</Text>
			<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
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
			<Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
				Border Width
			</Text>
			<View
				style={{
					flexDirection: 'row',
					marginTop: 5,
					flexWrap: 'wrap',
				}}>
				<View
					style={[
						styles.box,
						{
							borderTopWidth: 2,
							backgroundColor: 'gray',
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
							backgroundColor: 'gray',
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
							backgroundColor: 'gray',
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
							backgroundColor: 'gray',
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
			<Text style={{ textAlign: 'center', fontWeight: 'bold' }}>
				Border Radius
			</Text>
			<View
				style={{
					flexDirection: 'row',
					marginTop: 5,
					flexWrap: 'wrap',
				}}>
				<View
					style={[
						styles.box,
						{
							borderWidth: 3,
							backgroundColor: 'gray',
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
							backgroundColor: 'gray',
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
							backgroundColor: 'gray',
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
							backgroundColor: 'gray',
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
