import {ActivityIndicator, View} from 'react-native';
import {colors} from '../../../const';
import styles from './styles';

const LoaderOverlay = ({fill = true, size = 'large', color = colors.white}) => {
    return (
        <View style={styles.loaderWrapper(fill)}>
            <ActivityIndicator size={size} color={color}></ActivityIndicator>
        </View>
    );
};

export default LoaderOverlay;
