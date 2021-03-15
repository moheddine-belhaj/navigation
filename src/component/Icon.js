import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {View} from 'react-native'


function Icon({
    name,
    size=55,
    bgColor="#000",
    iconColor="#f7f7f7"
        

}) {
    return (
        <View style={{
            width:size,
            height:size,
            borderRadius:size/2,
            backgroundColor :bgColor,
            alignItems:"center",
            justifyContent:"center"
           
        }}>
            <MaterialCommunityIcons name={name} size={size *0.5} color={iconColor} />
        </View>
    );
}

export default Icon;