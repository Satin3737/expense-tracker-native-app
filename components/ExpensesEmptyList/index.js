import {Text, View} from 'react-native';
import styles from './styles';

const ExpensesEmptyList = () => {
    return (
        <View style={styles.empty}>
            <Text style={styles.emptyText}>There are no expenses here!</Text>
        </View>
    );
};

export default ExpensesEmptyList;
