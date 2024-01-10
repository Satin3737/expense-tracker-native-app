import {View} from 'react-native';
import ExpensesOutput from '../../components/ExpensesOutput';

const AllExpensesScreen = () => {
    return (
        <View>
            <ExpensesOutput period={'Total'} />
        </View>
    );
};

export default AllExpensesScreen;
