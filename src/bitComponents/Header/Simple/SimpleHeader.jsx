import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import useTheme from '../../../Theme/useTheme.js';
import SimpleHeaderStyle from "./simpleheaderstyle.js";

function SimpleHeader(props) {
    const theme=useTheme();
    return (
        <View style={SimpleHeaderStyle.rowHeader}>
                <TouchableOpacity onPress={()=>props.onPress()}><AntDesign name="arrowleft" color={theme.colors.PRIMARY} size={30} /></TouchableOpacity>
                <Text style={[SimpleHeaderStyle.headerText,{color:theme.colors.TEXT}]}>{props.label}</Text>
                {props.option&&
                <TouchableOpacity style={{padding:10,backgroundColor:theme.colors.LIGHTBLUE,borderRadius:10}}>
                <Entypo name="dots-three-vertical" size={20}/>
                </TouchableOpacity>}
                {!props.option&&
                    <View></View>
                }
             </View>
    );
}

export default SimpleHeader;