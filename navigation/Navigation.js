import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AllExpensesScreen from '../screens/AllExpensesScreen';
import ManageExpensesScreen from '../screens/ManageExpensesScreen';
import RecentExpensesScreen from '../screens/RecentExpensesScreen';
import {Ionicons} from '@expo/vector-icons';
import {colors, screensParams} from '../const';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

const ExpensesBottom = () => {
    return (
        <BottomTab.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: colors.primary500},
                headerTintColor: colors.white,
                tabBarStyle: {backgroundColor: colors.primary500},
                tabBarActiveTintColor: colors.accent500
            }}
        >
            <BottomTab.Screen
                name={'all'}
                component={AllExpensesScreen}
                options={{
                    title: screensParams.all.title,
                    tabBarLabel: screensParams.all.title,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name={screensParams.all.icon} color={color} size={size} />
                    )
                }}
            />
            <BottomTab.Screen
                name={'recent'}
                component={RecentExpensesScreen}
                options={{
                    title: screensParams.recent.title,
                    tabBarLabel: screensParams.recent.title,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name={screensParams.recent.icon} color={color} size={size} />
                    )
                }}
            />
        </BottomTab.Navigator>
    );
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'bottom'} component={ExpensesBottom} options={{headerShown: false}} />
                <Stack.Screen name={'manage'} component={ManageExpensesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
