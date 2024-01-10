import {FlatList} from 'react-native';
import ExpensesItem from '../ExpensesItem';
import styles from './styles';

const ExpensesList = ({expenses = []}) => {
    return (
        <FlatList
            style={styles.list}
            data={expenses}
            keyExtractor={item => item.id}
            renderItem={({item}) => <ExpensesItem {...item} />}
        />
    );
};

export default ExpensesList;
