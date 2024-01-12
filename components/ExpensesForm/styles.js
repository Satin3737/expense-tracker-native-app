import {StyleSheet} from 'react-native';
import {colors} from '../../const';

const styles = StyleSheet.create({
    form: {
        marginBottom: 24
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
    }
});

export default styles;
