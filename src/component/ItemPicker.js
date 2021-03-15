import React from 'react';
import { Text, TouchableOpacity,StyleSheet } from 'react-native';

function ItemPicker({label,onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    text:{
        fontSize:18,
        color:"black",
        padding:20,
        
        
 
        
    }
})

export default ItemPicker;