import {Text, View} from 'react-native';
import styles from './styles';

const ExpensesSummary = ({period = '', expenses = []}) => {
    if (expenses.length === 0) {
        return null;
    }

    const expensesSum = expenses.reduce((sum, expense) => sum + expense.amount, 0).toFixed(2);

    return (
        <View style={styles.container}>
            <Text style={styles.period}>{period}:</Text>
            <Text style={styles.sum}>${expensesSum}</Text>
        </View>
    );
};

export default ExpensesSummary;
