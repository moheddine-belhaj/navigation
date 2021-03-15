import React from 'react';
import AppText from './AppText';
import { StyleSheet } from 'react-native';
function ErrorMessage({error}) {
   
    return (
       <AppText style={styles.container}>{error}</AppText>
    );
}
const styles = StyleSheet.create({
    container:{
        color:"red"
    }
})
export default ErrorMessage;