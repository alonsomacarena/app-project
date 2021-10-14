import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import COLORS from '../constants/Colors';
import React from 'react';

const DiaryItem = ({ title, image, comment, onSelect }) => {
    return (
      <TouchableOpacity
        onPress={onSelect}
        style={styles.placeItem}
      >
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.address}>{comment}</Text>
        </View>
      </TouchableOpacity>
    );
  };

const styles = StyleSheet.create({
    placeItem: {
        borderColor: COLORS.primary,
        borderWidth: 1,
        paddingVertical: 16,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        marginVertical: "3%",
        marginHorizontal: "2%"
      },
      image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: COLORS.title,
      },
      info: {
        marginLeft: 25,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
      },
      title: {
        color: COLORS.text,
        fontSize: 18,
        marginBottom: 6,
        fontFamily: "kaisei-Medium"

      },
      address: {
        color: COLORS.bg,
        fontSize: 14,
        fontFamily: "kaisei-Regular"

      }
    });

export default DiaryItem;
