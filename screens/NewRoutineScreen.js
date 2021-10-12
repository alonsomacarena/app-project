import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import COLORS  from '../constants/Colors'
import { addRoutine } from '../store/actions/routine.action';
import { useDispatch } from 'react-redux';

const NewRoutineScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')

    const handleTitleChange = text => setTitle(text);

    const handleSave = () => {
        dispatch(addRoutine(title, turno, horario, step1, step2, step3, step4, otros));
        navigation.navigate('RoutineScreen');
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Titulo</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={handleTitleChange}
                />
                


                <Button
                    title="Grabar Rutina"
                    color={COLORS.accent}
                    onPress={handleSave}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
    },
})

export default NewRoutineScreen;