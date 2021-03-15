import React,{useState} from 'react';
import  { FlatList, SafeAreaView, View,StyleSheet } from 'react-native';
import ListItem from '../component/ListItem';
import Constants from 'expo-constants';
import Separator from '../component/Separator';
import ListItemDeleteAction from '../component/ListItemDeleteAction';


const initmessages =[
{
    id:1,
    title:'t1',
    discription:'d1',
    image:require("./img/Profile.png")
},
{
    id:2,
    title:'t2',
    discription:'d2',
    image:require("./img/Profile.png")
},


]

function MessagesScreeen(props) {
    const [messages ,setMessages] =useState(initmessages);
    const [refreshing, setRefreshing]= useState(false);


    const handelDelete =message =>{
    
    setMessages(messages.filter (m=>m.id !==message.id));
    }
    return (
        
        <SafeAreaView style={styles.screen}>
       <FlatList
        data={messages}
        keyExtractor={key=>messages.id}
        renderItem={({item}) =>(
        <ListItem
        image={item.image}
        title={item.title}
        sub={item.discription}
        OnPress={()=>console.log("ok",item)}
        RenderRightActions={()=>
        <ListItemDeleteAction Del={()=>handelDelete(item)}
        
        
        />}

        /> )}
       ItemSeparatorComponent={Separator}
       refreshing={refreshing}
       onRefresh={()=>
        setMessages([
            {
                id:2,
                title:'t2',
                discription:'d2',
                image:require("./img/Profile.png")
            },


        ])
    }
         />
         
    </SafeAreaView>
      
    );
}
const styles = StyleSheet.create({
    screen:{
        paddingTop:Constants.statusBarHeight,
        flex:1,
        backgroundColor:"#F7F7F7"


    },
})

export default MessagesScreeen;