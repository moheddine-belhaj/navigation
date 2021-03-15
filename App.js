import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Screen,Text, View ,Image, SafeAreaView, Switch, ImageBackground, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import LoginScreen from './src/Screens/LoginScreen';
import WelcomeScreen from './src/Screens/WelcomeScreen';
import AccountScreen from './src/Screens/AccountScreen';
import FixScreen from './src/component/FixScreen';
import AppPicker from './src/component/AppPicker';
import ListingScreen from './src/Screens/ListingScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AppNavigation from './src/component/AppNavigation';
import AppTabBar from './src/component/AppTabBar';
import SignUpScreen from './src/Screens/SignUpScreen';
import AuthNavigator from './src/navigation/AuthNavigator';
import AuthContext from './src/auth/context';
import authStorage from "./src/auth/storage"
import jwtDecode from 'jwt-decode';
import {AppLoading} from 'expo';

const Link =()=>{
 const navigation= useNavigation();

  return(
    <Button
    title="Click"
    onPress={()=>navigation.navigate("TweetsDetaile")}
    />
    )
}
const Tweets = ({navigation}) => (
  <FixScreen style={styles.container} >
    <Link/>
  </FixScreen>
  
);
const TweetsDetaile = () => (
  <FixScreen>
    <Text>  Tweet details </Text>
  </FixScreen>
);
const Stack = createStackNavigator();
const StackNaviagtor = () => (
  <Stack.Navigator screenOptions={{
    
  }}>
    <Stack.Screen  
    name="Tweets" 
    component={Tweets}
    options={{title:"Tweets page"

  }}
    />  
    <Stack.Screen name="TweetsDetaile" component={TweetsDetaile}/>   
  </Stack.Navigator>

);
const account =() => <FixScreen><Text>account</Text></FixScreen>

const Tap= createBottomTabNavigator();
const TapNavigator =()=>(
  <Tap.Navigator tabBarOptions={{
    activeBackgroundColor:"#007CFF",
    activeTintColor:"white",
    inactiveBackgroundColor:"#B0EBFF"

  }}>
    <Tap.Screen 
    options={{
      tabBarIcon:()=><MaterialCommunityIcons  name="home" size={30}/>
    }}
    name="Home" component={Tweets}/>
    <Tap.Screen
    options={{
      tabBarIcon:()=><MaterialCommunityIcons  name="account" size={30}/>
    }}
    name="account" component={account}/>
  </Tap.Navigator>
)


export default function App() {
  const [isReady,setIsReady] =useState(false);
  const restoreToken= async()=>{
    const token =await authStorage.getToken();
    if(!token)return;
    setUser(jwtDecode(token));

  }; 
    useEffect(() => {
      restoreToken();

      
    }, [])
  
    if(!isReady)
    return <AppLoading startAsync={restoreToken} onFinish={()=>setIsReady(true)}/>
const [user,setUser]=useState()
  return (
     
    <AuthContext.Provider value={{user,setUser}}>
    <NavigationContainer>
      {user ? <AccountScreen/>: <AuthNavigator/>}
    </NavigationContainer>

      </AuthContext.Provider>
 
  
  );
}

const styles = StyleSheet.create({
  container: {
  flex:1,
  },

});


/**
 * <Switch
    value={isNew}
    onValueChange={(item)=>SetIsNew(item)} j
    />
 */