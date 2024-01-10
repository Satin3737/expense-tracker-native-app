import {StyleSheet} from 'react-native';
import {colors} from '../../const';

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: colors.primary50,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    period: {
        fontSize: 12,
        color: colors.primary400
    },
    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.primary500
    }
});

export default styles;
