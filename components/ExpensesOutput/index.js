import {View} from 'react-native';
import ExpensesSummary from '../ExpensesSummary';
import ExpensesList from '../ExpensesList';

const dummyExpenses = [
    {
        id: 'e1',
        description: 'Book',
        amount: 59.99,
        date: new Date('2021-12-19')
    },
    {
        id: 'e2',
        description: 'Another book',
        amount: 39.99,
        date: new Date('2022-12-19')
    },
    {
        id: 'e3',
        description: 'Some food',
        amount: 19.99,
        date: new Date('2021-12-31')
    }
];

const ExpensesOutput = ({expenses = dummyExpenses, period = ''}) => {
    return (
        <View>
            <ExpensesSummary period={period} expenses={expenses} />
            <ExpensesList expenses={expenses} />
        </View>
    );
};

export default ExpensesOutput;
