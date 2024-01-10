import {View} from 'react-native';
import ExpensesSummary from '../ExpensesSummary';
import ExpensesList from '../ExpensesList';
import styles from './styles';

const ExpensesOutput = ({expenses = [], period = ''}) => {
    return (
        <View style={styles.container}>
            <ExpensesSummary expenses={expenses} period={period} />
            <ExpensesList expenses={expenses} />
        </View>
    );
};

export default ExpensesOutput;
