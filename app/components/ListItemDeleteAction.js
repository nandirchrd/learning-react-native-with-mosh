import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Icon from './Icon';

const ListItemDeleteAction = ({ onPress }) => {
	return (
		<TouchableOpacity
			onPress={onPress}
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				padding: 5,
				backgroundColor: 'red',
			}}>
			<Icon name='trash-can' backgroundColor='red' />
		</TouchableOpacity>
	);
};

export default ListItemDeleteAction;
