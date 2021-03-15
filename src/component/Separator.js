import { View,StyleSheet } from 'react-native'
import React from 'react';

function Separator(props) {
    return (
        <View style={styles.container}></View>
    );
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:1,
        backgroundColor:"#CFCFCF"
    }
})

export default Separator;