import React from 'react';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import  { Image,View,StyleSheet,Text, TouchableOpacity, TouchableHighlight } from 'react-native'


function ListItem({image,title,sub,OnPress:onPress,ImageComp,RenderRightActions}) {
    return (
        <Swipeable renderRightActions={RenderRightActions}>
        <TouchableOpacity
        underlayColor={"#DCFFDD"}
        onPress={onPress}
        >
        <View style={styles.container}>
          {ImageComp}
          {image && <Image source={image} style={styles.image}/> }
        <View style={styles.containerProfile}>
              
              
     <Text style={{fontSize:20}}>{title}</Text>
           {sub && <Text>{sub}</Text>}

        </View>
        </View>
        </TouchableOpacity>
        </Swipeable>
    );
}
const styles = StyleSheet.create({
    container :{
        backgroundColor:"white",
        flexDirection:"row",
        padding:20

    },
    
    image:{
        width:60,
        height:60,
        borderRadius:35,
        marginRight:10,
        
    },
    containerProfile:{
        flexDirection:"column",
        marginLeft:15,
        justifyContent:"center"
    },
})

export default ListItem;