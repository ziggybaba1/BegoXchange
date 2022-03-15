import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Logo } from '../../../Images/index.js';
import useTheme from '../../../Theme/useTheme.js';
import HomeHeaderStyle from "./homeheaderstyle.js";
import { ThemeContext } from '../../../Theme/ThemeProvider.js';

function HomeHeader(props) {
    const theme=useTheme();
    const updateTheme=()=>{
        theme.updateTheme(theme.type?false:true);
    }
    return (
        <View style={HomeHeaderStyle.container}>
        <View style={HomeHeaderStyle.logoRow}>
        <Image source={Logo}  style={HomeHeaderStyle.logo}/>
        <Text style={[HomeHeaderStyle.logoText,{color:theme.colors.TEXT}]}>BegoXchange</Text>
        </View>
        <View style={HomeHeaderStyle.iconRow}>
            <TouchableOpacity onPress={()=>props.navigation.navigate("Notification")} style={[HomeHeaderStyle.iconButton,{backgroundColor:theme.colors.LIGHTBLUE}]}>
                <Icon name="notifications" style={{color:theme.colors.PRIMARY}} size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={[HomeHeaderStyle.iconButton,{backgroundColor:theme.colors.LIGHTBLUE}]}>
                <AntDesign name="heart" style={{color:theme.colors.PRIMARY}} size={20} />
            </TouchableOpacity>
            <TouchableOpacity onPress={updateTheme} style={[HomeHeaderStyle.iconButton,{backgroundColor:theme.colors.LIGHTBLUE}]}>
                <Icon name={theme.type?"toggle-off":"toggle-on"} style={{color:theme.type?theme.colors.PRIMARY:theme.colors.DARK}} size={25} />
            </TouchableOpacity>
        </View>
        </View>
    );
}

export default HomeHeader;