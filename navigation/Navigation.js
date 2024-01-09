import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllExpensesScreen from '../screens/AllExpensesScreen';
import ManageExpensesScreen from '../screens/ManageExpensesScreen';
import RecentExpensesScreen from '../screens/RecentExpensesScreen';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const ExpensesBottom = () => {
    return (
        <BottomTab.Navigator>
            <BottomTab.Screen name={'all'} component={AllExpensesScreen} />
            <BottomTab.Screen name={'recent'} component={RecentExpensesScreen} />
        </BottomTab.Navigator>
    );
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'bottom'} component={ExpensesBottom} />
                <Stack.Screen name={'manage'} component={ManageExpensesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
