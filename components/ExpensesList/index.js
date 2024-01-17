import {FlatList} from 'react-native';
import ExpensesEmptyList from '../ExpensesEmptyList';
import ExpensesItem from '../ExpensesItem';
import styles from './styles';

const ExpensesList = ({expenses = []}) => {
    return (
        <FlatList
            contentContainerStyle={styles.list}
            data={expenses}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ExpensesItem {...item} />}
            ListEmptyComponent={<ExpensesEmptyList />}
        />
    );
};

export default ExpensesList;
