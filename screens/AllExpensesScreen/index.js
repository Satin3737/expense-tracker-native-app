import {useContext, useEffect} from 'react';
import {View} from 'react-native';
import ExpensesOutput from '../../components/ExpensesOutput';
import LoaderOverlay from '../../components/ui/LoaderOverlay';
import ExpensesService from '../../services/ExpensesService';
import {ExpensesContext} from '../../store/expenses-context';
import styles from './styles';

const AllExpensesScreen = () => {
    const {getApiExpense} = ExpensesService();
    const {expenses, setExpense} = useContext(ExpensesContext);
    const {data, loading} = expenses;
    const fetchExpenses = async () => setExpense(await getApiExpense());

    useEffect(() => {
        fetchExpenses();
    }, []);

    return (
        <View style={styles.screen}>
            {loading && <LoaderOverlay />}
            <ExpensesOutput expenses={data} period={'Total'} />
        </View>
    );
};

export default AllExpensesScreen;
