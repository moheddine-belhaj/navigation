import React from 'react';
import  {View,Text,StyleSheet,TouchableOpacity ,Alert} from 'react-native';



function AppButton({title,onPress,style}) {
    return (
        <View style={styles.container,style}>
        <TouchableOpacity style={styles.button} onPress={onPress} >
        <Text style={{color:'#000' ,fontSize:18 ,fontWeight:'bold' }}>{title}</Text>
        </TouchableOpacity>  
        </View>
    );
}
const styles = StyleSheet.create({
    button :{
      
       // backgroundColor: 'transparent',
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        width:'50%',
        borderColor:"#000",
        borderWidth:1,
        marginVertical:8
        
        
        
    },
    container:{
       
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:"flex-end",
       
        
    },
})

export default AppButton;

/**
 * 
 * onPress={()=>Alert.alert("alert","error",[

            { text:"yes",onPress:()=>console.log("yes")},
            { text:"no",onPress :()=>console.log("no")}
            
        ])}
 */