import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import useTheme from '../../Theme/useTheme.js';
import TagStyle from "./tagstyle.js";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

function Tag(props) {
    const theme=useTheme();
    return (
        <TouchableOpacity style={[TagStyle.container,{borderColor:theme.colors.PRIMARY}]}>
                <MaterialIcons name={props.icon} size={15} style={[TagStyle.icon,{color:theme.colors.PRIMARY}]} />
                <Text style={[TagStyle.tagText,{color:theme.colors.PRIMARY}]}>{props.label}</Text>
        </TouchableOpacity>
    );
}

export default Tag;