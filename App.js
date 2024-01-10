import {StatusBar} from 'expo-status-bar';
import {View} from 'react-native';
import styles from './styles';
import Navigation from './navigation/Navigation';

const App = () => {
    return (
        <View style={styles.screen}>
            <StatusBar style="light" />
            <Navigation />
        </View>
    );
};

export default App;
