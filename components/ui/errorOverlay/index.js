import {useContext} from 'react';
import {Text, View} from 'react-native';
import {ExpensesContext} from '../../../store/expenses-context';
import CustomButton, {btnTypes} from '../CustomButton';
import styles from './styles';

const ErrorOverlay = ({errorMessage = 'Something goes wrong!'}) => {
    const {toggleError} = useContext(ExpensesContext);

    const onPress = () => toggleError(false);

    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>{errorMessage}</Text>
            <CustomButton
                label={'Okay'}
                type={btnTypes.flat}
                onPress={onPress}
                buttonOuterStyles={[styles.btn]}
            />
        </View>
    );
};

export default ErrorOverlay;
