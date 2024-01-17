import {useState} from 'react';
import {Text, View} from 'react-native';
import {getIsoDate} from '../../utils/helper';
import CustomButton, {btnTypes} from '../ui/CustomButton';
import CustomInput from '../ui/CustomInput';
import styles from './styles';

const ExpensesForm = ({submitLabel, onSubmit, onCancel, currentExpense}) => {
    const [formState, setFormState] = useState({
        amount: {
            value: currentExpense ? currentExpense?.amount.toString() : '',
            isValid: true
        },
        date: {
            value: currentExpense ? getIsoDate(currentExpense?.date) : '',
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
            date: new Date(formState.date.value),
            description: formState.description.value
        };

        const amountIsValid = !isNaN(data.amount) && data.amount > 0;
        const dateIsValid = data.date.toString() !== 'Invalid Date';
        const descriptionIsValid = data.description.trim().length > 0;

        if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
            setFormState(state => {
                return {
                    amount: {...state.amount, isValid: amountIsValid},
                    date: {...state.date, isValid: dateIsValid},
                    description: {...state.description, isValid: descriptionIsValid}
                };
            });

            return;
        }

        onSubmit(data);
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
                <CustomInput
                    label={'Date'}
                    validateMessage={'Please enter valid date!'}
                    isValid={formState.date.isValid}
                    wrapperStyles={[styles.input]}
                    textInputConfig={{
                        keyboardType: 'decimal-pad',
                        placeholder: 'YYYY-MM-DD',
                        maxLength: 10,
                        onChangeText: value => onInput('date', value),
                        value: formState.date.value
                    }}
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
