import React from 'react';

import  { View,Text,Image ,StyleSheet} from 'react-native'
import ListItem from './ListItem';



function DetailsScreen(props) {
    return (
       <View >
        <Image source={require("../Screens/img/jacket.jpg")} style={styles.image}/> 
        <View>
        <Text style={styles.text1} >jacket for sale</Text>
        <Text style={styles.text2}>100£</Text>
        <ListItem
        image={require("../Screens/img/Profile.png")}
        title="moheddine"
        sub="5 items"
        />
        </View>
        
       </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:300,
        marginTop:30
       

    },
    text1:{
        padding:10,
        fontSize:24,
        color:"#42A1FF",
        fontWeight:"500",
        marginLeft:10
       
    },
    text2:{
       padding:8,
        fontSize:20,
        marginLeft:10
        


    }

    
})
export default DetailsScreen;