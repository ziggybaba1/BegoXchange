import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { WelcomeLoader } from './src/components';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SplashScreen from 'expo-splash-screen';
import Toast from 'react-native-toast-message';

import ThemeProvider from './src/Theme/ThemeProvider';

//Screens
import SlideScreen from "./src/screen/slides";
import WelcomeScreen from "./src/screen/welcome/Welcome.jsx";
import LoginScreen from "./src/screen/auth/login/Login.jsx";
import RegisterScreen from "./src/screen/auth/register/Register.jsx";
import ForgetPasswordScreen from "./src/screen/auth/forgotpassword/ForgotPassword.jsx";
import ResetPasswordScreen from './src/screen/auth/resetpassword/ResetPassword';
import HomeScreen from './src/screen/Home/Home';
import NotificationScreen from './src/screen/notification/Notification';

const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();
export default function App({navigation}) {
  const [isReady,setReady]=useState(false);
  const [user,setUser]=useState(true)

  useEffect(() => {
    setTimeout(() => SplashScreen.hideAsync(), 500);
    setTimeout(() => setReady(true), 1000);
    
  }, []);

  if(!isReady){
    return (
      <ThemeProvider>
      <WelcomeLoader nav={navigation} />
      </ThemeProvider>
    );
  }
  else{
    return (
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
          {!user&&
          <Stack.Screen
          name="Slide"
          component={SlideScreen}
          options={{ title: 'slide', headerShown: false }}
        />}
         {!user&&
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{ title: 'Welcome BegoXchange', headerShown: false }}
        />}
         {!user&&
         <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Sign In', headerShown: false }}
        />}
         {!user&&
         <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ title: 'Register Now', headerShown: false }}
        />}
         {!user&&
         <Stack.Screen
          name="ForgetPassword"
          component={ForgetPasswordScreen}
          options={{ title: 'Forget password', headerShown: false }}
        />}
         {!user&&
        <Stack.Screen
          name="ResetPassword"
          component={ResetPasswordScreen}
          options={{ title: 'Reset password', headerShown: false }}
        />}
         {user&&
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home', headerShown: false }}
        />}
        {user&&
        <Stack.Screen
          name="Notification"
          component={NotificationScreen}
          options={{ title: 'Latest Notification', headerShown: false }}
        />}
          </Stack.Navigator>
        </NavigationContainer>
    </ThemeProvider>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
