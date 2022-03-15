import React from 'react';
import { ActivityIndicator, Image, View } from 'react-native';
import { Logo } from '../../Images/index.js';
import useTheme from '../../Theme/useTheme.js';
import WelcomeLoaderStyle from "./welcomeloaderstyle.js";

function WelcomeLoader(props) {
    const theme = useTheme();
    return (
        <View style={[WelcomeLoaderStyle.container,{backgroundColor:theme.colors.BACKGROUND}]}>
            <Image source={Logo} style={WelcomeLoaderStyle.logo} />
            <ActivityIndicator color={'#154C9F'} size="large" />
            
        </View>
    );
}

export default WelcomeLoader;