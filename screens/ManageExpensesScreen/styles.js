import {StyleSheet} from 'react-native';
import {colors} from '../../const';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 16,
        backgroundColor: colors.primary800
    },
    deleteContainer: {
        marginTop: 16,
        paddingTop: 8,
        borderTopColor: colors.primary200,
        borderTopWidth: 2,
        alignItems: 'center'
    }
});

export default styles;
