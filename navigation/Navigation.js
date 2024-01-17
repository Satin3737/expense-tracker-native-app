import {Ionicons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IconButton from '../components/ui/IconButton';
import {colors, screensParams} from '../const';
import AllExpensesScreen from '../screens/AllExpensesScreen';
import ManageExpensesScreen from '../screens/ManageExpensesScreen';
import RecentExpensesScreen from '../screens/RecentExpensesScreen';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
const {allScreen, recentScreen, manageScreen} = screensParams;

const generalHeadersStyles = {
    headerStyle: {
        backgroundColor: colors.primary500,
        borderColor: colors.white
    },
    headerTintColor: colors.white
};

const ExpensesBottom = () => {
    return (
        <BottomTab.Navigator
            screenOptions={({navigation}) => ({
                ...generalHeadersStyles,
                tabBarStyle: {
                    backgroundColor: colors.primary500,
                    borderColor: colors.white
                },
                tabBarActiveTintColor: colors.white,
                headerRight: ({tintColor}) => (
                    <IconButton
                        icon={'add'}
                        color={tintColor}
                        onPress={() => {
                            navigation.navigate(manageScreen.name);
                        }}
                    />
                )
            })}
        >
            <BottomTab.Screen
                name={allScreen.name}
                component={AllExpensesScreen}
                options={{
                    title: allScreen.title,
                    tabBarLabel: allScreen.title,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name={allScreen.icon} color={color} size={size} />
                    )
                }}
            />
            <BottomTab.Screen
                name={'recent'}
                component={RecentExpensesScreen}
                options={{
                    title: recentScreen.title,
                    tabBarLabel: recentScreen.title,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name={recentScreen.icon} color={color} size={size} />
                    )
                }}
            />
        </BottomTab.Navigator>
    );
};

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    ...generalHeadersStyles
                }}
            >
                <Stack.Screen name={'bottom'} component={ExpensesBottom} options={{headerShown: false}} />
                <Stack.Screen
                    name={manageScreen.name}
                    component={ManageExpensesScreen}
                    options={{
                        title: manageScreen.title,
                        presentation: 'modal'
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
