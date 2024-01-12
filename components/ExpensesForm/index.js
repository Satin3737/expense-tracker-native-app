import {Text, View} from 'react-native';
import styles from './styles';
import CustomInput from '../ui/CustomInput';

const ExpensesForm = () => {
    const amountInputHandler = () => {};
    const dateInputHandler = () => {};

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.row}>
                <CustomInput
                    label={'Amount'}
                    wrapperStyles={[styles.input]}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: amountInputHandler
                    }}
                />
                <CustomInput
                    label={'Date'}
                    wrapperStyles={[styles.input]}
                    textInputConfig={{
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: dateInputHandler
                    }}
                />
            </View>
            <CustomInput
                label={'Description'}
                textInputConfig={{
                    multiline: true
                }}
            />
        </View>
    );
};

export default ExpensesForm;
