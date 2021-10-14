import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, } from 'react-native'
import React, { useState } from 'react'

import { Button } from 'react-native-elements';
import COLORS  from '../constants/Colors'
import ImageSelector from '../components/ImageSelector';
import { addDiary } from '../store/actions/diary.actions';
import { useDispatch } from 'react-redux';

const NewDiaryEntryScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [image, setImage] = useState();
    const [comment, setComment] = useState("")

    const handleTitleChange = text => setTitle(text);
    const handleCommentChange = texts => setComment(texts);


    const handleSave = () => {
        dispatch(addDiary(title, image, comment));
        navigation.navigate('DiariesScreen');
    }

    const handlePickImage = (uri) => {
        setImage(uri);
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <Text style={styles.label}>Titulo</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={handleTitleChange}
                />

                <ImageSelector onImage={handlePickImage} />
                <Text style={styles.label}>Comentarios </Text>
                <TouchableWithoutFeedback>
                <TextInput
                    style={styles.input2}
                    value={comment}
                    onChangeText={handleCommentChange}
                />
</TouchableWithoutFeedback>
                <Button
                    title="GUARDAR"
                    onPress={handleSave}
                    buttonStyle={styles.button}
                />
            </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: "10%",
      
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
        fontFamily: "kaisei-Medium"
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
        fontFamily: "kaisei-Regular"
    },
    input2: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 6,
        paddingHorizontal: 2,
        paddingVertical: 4,
        fontFamily: "kaisei-Regular"
    },
    button: {
        backgroundColor: COLORS.accent,
        marginVertical: 20,
        fontFamily: 'kaisei-extraBold',
        borderRadius: 6,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 3,
        padding: "4%",
        marginTop:"10%",
      },
})

export default NewDiaryEntryScreen;