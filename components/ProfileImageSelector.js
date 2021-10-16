import * as ImagePicker from 'expo-image-picker';

import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

import { Button } from 'react-native-elements';
import COLORS  from '../constants/Colors';

const ProfileImageSelector = props => {
  const [pickedUri, setPickedUri] = useState();

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permisos insuficientes',
        'Necesita dar permisos de la galeria para usar la aplicación',
        [{ text: 'Ok' }],
      )

      return false;
    }

    return true;
  }

  const handleGetImage = async () => {
    const isGalleryOk = await verifyPermissions();
    if (!isGalleryOk) return;

    let image = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

    setPickedUri(image.uri);
    props.onImage(image.uri);
  }

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUri
          ? <Text style={{fontFamily:"kaisei-Regular"}}>Seleccionar...</Text>
          : <Image style={styles.image} source={{ uri: pickedUri }} />}
      </View>
      <TouchableOpacity
                  style={styles.userBtn}
                  onPress={handleGetImage} >
                  <Text style={styles.userBtnTxt}>ELEGIR</Text>
                </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: "5%",
    justifyContent: "center",
    alignItems: "center"
  },
  preview: {
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.text,
    borderWidth: 1,
    fontFamily: "kaisei-Regular",
    borderRadius: 200
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 200,
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
  userBtn: {
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 3,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginHorizontal: 5,
    width: "55%",
    marginTop: "5%",
    backgroundColor: COLORS.title,
    alignItems: "center"
  },
  userBtnTxt: {
    color: COLORS.text,
    fontFamily: "kaisei-Bold"
  },
});

export default ProfileImageSelector;