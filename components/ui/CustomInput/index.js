import {Text, TextInput, View} from 'react-native';
import styles from './styles';

const CustomInput = ({
    label = '',
    wrapperStyles = [],
    labelStyles = [],
    inputStyles = [],
    textInputConfig = {}
}) => {
    const inputBasicStyles = textInputConfig?.multiline
        ? [styles.input, styles.inputMultiline]
        : [styles.input];

    return (
        <View style={[styles.wrapper, ...wrapperStyles]}>
            <Text style={[styles.label, ...labelStyles]}>{label}</Text>
            <TextInput style={[...inputBasicStyles, ...inputStyles]} {...textInputConfig} />
        </View>
    );
};

export default CustomInput;
