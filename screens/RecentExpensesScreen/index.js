import {useContext, useEffect} from 'react';
import {View} from 'react-native';
import ExpensesOutput from '../../components/ExpensesOutput';
import LoaderOverlay from '../../components/ui/LoaderOverlay';
import ExpensesService from '../../services/ExpensesService';
import {ExpensesContext} from '../../store/expenses-context';
import {getDateMinusDays} from '../../utils/helper';
import styles from './styles';

const RecentExpensesScreen = () => {
    const {getApiExpense} = ExpensesService();
    const {expenses, setExpense} = useContext(ExpensesContext);
    const {data, loading} = expenses;

    const fetchExpenses = async () => {
        setExpense(await getApiExpense());
    };

    const recentExpenses = data.filter(expense => {
        const today = new Date();
        const dateSevenDaysAgo = getDateMinusDays(today, 7);

        return expense.date > dateSevenDaysAgo;
    });

    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <View style={styles.screen}>
            {loading && <LoaderOverlay />}
            <ExpensesOutput expenses={recentExpenses} period={'Last 7 days'} />
        </View>
    );
};

export default RecentExpensesScreen;
