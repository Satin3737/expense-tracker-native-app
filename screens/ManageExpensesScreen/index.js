import {useContext, useLayoutEffect} from 'react';
import {View} from 'react-native';
import ExpensesForm from '../../components/ExpensesForm';
import IconButton from '../../components/ui/IconButton';
import LoaderOverlay from '../../components/ui/LoaderOverlay';
import ErrorOverlay from '../../components/ui/errorOverlay';
import {colors} from '../../const';
import ExpensesService from '../../services/ExpensesService';
import {ExpensesContext} from '../../store/expenses-context';
import styles from './styles';

const ManageExpensesScreen = ({route, navigation}) => {
    const {addApiExpense, deleteApiExpense, updateApiExpense} = ExpensesService();
    const {addExpense, updateExpense, deleteExpense, expenses} = useContext(ExpensesContext);
    const {data, loading, error} = expenses;
    const editedId = route.params?.id;
    const isEditing = !!editedId;
    const currentExpense = data.find(expense => expense.id === editedId);

    const onCancel = () => {
        navigation.goBack();
    };

    const onSubmit = async data => {
        if (isEditing) {
            await updateApiExpense(editedId, data);
            updateExpense(editedId, data);
        } else {
            const id = await addApiExpense(data);
            addExpense({...data, id});
        }
        navigation.goBack();
    };

    const onDelete = async () => {
        await deleteApiExpense(editedId);
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
            {error && <ErrorOverlay />}
            {loading && <LoaderOverlay fill={false} />}
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
