import {View} from 'react-native';
import ExpensesOutput from '../../components/ExpensesOutput';
import styles from './styles';

const AllExpensesScreen = () => {
    return (
        <View style={styles.screen}>
            <ExpensesOutput period={'Total'} />
        </View>
    );
};

export default AllExpensesScreen;
