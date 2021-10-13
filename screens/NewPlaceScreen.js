import * as placesActions from '../store/actions/places.actions'

import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useCallback, useState } from 'react'

import COLORS  from '../constants/Colors'
import { useDispatch } from 'react-redux'

const NewPlaceScreen = ({navigation, route}) => {
    const dispatch = useDispatch()
    const [text, onChangeText] = useState('')


    const onHandlerSave = () => {
        dispatch(placesActions.addPlace(text))
        navigation.goBack()
    }


    return (
        <ScrollView>
            <View style={styles.container}> 
                <Text style={styles.label}>Titulo</Text>
                <TextInput 
                    style={styles.input}
                    onChangeText={onChangeText}
                    value={text}
                    />
                <View style={styles.footer}>
                    <Button title="Grabar Direccion" color={COLORS.text} onPress={onHandlerSave} />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30
    },
    label: {
        fontSize: 18,
        marginBottom: 16
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4
    },
    footer: {
        marginTop: 42
    }
})

export default NewPlaceScreen

