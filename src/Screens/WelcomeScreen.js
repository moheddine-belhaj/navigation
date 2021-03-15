import React from 'react';
import { View,StyleSheet,ImageBackground,Image, Button } from 'react-native';

import AppButton from '../component/AppButton';
    
import FixScreen from '../component/FixScreen';
import Screen from '../component/Screen';
const image = { uri: "https://www.pexels.com/photo/assorted-color-leather-bag-display-inside-room-135620/" };

function WelcomeScreen({navigation}) {
    return (
        
       
        <ImageBackground
        source={require("./img/bg1.jpg")}
        style={styles.container}
        blurRadius={0.5}
        >
            
            <Image 
            style={styles.logo}
            source={require("./img/logo.png")} />
        <View style={styles.v}>
         <AppButton style={styles.button}
         title="login"
         onPress={()=> navigation.navigate("Login")}
         />

         <AppButton 
         style={styles.button}
         title="Sign up"
         onPress={()=> navigation.navigate("signup")}
         />
</View>
    
       </ImageBackground>
   
    );
}

const styles = StyleSheet.create({
    Background:{
        flex:1,
       
        


    },
    logo :{
      
       marginLeft:75,
        width:250,
        height:250,
        position:"absolute",
        top:70,
        
        
    },

    container:{

    alignContent:"center",
    justifyContent:"center",
    flex:1,
    
    
    },
    
    button:{
        
       alignItems:"center",
       
        
        },

        v:{
            alignContent:"center",
marginTop:500
        }
})

export default WelcomeScreen;