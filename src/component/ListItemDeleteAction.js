import React from 'react';
import { View,StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
function ListItemDeleteAction({Del}) {
    return (

        <TouchableWithoutFeedback onPress={Del}>

        <View style={styles.container}>
            <AntDesign name="delete" size={25} color="white"  />
        </View>

        </TouchableWithoutFeedback>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"#ff5252",
        width:80,
        alignItems:"center",
        justifyContent:"center",
    },
})

export default ListItemDeleteAction;