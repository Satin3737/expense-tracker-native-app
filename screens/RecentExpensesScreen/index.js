import {useContext, useEffect} from 'react';
import {View} from 'react-native';
import ExpensesOutput from '../../components/ExpensesOutput';
import {ExpensesContext} from '../../store/expenses-context';
import {getDateMinusDays} from '../../utils/helper';
import {getExpense} from '../../utils/http';
import styles from './styles';

const RecentExpensesScreen = () => {
    const {expenses, setExpense} = useContext(ExpensesContext);
    const fetchExpenses = async () => setExpense(await getExpense());

    const recentExpenses = expenses.filter(expense => {
        const today = new Date();
        const dateSevenDaysAgo = getDateMinusDays(today, 7);

        return expense.date > dateSevenDaysAgo;
    });

    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <View style={styles.screen}>
            <ExpensesOutput expenses={recentExpenses} period={'Last 7 days'} />
        </View>
    );
};

export default RecentExpensesScreen;
