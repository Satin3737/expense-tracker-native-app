import {useContext, useEffect} from 'react';
import {View} from 'react-native';
import ExpensesOutput from '../../components/ExpensesOutput';
import {ExpensesContext} from '../../store/expenses-context';
import {getExpense} from '../../utils/http';
import styles from './styles';

const AllExpensesScreen = () => {
    const {expenses, setExpense} = useContext(ExpensesContext);
    const fetchExpenses = async () => setExpense(await getExpense());

    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <View style={styles.screen}>
            <ExpensesOutput expenses={expenses} period={'Total'} />
        </View>
    );
};

export default AllExpensesScreen;
