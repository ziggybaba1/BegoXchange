import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Logo } from '../../Images';
import useTheme from '../../Theme/useTheme.js';
import WelcomeStyle from "./welcomestyle.js";

function Welcome({route,navigation}) {
    const theme = useTheme();
    return (
        <View style={[WelcomeStyle.container,{backgroundColor:theme.colors.BACKGROUND}]}>
            <Image  source={Logo} style={WelcomeStyle.logo} />
          
            <Text style={[WelcomeStyle.textTitle,{color:theme.colors.TEXT}]}>Welcome to BegoXchange</Text>
           
            <View style={WelcomeStyle.bottom}>
               <TouchableOpacity onPress={()=>navigation.navigate("Register")} style={WelcomeStyle.actionButton}>
                   <Text style={WelcomeStyle.actionText}>Sign Up</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=>navigation.navigate('Login')} style={[WelcomeStyle.actionButton,{ backgroundColor:theme.colors.BACKGROUND}]}>
                   <Text style={[WelcomeStyle.actionText,{color:'#4182FE'}]}>Sign In</Text>
               </TouchableOpacity>
            </View>
        </View>
    );
}

export default Welcome;