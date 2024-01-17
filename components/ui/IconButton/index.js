import {Ionicons} from '@expo/vector-icons';
import {Pressable, View} from 'react-native';
import {colors} from '../../../const';
import styles from './styles';

const IconButton = ({buttonStyles = [], icon = '', color = colors.white, size = 24, onPress = () => {}}) => {
    return (
        <Pressable
            style={({pressed}) => [styles.button, ...buttonStyles, pressed && styles.pressed]}
            onPress={onPress}
        >
            <View>
                <Ionicons name={icon} color={color} size={size} />
            </View>
        </Pressable>
    );
};

export default IconButton;
