import {Text, View} from 'react-native';

const ExpensesSummary = ({period = '', expenses = []}) => {
    const expensesSum = expenses.reduce((sum, expense) => sum + expense.amount, 0).toFixed(2);

    return (
        <View>
            <Text>{period}</Text>
            <Text>${expensesSum}</Text>
        </View>
    );
};

export default ExpensesSummary;
