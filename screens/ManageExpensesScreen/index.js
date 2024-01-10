import {View} from 'react-native';
import styles from './styles';
import {useLayoutEffect} from 'react';
import IconButton from '../../components/ui/IconButton';
import {colors} from '../../const';
import CustomButton, {btnTypes} from '../../components/ui/CustomButton';

const ManageExpensesScreen = ({route, navigation}) => {
    const editedId = route.params?.id;
    const isEditing = !!editedId;

    const cancelHandler = () => {
        navigation.goBack();
    };

    const confirmHandler = () => {
        navigation.goBack();
    };

    const deleteHandler = () => {
        navigation.goBack();
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit expense' : 'Add expense'
        });
    }, [navigation, isEditing]);

    return (
        <View style={styles.screen}>
            <View style={styles.buttonsContainer}>
                <CustomButton label={isEditing ? 'Update' : 'Add'} onPress={confirmHandler} />
                <CustomButton label={'Cancel'} type={btnTypes.flat} onPress={cancelHandler} />
            </View>
            {isEditing && (
                <View style={styles.deleteContainer}>
                    <IconButton icon={'trash'} color={colors.error500} size={36} onPress={deleteHandler} />
                </View>
            )}
        </View>
    );
};

export default ManageExpensesScreen;
