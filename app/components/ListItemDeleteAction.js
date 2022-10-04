import { TouchableWithoutFeedback } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ListItemDeleteAction = ({ onPress }) => {
	return (
		<TouchableWithoutFeedback onPress={onPress}>
			<MaterialCommunityIcons name='trash-can' size={20} color='white' />
		</TouchableWithoutFeedback>
	);
};

export default ListItemDeleteAction;
