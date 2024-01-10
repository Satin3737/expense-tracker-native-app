import {View} from 'react-native';
import ExpensesOutput from '../../components/ExpensesOutput';
import styles from './styles';
import {ExpensesContext} from '../../store/expenses-context';
import {useContext} from 'react';

const AllExpensesScreen = () => {
    const {expenses} = useContext(ExpensesContext);

    return (
        <View style={styles.screen}>
            <ExpensesOutput expenses={expenses} period={'Total'} />
        </View>
    );
};

export default AllExpensesScreen;
