import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import COLORS  from '../constants/Colors'
import React from 'react'
import { useSelector } from 'react-redux'

const PlaceDetailScreen = ({route}) => {
    const { placeID } = route.params
    const place = useSelector(state => state.places.places.find(place => place.id === placeID))
    
    return (
        <ScrollView contentContainerStyle={{alignItems: 'center'}}>
            <View style={styles.location}>
                <View style={styles.addressContainer}><Text style={styles.address}>{place.title}</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image: {
      height: '35%',
      minHeight: 300,
      width: '100%',
      backgroundColor: '#ccc'
    },
    location: {
      marginVertical: 20,
      width: '90%',
      maxWidth: 350,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 5,
      backgroundColor: COLORS.title,
      borderRadius: 10
    },
    addressContainer: {
      padding: 20
    },
    address: {
      color: COLORS.text,
      textAlign: 'center'
    },
    map: {
      width: '100%',
      maxWidth: 350,
      height: 300,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10
    }
  });
  

export default PlaceDetailScreen
