import React, { useContext, useState } from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import * as Yup from "yup";

import Screen from "../component/Screen";

import ErrorMessage from "../component/forms/ErrorMessage";
import Form from "../component/forms/Form";
import FormField from "../component/forms/FormField";
import SubmitButton from "../component/forms/SubmitButton";
import authApi from "../api/auth"
import jwtDecode from "jwt-decode";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage"

const image = { uri: "https://i.picsum.photos/id/336/1600/1060.jpg?hmac=V0ApxMul9odmMOXCPn6z_NHFnFT_-SmbQfpzughJahU" };


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const authContext=useContext(AuthContext)
  const [loginFailed, setLoginFailed] = useState(false)
  const handleSubmit=async({email,password})=>{
    const result =await authApi.login(email,password);
    if(!result.ok) return setLoginFailed(true);
    setLoginFailed(false);
    const user =jwtDecode(result.data)
    authContext.setUser(user);
    authStorage.storeToken(result.data);
    
  }

  return (
      <ImageBackground
       source={require("./img/bg3.jpg")}
        style={styles.container}
        blurRadius={1}
      >
   
     

      <Form
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage  error="invalide email/password"  visible={loginFailed}/>
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </Form>
   
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    
    justifyContent:"center"
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
