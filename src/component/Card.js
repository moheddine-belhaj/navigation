import React from 'react';


import  { View,StyleSheet,Text, Image } from 'react-native'


function Card({title,sub,image}) {
    return (
    <View style={styles.card}>
        <Image source={{uri:image}} style={styles.image}/>
        <View style={styles.text}>
        <Text style={{fontSize:18 , marginBottom:10,color:"#42A1FF" ,fontWeight:"bold"}} >{title}</Text>
        <Text >{sub}</Text>
        </View>

    </View>
    );
}


const styles = StyleSheet.create({
    card:{
        backgroundColor:'#fff',
        borderRadius:15,
        marginBottom:20,
        overflow:"hidden",
        margin:15
       
    },
    image:{
    
    width:"100%",
    height:200,
    borderRadius:15
    },
    text :{
    padding:8
    },
})
export default Card;

/**
 * <View style={{
     backgroundColor:"#D6D6D6",
     padding:20,
     paddingTop:80,
     flex:1
   }}>
     <Card
     title="something"
     sub="100£"
     image={require("./src/Screens/img/jacket.jpg")}
     />
   </View>
   
 * 
 * 
 */