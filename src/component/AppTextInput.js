import React from 'react';
import  { TextInput, View,StyleSheet } from 'react-native';
import FixScreen from '../component/FixScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
function AppTextInput({icon,...otherProps}) {
    return (
        <View style={styles.emailInput}>
            {icon && <MaterialCommunityIcons name={icon} size={23} color={"#C6C6C6"} style={styles.icon}/>}
             <TextInput  {...otherProps} style={styles.text}/>
        
        </View>
       
    );
}


const styles = StyleSheet.create({
    emailInput:{
        borderWidth:1,
        borderColor:"#000",
        width:"100%",
        borderRadius:25,
        marginVertical:10,
        padding:12,
        flexDirection:"row",
        alignItems:"center",
        
         
    },
    text:{
        width:"90%",
        fontSize:17,
        color:"#000"
    },
    icon:{
        marginRight:10
    },
})
export default AppTextInput;

/**
 * 
 * <AppTextInput placeholder="Email" icon="email" />
    <AppTextInput placeholder="password" icon="lock" secureTextEntry={true} />
 */