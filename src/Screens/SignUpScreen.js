import React,{useState,useContext} from 'react';
import { View,StyleSheet,ImageBackground,Image, Text } from 'react-native';

import AppButton from '../component/AppButton';
import AppTextInput from '../component/AppTextInput';
import FixScreen from '../component/FixScreen';
//import {Context as AuthContext} from '../context/AuthContext';



function SignUpScreen({children}) {
    const {state ,signup}=useContext(AuthContext);
    const [email,setEmail]= useState('');
    const [password,setPassword]=useState('');

    

    return (
        <>
        <FixScreen >
            <View>
    <AppTextInput
         placeholder="first name" 
         value={email}
         icon="email"
         onChangeText={setEmail}
    />

     

    <AppTextInput
         placeholder="password" 
         icon="lock"
          value={password}
          onChangeText={setPassword}
    />
     <Text style={styles.text}>{state.errorMessage}</Text> 
     <AppButton title="Next" style={styles.container} onPress={()=> signup({email,password})}/>
     </View>
    </FixScreen>
  
    </>
    );
}

const styles = StyleSheet.create({
    container:{
    marginTop:200,
    justifyContent:"center",
    alignItems:"center"

  
       
        


    },
    text :{
        color:"red",
        marginLeft:20

        
        
        
    },

    
    

})

export default SignUpScreen;