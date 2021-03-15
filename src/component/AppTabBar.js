import React, { useState } from 'react';
import { StyleSheet, Screen,Text, View ,Image, SafeAreaView, Switch, ImageBackground, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import FixScreen from './FixScreen';

const Link =()=>{
 const navigation= useNavigation();

  return(
    <Button
    title="Click"
    onPress={()=>navigation.navigate("TweetsDetaile")}
    />
    )
}

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
const account =() => <FixScreen><Text>account</Text></FixScreen>

function AppTabBar(props) {
    return (
        <NavigationContainer>
      
        <TapNavigator/>
      
    </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    
})

export default AppTabBar;