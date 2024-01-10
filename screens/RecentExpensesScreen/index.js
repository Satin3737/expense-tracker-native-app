import {View} from 'react-native';
import ExpensesOutput from '../../components/ExpensesOutput';

const RecentExpensesScreen = () => {
    return (
        <View>
            <ExpensesOutput period={'Last 7 days'} />
        </View>
    );
};

export default RecentExpensesScreen;
