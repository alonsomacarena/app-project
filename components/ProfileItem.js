import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import COLORS from '../constants/Colors';
import React from 'react';

const ProfileItem = ({image, name }) => {
    return (
      <View
        style={styles.placeItem}
      >
        <Image style={styles.image} source={{ uri: image }} />
        <View style={styles.info}>
        <Text style={styles.title}>{name}</Text>
          <Text style={styles.address}>{comment}</Text>

        </View>
      </View>
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
        width: '100%',
        height: '100%',
        borderRadius: 200,
        borderWidth: 1,
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

export default ProfileItem;
