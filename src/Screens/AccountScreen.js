
import React from 'react';
import { View,StyleSheet,FlatList } from 'react-native';
import AuthContext from '../auth/context';

import FixScreen from '../component/FixScreen'
import Icon from '../component/Icon';
import ListItem from '../component/ListItem'
import Separator from '../component/Separator';
import { useContext } from 'react';
import authStorage from "../auth/storage"
const MenuItem=[
    {
    title:"My listings",
    icon:{
         name:"format-list-bulleted",
         backgroundColor:"#FF59C3"
        },

    },
    {
        title:"Messages",
        icon:{
             name:"message",
             backgroundColor:"#00D6BC"
            },
    },
    {
        title:"Setting",
        icon:{
             name:"account-settings",
             backgroundColor:"#FFCC38"
            },
    },



]

function AccountScreen({navigation}) {
    const {user,setUser} =useContext(AuthContext);

    const handleLogOut=()=>{
        setUser(null);
        authStorage.removeToken(); 
    }
    return (
       
        <FixScreen style={styles.screen}>

            <View style={styles.container}>
            <ListItem
           image={require('./img/me.jpg')}
           title={user.name}
             sub={user.email}
            />
            </View>
             <View style={styles.container}>

                 <FlatList
                 data={MenuItem}
                 keyExtractor ={MenuItem=>  MenuItem.title}
                 renderItem={({item})=>
                <ListItem
                title={item.title}
                ImageComp={
                <Icon name={item.icon.name} bgColor={item.icon.backgroundColor}/>
                }
                />
                }
                ItemSeparatorComponent={Separator}
                 
                 />

                
             </View>
                <ListItem
                title="Logout"
                ImageComp={<Icon
                name="logout"
                bgColor="#FF3232" 
                
                />}
                OnPress={handleLogOut}
                />


        </FixScreen>

       
    );
}


const styles = StyleSheet.create({
    screen:{
        
        backgroundColor:"#F7F7F7"

    },
    container:{
        marginVertical:20
    }
})
export default AccountScreen;