import {useContext, useLayoutEffect} from 'react';
import {View} from 'react-native';
import ExpensesForm from '../../components/ExpensesForm';
import IconButton from '../../components/ui/IconButton';
import {colors} from '../../const';
import {ExpensesContext} from '../../store/expenses-context';
import {postExpense} from '../../utils/http';
import styles from './styles';

const ManageExpensesScreen = ({route, navigation}) => {
    const {addExpense, updateExpense, deleteExpense, expenses} = useContext(ExpensesContext);
    const editedId = route.params?.id;
    const isEditing = !!editedId;
    const currentExpense = expenses.find(expense => expense.id === editedId);

    const onCancel = () => {
        navigation.goBack();
    };

    const onSubmit = async data => {
        if (isEditing) {
            updateExpense(editedId, data);
        } else {
            const id = await postExpense(data);
            addExpense({...data, id});
        }
        navigation.goBack();
    };

    const onDelete = () => {
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
            <ExpensesForm
                submitLabel={isEditing ? 'Update' : 'Add'}
                onSubmit={onSubmit}
                onCancel={onCancel}
                currentExpense={currentExpense}
            />
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton icon={'trash'} color={colors.error500} size={36} onPress={onDelete} />
                </View>
            )}
        </View>
    );
};

export default ManageExpensesScreen;
