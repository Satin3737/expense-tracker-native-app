import {Text, TextInput, View} from 'react-native';
import styles from './styles';

const CustomInput = ({
    label = '',
    validateMessage = '',
    isValid = true,
    wrapperStyles = [],
    labelStyles = [],
    errorStyles = [],
    inputStyles = [],
    textInputConfig = {}
}) => {
    const inputBasicStyles = textInputConfig?.multiline
        ? [styles.input(isValid), styles.inputMultiline]
        : [styles.input(isValid)];

    return (
        <View style={[styles.wrapper, ...wrapperStyles]}>
            <Text style={[styles.label, ...labelStyles]}>{label}</Text>
            <TextInput style={[...inputBasicStyles, ...inputStyles]} {...textInputConfig} />
            {!isValid && <Text style={[styles.error, ...errorStyles]}>{validateMessage}</Text>}
        </View>
    );
};

export default CustomInput;
