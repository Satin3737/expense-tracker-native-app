import {Pressable, Text, View} from 'react-native';
import styles from './styles';
import {colors} from '../../../const';

export const btnTypes = {
    regular: 'regular',
    flat: 'flat'
};

const CustomButton = ({
    label = '',
    type = 'regular',
    onPress = () => {},
    buttonOuterStyles = [],
    buttonInnerStyles = [],
    buttonTextStyles = []
}) => {
    const isFlat = type === 'flat';

    return (
        <View style={[styles.buttonOuter, isFlat && styles.flatOuter, ...buttonOuterStyles]}>
            <Pressable
                style={({pressed}) => [
                    styles.buttonInner,
                    isFlat && styles.flatInner,
                    pressed && styles.pressed,
                    ...buttonInnerStyles
                ]}
                onPress={onPress}
                android_ripple={{color: colors.primary100}}
            >
                <Text style={[styles.text, isFlat && styles.flatText, ...buttonTextStyles]}>{label}</Text>
            </Pressable>
        </View>
    );
};

export default CustomButton;
