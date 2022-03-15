import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Checkbox} from "react-native-paper"
import  Icon  from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Logo } from '../../../Images';
import useTheme from '../../../Theme/useTheme.js';
import LoginStyle from "./loginstyle.js";
import { Loader } from '../../../bitComponents';

const Login = ({route,navigation}) => {
    const theme=useTheme();
    const [secure,setSecure]=useState(true);
    const [error,setError]=useState({});
    const [isSelected, setSelection] = useState(false);
   const [email,setEmail]=useState(null);
   const [password,setPassword]=useState(null);
   const [disabled,setDisabled]=useState(true);
   const [loading,setLoading]=useState(false);
   
   const setTextEmail=(e)=>{
    setEmail(e);
    setDisabled(email&&password?false:true);
   }
   const setTextPassword=(e)=>{
    setPassword(e);
    setDisabled(email&&password?false:true);
   }
  
   return (
        <View style={[LoginStyle.container,{backgroundColor:theme.colors.BACKGROUND}]}>
             <ScrollView >
             <View style={LoginStyle.logoContainer}>
             <Image  source={Logo} style={LoginStyle.logo} />
             <Text style={[LoginStyle.textTitle,{color:theme.colors.TEXT}]}>Sign in to your account</Text>
             </View>
             <View style={LoginStyle.formContainer}> 
                    <View style={LoginStyle.inputContainer}>
                        <View style={LoginStyle.textContainer}>
                            <Text style={[LoginStyle.textTitle,{color:theme.colors.TEXT}]}>Email</Text>
                            <Text style={[LoginStyle.textTitle,{color:theme.colors.ERROR}]}>*</Text>   
                        </View>
                        <TextInput
                        keyboardType='email-address'
                        onChangeText={setTextEmail} 
                        placeholderTextColor={theme.colors.TEXT}
                        style={[LoginStyle.input,{borderColor:disabled?theme.colors.DEFAULT:theme.colors.PRIMARY,color:theme.colors.TEXT}]}
                        placeholder="Email"
                        ></TextInput>
                        {error.email&&
                        <View style={LoginStyle.errorContainer}>
                        <MaterialIcon style={LoginStyle.errorText} name="error" size={20} />
                            <Text style={LoginStyle.errorText}>Invalid Email</Text>
                        </View>}
                    </View>
                    <View style={LoginStyle.inputContainer}>
                        <View style={LoginStyle.textContainer}>
                            <Text style={[LoginStyle.textTitle,{color:theme.colors.TEXT}]}>Password</Text>
                            <Text style={[LoginStyle.textTitle,{color:theme.colors.ERROR}]}>*</Text>   
                        </View>
                        <View  style={[LoginStyle.inputPassword,{borderColor:disabled?theme.colors.DEFAULT:theme.colors.PRIMARY,color:theme.colors.TEXT}]}>
                        <TextInput 
                        placeholderTextColor={theme.colors.TEXT}
                        style={{color:theme.colors.TEXT}}
                        onChangeText={setTextPassword}
                        placeholder="Password"
                        secureTextEntry={secure}
                        ></TextInput>
                        <TouchableOpacity onPress={()=>setSecure(secure?false:true)}>
                        <Icon name={secure?"eye":"eye-with-line"} size={20} color={theme.colors.TEXT}></Icon>
                        </TouchableOpacity>
                        </View>
                        {error.password&&
                        <View style={LoginStyle.errorContainer}>
                        <MaterialIcon style={LoginStyle.errorText} name="error" size={20} />
                            <Text style={LoginStyle.errorText}>Invalid Password</Text>
                        </View>}
                        <View >
                   <TouchableOpacity style={LoginStyle.rememberContainer} onPress={()=>setSelection(isSelected?false:true)}>
                    <Checkbox
                    color={theme.colors.PRIMARY}
                        status={isSelected ? 'checked' : 'unchecked'}
                        onValueChange={()=>setSelection(isSelected?false:true)}
                        style={LoginStyle.checkbox}
                        />
                          <Text style={[LoginStyle.checkboxLabel,{color:theme.colors.TEXT}]}>Remember me</Text>
                   </TouchableOpacity>
                       
                    </View>
                    </View>
                   
                    <TouchableOpacity disabled={disabled} onPress={()=>navigation.navigate('Login')} style={[LoginStyle.actionButton,{backgroundColor:disabled?"#93B8FE":'#4182FE',borderColor:disabled?"#93B8FE":'#4182FE'}]}>
                   <Text style={[LoginStyle.actionText]}>Sign In</Text>
               </TouchableOpacity>
             </View>
             <View style={LoginStyle.alternateContainer}>
                    <TouchableOpacity onPress={()=>navigation.navigate("ForgetPassword")}>
                        <Text style={[LoginStyle.actionText,{color:theme.colors.PRIMARY,marginBottom:20}]}>Forgot password?</Text>
                    </TouchableOpacity>
                    <Text>or continue with</Text>
                    <View style={LoginStyle.alternateButtonContainer}>
                        <TouchableOpacity style={[LoginStyle.buttonAlternate,{backgroundColor:theme.colors.LIGHT}]}>
                            <MaterialIcon name="facebook" size={20} color="blue" />
                            <Text style={[LoginStyle.actionText,{color:theme.colors.DARK}]}>Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[LoginStyle.buttonAlternate,{backgroundColor:theme.colors.LIGHT}]}>
                            <AntDesign name="google" size={20} color="red" />
                            <Text style={[LoginStyle.actionText,{color:theme.colors.DARK}]}>Google</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={()=>navigation.navigate("Register")} style={LoginStyle.alternateLowContainer}>
                    <Text style={[LoginStyle.actionText,{color:theme.colors.TEXT}]}>Don't have an account? </Text>
                    <Text style={[LoginStyle.actionText,{color:theme.colors.PRIMARY}]}>Sign up</Text>
                    </TouchableOpacity>
             </View>
             </ScrollView>
             <Loader modalVisible={loading}/>
        </View>
    );
};

export default Login;