//este va a ser una de las stack screens de products
//La lista para agregar productos puede ser otra

import {Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View} from "react-native";

import React from "react";

const CategoryGridItem = ({item, onSelected}) => {
    let TouchableCmp = TouchableOpacity
    if (Platform.OS === "android" && Platform.version >= 21){
        TouchableCmp = TouchableNativeFeedback
    }
    return (
        <View style={styles.gridItem}>
            <TouchableCmp style={{...styles.container, ...{backgroundColor: item.color}}}
            onPress={()=> onSelected(item)}>
                <View>
                    <Text style={styles.title}>{item.title}</Text>
                </View>
            </TouchableCmp>
        </View>
    )
}

const styles = StyleSheet.create({
    gridItem:{
        flex:1,
        borderRadius: 6,
        margin:15,
        height:150,
    },
    container:{
        flex:1,
        borderRadius:6,
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: {width:0, height:2},
        shadowRadius: 6,
        elevation:3,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 8,
    },
    title: {
        fontFamily: "kaisei-extraBold",
    }
})

export default CategoryGridItem;