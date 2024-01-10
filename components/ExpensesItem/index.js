import {Pressable, Text, View} from 'react-native';
import styles from './styles';
import {getFormattedDate} from '../../utils/helper';
import {useNavigation} from '@react-navigation/native';
import {screensParams} from '../../const';

const ExpensesItem = ({description, amount, date}) => {
    const navigation = useNavigation();
    const expensePressHandler = () => {
        navigation.navigate(screensParams.manageScreen.name);
    };

    return (
        <Pressable
            style={({pressed}) => [styles.expenseItem, pressed && styles.pressed]}
            onPress={expensePressHandler}
        >
            <View>
                <Text style={[styles.textBase, styles.description]}>{description}</Text>
                <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amountItem}>${amount.toFixed(2)}</Text>
            </View>
        </Pressable>
    );
};

export default ExpensesItem;
