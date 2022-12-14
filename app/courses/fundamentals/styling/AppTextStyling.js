import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const AppTextStyling = () => {
	return (
		<View
			style={{
				width: '90%',
				alignSelf: 'center',
				marginTop: 20,
			}}>
			<Text
				style={{
					fontWeight: 'bold',
					fontSize: 25,
					textAlign: 'center',
				}}>
				Text Styling
			</Text>
			<View
				style={{
					backgroundColor: 'royalblue',
					marginTop: 20,
					padding: 10,
				}}>
				<Text
					style={{
						fontFamily: 'Roboto',
						fontStyle: 'italic',
						fontSize: 25,
						fontWeight: 'bold',
						color: 'orange',
						textTransform: 'capitalize',
						textAlign: 'left',
						lineHeight: 30,
						textDecorationLine: 'line-through',
					}}>
					App Text Styling sadasdash ksadkjhasjk daskjhsadjk hdkjashd
					jkasdjkhaskj daskjhd kshdjaskhd askjhdasjkhd
					kjshdjakshdjkashfkjhasdkjhsakjd kasgdkjasgdjkgasjd asjkdg
					askjdasjkdgaskj gdkjasgdkj asdggk
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default AppTextStyling;
