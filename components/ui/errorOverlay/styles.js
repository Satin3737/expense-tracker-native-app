import {StyleSheet} from 'react-native';
import {colors} from '../../../const';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        zIndex: 2,
        backgroundColor: colors.primary700
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: colors.white,
        textAlign: 'center',
        marginBottom: 24
    },
    btn: {
        flex: 0
    }
});

export default styles;
