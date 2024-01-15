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
    error: {
        fontSize: 12,
        marginTop: 2,
        color: colors.error500
    },
    input: isValid => ({
        backgroundColor: isValid ? colors.primary100 : colors.error50,
        borderColor: isValid ? 'transparent' : colors.error500,
        borderWidth: 1,
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 8,
        fontSize: 16,
        color: colors.primary700
    }),
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
});

export default styles;
