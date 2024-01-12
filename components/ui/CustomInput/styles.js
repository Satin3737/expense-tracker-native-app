import {StyleSheet} from 'react-native';
import {colors} from '../../../const';

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 12
    },
    label: {
        fontSize: 12,
        color: colors.primary100,
        marginBottom: 4
    },
    input: {
        backgroundColor: colors.primary100,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 8,
        fontSize: 16,
        color: colors.primary700
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
});

export default styles;
