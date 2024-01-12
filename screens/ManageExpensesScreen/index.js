import {View} from 'react-native';
import styles from './styles';
import {useContext, useLayoutEffect} from 'react';
import IconButton from '../../components/ui/IconButton';
import {colors} from '../../const';
import {ExpensesContext} from '../../store/expenses-context';
import ExpensesForm from '../../components/ExpensesForm';

const ManageExpensesScreen = ({route, navigation}) => {
    const {addExpense, updateExpense, deleteExpense} = useContext(ExpensesContext);

    const editedId = route.params?.id;
    const isEditing = !!editedId;

    const onCancel = () => {
        navigation.goBack();
    };

    const onSubmit = data => {
        isEditing ? updateExpense(editedId, data) : addExpense(data);
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
