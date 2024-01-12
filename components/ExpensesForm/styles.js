import {StyleSheet} from 'react-native';
import {colors} from '../../const';

const styles = StyleSheet.create({
    form: {
        marginBottom: 4
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        marginTop: 8,
        marginBottom: 16,
        textAlign: 'center'
    },
    row: {
        flexDirection: 'row',
        gap: 12
    },
    input: {
        flex: 1
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
        marginTop: 24
    }
});

export default styles;
