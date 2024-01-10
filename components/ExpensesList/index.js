import {FlatList, Text, View} from 'react-native';
import ExpensesItem from '../ExpensesItem';

const ExpensesList = ({expenses = []}) => {
    return (
        <View>
            <FlatList
                data={expenses}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                    const {id, description, amount, date} = item;

                    return <ExpensesItem description={description} />;
                }}
            />
        </View>
    );
};

export default ExpensesList;
