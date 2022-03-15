import React, { useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import BottomNavStyle from "./bottomnavstyle.js";
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import AntDesign from "react-native-vector-icons/AntDesign"
import useTheme from '../../Theme/useTheme.js';


function BottomNav(props) {
    const theme=useTheme();
    return (
        <View style={[BottomNavStyle.container,{backgroundColor:theme.colors.BACKGROUND_SEC,borderColor:theme.colors.DEFAULT}]}>
            <TouchableOpacity style={[BottomNavStyle.bottomButton,{backgroundColor:theme.colors.PRIMARY}]}>
                <Icon style={{color:theme.colors.LIGHT}} name="home" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={[BottomNavStyle.bottomButton,{backgroundColor:theme.colors.ICON_BACK}]}>
                <Icon style={{color:theme.colors.PRIMARY}} name="search" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={[BottomNavStyle.bottomButton,{backgroundColor:theme.colors.ICON_BACK}]}>
                <AntDesign style={{color:theme.colors.PRIMARY}} name="plus" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={[BottomNavStyle.bottomButton,{backgroundColor:theme.colors.ICON_BACK}]}>
                <AntDesign style={{color:theme.colors.PRIMARY}} name="barschart" size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={[BottomNavStyle.bottomButton,{backgroundColor:theme.colors.ICON_BACK}]}>
                <AntDesign style={{color:theme.colors.PRIMARY}} name="user" size={20} />
            </TouchableOpacity>
        </View>
    );
}

export default BottomNav;