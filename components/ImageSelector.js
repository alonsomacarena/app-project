import * as ImagePicker from 'expo-image-picker';

import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import { Button } from 'react-native-elements';
import COLORS  from '../constants/Colors';

const ImageSelector = props => {
  const [pickedUri, setPickedUri] = useState();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync()

    if (status !== 'granted') {
      Alert.alert(
        'Permisos insuficientes',
        'Necesita dar permisos de la cámara para usar la aplicación',
        [{ text: 'Ok' }],
      )

      return false;
    }

    return true;
  }

  const handleTakeImage = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16,9],
      quality: 0.8,
    })

    setPickedUri(image.uri);
    props.onImage(image.uri);
  }

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUri
          ? <Text style={{fontFamily:"kaisei-Regular"}}>No hay imagen...</Text>
          : <Image style={styles.image} source={{ uri: pickedUri }} />}
      </View>
      <Button
        title="TOMAR FOTO"
        color={COLORS.text}
        onPress={handleTakeImage}
        buttonStyle={styles.button}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: "5%"
  },
  preview: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.text,
    borderWidth: 1,
    fontFamily: "kaisei-Regular"
  },
  image: {
    width: '100%',
    height: '100%',
  },
  button: {
    backgroundColor: COLORS.primary,
    fontFamily: 'kaisei-extraBold',
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    padding: "4%",
    marginVertical:"5%",
  },
});

export default ImageSelector;