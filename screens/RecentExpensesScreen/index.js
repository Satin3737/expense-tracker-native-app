import {View} from 'react-native';
import ExpensesOutput from '../../components/ExpensesOutput';
import styles from './styles';
import {ExpensesContext} from '../../store/expenses-context';
import {useContext} from 'react';
import {getDateMinusDays} from '../../utils/helper';

const RecentExpensesScreen = () => {
    const {expenses} = useContext(ExpensesContext);
    const recentExpenses = expenses.filter(expense => {
        const today = new Date();
        const dateSevenDaysAgo = getDateMinusDays(today, 7);

        return expense.date > dateSevenDaysAgo;
    });

    return (
        <View style={styles.screen}>
            <ExpensesOutput expenses={recentExpenses} period={'Last 7 days'} />
        </View>
    );
};

export default RecentExpensesScreen;
