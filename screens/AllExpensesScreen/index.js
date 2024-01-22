import {useContext, useEffect} from 'react';
import {View} from 'react-native';
import ExpensesOutput from '../../components/ExpensesOutput';
import LoaderOverlay from '../../components/ui/LoaderOverlay';
import ErrorOverlay from '../../components/ui/errorOverlay';
import ExpensesService from '../../services/ExpensesService';
import {ExpensesContext} from '../../store/expenses-context';
import styles from './styles';

const AllExpensesScreen = () => {
    const {getApiExpense} = ExpensesService();
    const {expenses, setExpense} = useContext(ExpensesContext);
    const {data, loading, error} = expenses;
    const fetchExpenses = async () => setExpense(await getApiExpense());

    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <View style={styles.screen}>
            {error && <ErrorOverlay />}
            {loading && <LoaderOverlay />}
            <ExpensesOutput expenses={data} period={'Total'} />
        </View>
    );
};

export default AllExpensesScreen;
