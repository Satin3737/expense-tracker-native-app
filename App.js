import {View} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import ExpensesContextProvider from './store/expenses-context';
import Navigation from './navigation/Navigation';
import styles from './styles';

const App = () => {
    return (
        <View style={styles.screen}>
            <StatusBar style="light" />
            <ExpensesContextProvider>
                <Navigation />
            </ExpensesContextProvider>
        </View>
    );
};

export default App;
