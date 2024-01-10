import {Text, View} from 'react-native';

const ExpensesItem = ({description}) => {
    return (
        <View>
            <Text>{description}</Text>
        </View>
    );
};

export default ExpensesItem;
