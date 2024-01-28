import {useState} from 'react';
import {Text, View} from 'react-native';
import CustomButton, {btnTypes} from '../ui/CustomButton';
import CustomDatePicker from '../ui/CustomDatePicker';
import CustomInput from '../ui/CustomInput';
import styles from './styles';

const ExpensesForm = ({submitLabel, onSubmit, onCancel, currentExpense}) => {
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [formState, setFormState] = useState({
        date: {
            value: currentExpense ? currentExpense?.date : new Date()
        },
        amount: {
            value: currentExpense ? currentExpense?.amount.toString() : '',
            isValid: true
        },
        description: {
            value: currentExpense ? currentExpense?.description : '',
            isValid: true
        }
    });

    const formSubmit = () => {
        const data = {
            amount: +formState.amount.value,
            date: formState.date.value,
            description: formState.description.value
        };

        const amountIsValid = !isNaN(data.amount) && data.amount > 0;
        const descriptionIsValid = data.description.trim().length > 0;

        if (!amountIsValid || !descriptionIsValid) {
            setFormState(state => {
                return {
                    amount: {...state.amount, isValid: amountIsValid},
                    date: {...state.date},
                    description: {...state.description, isValid: descriptionIsValid}
                };
            });

            return;
        }

        onSubmit(data);
    };

    const onDateChange = (e, value) => {
        setShowDatePicker(false);
        setFormState(state => ({...state, date: {value}}));
    };

    const onInput = (input, value) => setFormState(state => ({...state, [input]: {value, isValid: true}}));

    return (
        <View style={styles.form}>
            <Text style={styles.title}>Your Expense</Text>
            <View style={styles.row}>
                <CustomInput
                    label={'Amount'}
                    validateMessage={'Please enter valid amount!'}
                    isValid={formState.amount.isValid}
                    wrapperStyles={[styles.input]}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        onChangeText: value => onInput('amount', value),
                        value: formState.amount.value
                    }}
                />
                <CustomDatePicker
                    label={'Date'}
                    value={formState.date.value}
                    onChange={onDateChange}
                    showDatePicker={showDatePicker}
                    setShowDatePicker={() => setShowDatePicker(true)}
                />
            </View>
            <CustomInput
                validateMessage={'Please enter valid description!'}
                isValid={formState.description.isValid}
                label={'Description'}
                textInputConfig={{
                    multiline: true,
                    onChangeText: value => onInput('description', value),
                    value: formState.description.value
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
