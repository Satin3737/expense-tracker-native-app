import {StyleSheet} from 'react-native';
import {colors} from '../../../const';

const styles = StyleSheet.create({
    loaderWrapper: fill => ({
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: 2,
        backgroundColor: fill ? colors.primary700 : colors.overlay
    })
});

export default styles;
