import {Pressable, Text, View} from 'react-native';
import styles from './styles';
import {getFormattedDate} from '../../utils/helper';

const ExpensesItem = ({description, amount, date}) => {
    return (
        <Pressable>
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>{description}</Text>
                    <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amountItem}>${amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default ExpensesItem;
