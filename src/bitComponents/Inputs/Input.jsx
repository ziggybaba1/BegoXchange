import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import InputStyle from "./inputstyle.js";
import PropTypes from 'prop-types'
import useTheme from '../../Theme/useTheme.js';
import  Icon  from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

function Input(props) {
    const theme=useTheme();
    const [secure,setSecure]=useState(true)
    return (
        <View style={InputStyle.inputContainer}>
        <View style={InputStyle.textContainer}>
                            <Text style={[InputStyle.textTitle,{color:theme.colors.TEXT}]}>{props.label}</Text>
                            <Text style={[InputStyle.textTitle,{color:theme.colors.ERROR}]}>{props.required?'*':''}</Text>   
                        </View>
        <View  style={[InputStyle.inputPassword,{borderColor:props.disabled?theme.colors.DEFAULT:props.error?theme.colors.ERROR:theme.colors.PRIMARY,color:theme.colors.TEXT}]}>
        <TextInput 
        placeholderTextColor={theme.colors.TEXT}
        style={[InputStyle.input,{color:theme.colors.TEXT}]}
        {...props}
        ></TextInput>
        {props.password&&
        <TouchableOpacity onPress={()=>setSecure(secure?false:true)}>
        <Icon name={secure?"eye":"eye-with-line"} size={20} color={theme.colors.TEXT}></Icon>
        </TouchableOpacity>}
        </View>
        {props.error&&
        <View style={InputStyle.errorContainer}>
            <MaterialIcon style={InputStyle.errorText} name="error" size={20} />
            <Text style={InputStyle.errorText}>{props.errorMessage}</Text>
        </View>}
        </View>
    );
}

// Input.propTypes = {
//     disabled:PropTypes.bool,
//     secure:PropTypes.bool,
//     setSecure:PropTypes.func,
//     error:PropTypes.bool,
//     label:PropTypes.string,
//     required:PropTypes.bool
//   }

export default Input;