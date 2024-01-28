import DateTimePicker from '@react-native-community/datetimepicker';
import {Text, View} from 'react-native';
import {getFormattedDate} from '../../../utils/helper';
import CustomButton from '../CustomButton';
import styles from './styles';

const CustomDatePicker = ({
    label = '',
    value = new Date(),
    onChange = () => {},
    showDatePicker = false,
    setShowDatePicker = () => {},
    wrapperStyles = [],
    labelStyles = [],
    dateOuterStyles = [],
    dateInnerStyles = [],
    dateTextStyles = []
}) => {
    return (
        <View style={[styles.wrapper, ...wrapperStyles]}>
            <Text style={[styles.label, ...labelStyles]}>{label}</Text>
            <CustomButton
                buttonOuterStyles={[styles.dateOuter, ...dateOuterStyles]}
                buttonInnerStyles={[styles.dateInner, ...dateInnerStyles]}
                buttonTextStyles={[styles.dateText, ...dateTextStyles]}
                label={getFormattedDate(value)}
                onPress={setShowDatePicker}
            />
            {showDatePicker && <DateTimePicker value={value} onChange={onChange} />}
        </View>
    );
};

export default CustomDatePicker;
