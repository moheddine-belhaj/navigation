import React, { useState } from 'react';
import  { TextInput, View,StyleSheet, Text, Modal, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native';
import ItemPicker from './ItemPicker';
import FixScreen from './FixScreen';
function AppPicker({icon,placeholder,items ,selectedItem, onSelectItem}) {

    const [Visible, setVisible] = useState(false);
    return (

        <>
        <TouchableWithoutFeedback  onPress={()=> setVisible(true)}>
        <View style={styles.emailInput}>
            {icon && <MaterialCommunityIcons name={icon} size={23} color={"#C6C6C6"} style={styles.icon}/>}
             <Text style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</Text>
         {icon && <MaterialCommunityIcons name="chevron-down" size={23} color={"#C6C6C6"} />}
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={Visible} animationType="slide">
           <View style={styles.modal}>

            <Button title="Close" onPress={()=>setVisible(false)} />

            <FlatList 
            data={items}
            keyExtractor={item=>item.value}
            renderItem={({item})=>
            <ItemPicker 
            label={item.label}
            onPress={()=>{
            setVisible(false);
            onSelectItem(item)
            }
            
            }
            />
        }
            />
           </View>
        

          
        </Modal>
       </>
    );
}


const styles = StyleSheet.create({
    emailInput:{
        borderWidth:1,
        borderColor:"#000",
        width:"90%",
        borderRadius:25,
        marginVertical:10,
        padding:12,
        flexDirection:"row",
        alignItems:"center",
       
    },
    text:{
        width:"80%",
        fontSize:17,
        color:"#7E7E7E"
    },
    icon:{
        marginRight:10
    },
    
    

    
})
export default AppPicker;