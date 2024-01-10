import {Pressable, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import styles from './styles';
import {colors} from '../../../const';

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
