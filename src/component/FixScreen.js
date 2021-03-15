import React from 'react';
import Constants from 'expo-constants';
import  { SafeAreaView, View,StyleSheet } from 'react-native';

function FixScreen({children,style}) {
    return (
       <SafeAreaView  style={[styles.screen,style]}>{children}</SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen:{
        paddingTop:Constants.statusBarHeight,
        flex:1,
       // backgroundColor:"#F7F7F7",
       

    },
    
})

export default FixScreen;