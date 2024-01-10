import {FlatList} from 'react-native';
import ExpensesItem from '../ExpensesItem';

const ExpensesList = ({expenses = []}) => {
    return (
        <FlatList
            data={expenses}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ExpensesItem {...item} />}
        />
    );
};

export default ExpensesList;
