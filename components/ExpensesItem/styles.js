import {StyleSheet} from 'react-native';
import {colors} from '../../const';

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
        elevation: 4,
        shadowColor: colors.gray500,
        shadowRadius: 4,
        shadowOffset: {width: 2, height: 2},
        shadowOpacity: 0.4,
        backgroundColor: colors.primary500,
        borderRadius: 8,
        gap: 16,
        alignItems: 'center'
    },
    textBase: {
        color: colors.primary50
    },
    infoContainer: {
        flexShrink: 1
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
        minWidth: 80,
        minHeight: 40
    },
    amountItem: {
        fontWeight: 'bold',
        color: colors.primary500
    },
    pressed: {
        opacity: 0.8
    }
});

export default styles;
