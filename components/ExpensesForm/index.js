import {Text, View} from 'react-native';
import styles from './styles';
import CustomInput from '../ui/CustomInput';
import {useState} from 'react';
import CustomButton, {btnTypes} from '../ui/CustomButton';

const ExpensesForm = ({submitLabel, onSubmit, onCancel}) => {
    const [formData, setFormData] = useState({
        amount: '',
        date: '',
        description: ''
    });

    const formSubmit = () => {
        const data = {
            amount: +formData.amount,
            date: new Date(formData.date),
            description: formData.description
        };
        onSubmit(data);
    };

    const onInput = (input, val) => setFormData(state => ({...state, [input]: val}));

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.row}>
                <CustomInput
                    label={'Amount'}
                    wrapperStyles={[styles.input]}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: val => onInput('amount', val),
                        value: formData.amount
                    }}
                />
                <CustomInput
                    label={'Date'}
                    wrapperStyles={[styles.input]}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: val => onInput('date', val),
                        value: formData.date
                    }}
                />
            </View>
            <CustomInput
                label={'Description'}
                textInputConfig={{
                    multiline: true,
                    onChangeText: val => onInput('description', val),
                    value: formData.description
                }}
            />
            <View style={styles.buttonsContainer}>
                <CustomButton label={submitLabel} onPress={formSubmit} />
                <CustomButton label={'Cancel'} type={btnTypes.flat} onPress={onCancel} />
            </View>
        </View>
    );
};

export default ExpensesForm;
