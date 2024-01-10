import {StyleSheet} from 'react-native';
import {colors} from '../../const';

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        elevation: 4,
        shadowColor: colors.gray500,
        shadowRadius: 4,
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.4
    },
    textBase: {
        color: colors.primary50
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 4,
        minWidth: 80
    },
    amountItem: {
        fontWeight: 'bold',
        color: colors.primary500
    }
});

export default styles;
