import React from 'react';
import { StyleSheet, Screen,Text, View ,Image, SafeAreaView, Switch, ImageBackground, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';  
import LoginScreen from '../Screens/LoginScreen'
import AppForm from './AppForm'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppButton from './AppButton';


const LinkLogin =()=>{
 const navigation= useNavigation();
  return(
    <AppButton
    title="Login"
    onPress={()=>navigation.navigate("LoginScreen")}
    />
    )
}
const LinkSignup =()=>{
 const navigation= useNavigation();
  return(
    <AppButton
    title="Signup"
    onPress={()=>navigation.navigate("AppForm")}
    />
    )
}

const Home = ({navigation}) => (
  <View style={styles.container} >
    <LinkLogin/>
    <LinkSignup/>
  </View>
  
);


const Stack = createStackNavigator();
const StackNaviagtor = () => (
  <Stack.Navigator >
    <Stack.Screen
    
    name="Home" 
    component={Home}
    options={{
    headerShown:false }}
    />  
    <Stack.Screen name="LoginScreen" component={LoginScreen}/>
    <Stack.Screen name="AppForm" component={AppForm}/>   
  </Stack.Navigator>

);

function AppNavigation(props) {
    return (
    <NavigationContainer>
      
      <StackNaviagtor/>
      
    </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:"center",
        alignItems:"center",
        justifyContent:"center"
    }
})
export default AppNavigation;

