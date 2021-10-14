import { Image, StyleSheet, Text, View } from 'react-native';

import COLORS from '../constants/Colors';
import React from 'react';

const DiaryDetailItem = ({ title, image, comment }) => {
    return (

      <View style={styles.container}>
          <View style={styles.detalleContainer}>
    <Text style={styles.title}>{title}</Text>

        <Image style={styles.image} source={{ uri: image }} />
          <Text style={styles.comment}>{comment}</Text>
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({
  container:{
      flex: 1,
  },
  detalleContainer:{
      flex: 1,
      marginHorizontal: "3%",
      marginVertical: "5%",
      alignItems: "center",
      justifyContent:"center",
      borderRadius: 5,
      padding: "5%",
      borderColor: COLORS.primary,
      borderWidth: 1,
      backgroundColor: COLORS.title
  },
  title:{
      fontFamily: "kaisei-Bold",
      fontSize: 20,
  },
  image: {
    height: '35%',
    minHeight: 300,
    width: '100%',
    backgroundColor: COLORS.title,
    marginVertical: "6%"
  },
  comment:{
      fontSize: 16,
      fontFamily: "kaisei-Medium",
  }
    });

export default DiaryDetailItem;
