import {View} from 'react-native';
import ExpensesOutput from '../../components/ExpensesOutput';
import styles from './styles';

const RecentExpensesScreen = () => {
    return (
        <View style={styles.screen}>
            <ExpensesOutput period={'Last 7 days'} />
        </View>
    );
};

export default RecentExpensesScreen;
