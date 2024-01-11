import {TextInput, View} from 'react-native';
import styles from './styles';
import {useContext, useLayoutEffect} from 'react';
import IconButton from '../../components/ui/IconButton';
import {colors} from '../../const';
import CustomButton, {btnTypes} from '../../components/ui/CustomButton';
import {ExpensesContext} from '../../store/expenses-context';

const ManageExpensesScreen = ({route, navigation}) => {
    const {addExpense, updateExpense, deleteExpense} = useContext(ExpensesContext);

    const editedId = route.params?.id;
    const isEditing = !!editedId;

    const cancelHandler = () => {
        navigation.goBack();
    };

    const confirmHandler = () => {
        //placeholder
        const newData = {
            description: 'test',
            amount: 934.11,
            date: new Date()
        };
        isEditing ? updateExpense(editedId, newData) : addExpense(newData);
        navigation.goBack();
    };

    const deleteHandler = () => {
        deleteExpense(editedId);
        navigation.goBack();
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit expense' : 'Add expense'
        });
    }, [navigation, isEditing]);

    return (
        <View style={styles.screen}>
            <TextInput />
            <View style={styles.buttonsContainer}>
                <CustomButton label={isEditing ? 'Update' : 'Add'} onPress={confirmHandler} />
                <CustomButton label={'Cancel'} type={btnTypes.flat} onPress={cancelHandler} />
            </View>
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton icon={'trash'} color={colors.error500} size={36} onPress={deleteHandler} />
                </View>
            )}
        </View>
    );
};

export default ManageExpensesScreen;
