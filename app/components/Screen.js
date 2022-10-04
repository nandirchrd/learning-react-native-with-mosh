import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Screen = ({ children, style }) => {
	return (
		<SafeAreaView style={[style, styles.screen]}>{children}</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	screen: {
		paddingTop: Constants.statusBarHeight,
		flex: 1,
	},
});
export default Screen;
