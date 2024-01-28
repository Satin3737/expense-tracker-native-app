import {StyleSheet} from 'react-native';
import {colors} from '../../../const';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        marginBottom: 12
    },
    label: {
        fontSize: 12,
        color: colors.primary100,
        marginBottom: 4
    },
    dateOuter: {
        backgroundColor: colors.primary100,
        borderRadius: 8
    },
    dateInner: {
        padding: 8
    },
    dateText: {
        fontSize: 16,
        color: colors.primary700,
        textAlign: 'left'
    }
});

export default styles;
