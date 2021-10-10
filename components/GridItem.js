import {
  Dimensions,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import React from 'react';

const GridItem = ({ item, onSelected }) => {
  return (
    <View style={styles.gridItem}>
      <TouchableOpacity
        style={{ ...styles.item, backgroundColor: item.color}}
        onPress={() => onSelected(item)}>
        
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 3,
    borderRadius: 6,
    marginBottom: 10,
    justifyContent: "flex-start",
    marginTop: 0,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    backgroundColor: "transparent",

  },
  item: {
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
    paddingBottom: 15,
    paddingRight:8,
    width: Dimensions.get("window").width/2.5,
    height: Dimensions.get("window").height/5,
    marginHorizontal: 10,
},
textContainer:{
flex: 1,
alignItems: "flex-end",
justifyContent: "flex-end",
},  
  title: {
    fontFamily: 'kaisei-Bold',
    textAlign: 'right',
    fontSize: 12,
  },

});

export default GridItem;