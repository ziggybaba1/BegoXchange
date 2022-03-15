import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Checkbox} from "react-native-paper"
import  Icon  from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Logo } from '../../../Images';
import useTheme from '../../../Theme/useTheme.js';
import ForgotPasswordStyle from "./forgotpasswordstyle.js";
import { Loader } from '../../../bitComponents';

const ForgotPassword = ({route,navigation}) => {
    const theme=useTheme();
    const [secure,setSecure]=useState(true);
    const [error,setError]=useState({});
    const [isSelected, setSelection] = useState(0);
   const [email,setEmail]=useState(null);
   const [password,setPassword]=useState(null);
   const [disabled,setDisabled]=useState(true);
   const [loading,setLoading]=useState(false);
   const [step,setStep]=useState(0);
   const [otp,setOtp]=useState({});
   
   const addOtp=(i,e)=>{
      setOtp({...otp, [i]:e});
      if(i>2){
         setDisabled(false);
      }
   }

   const chooseMode=()=>{
      setStep(step+1);
   }

   const submitOtp=()=>{
      navigation.navigate("ResetPassword");
   }

   return (
        <View style={[ForgotPasswordStyle.container,{backgroundColor:theme.colors.BACKGROUND}]}>
             <View style={ForgotPasswordStyle.rowHeader}>
                <TouchableOpacity onPress={()=>navigation.navigate("Login")}><AntDesign name="arrowleft" color={theme.colors.TEXT} size={30} /></TouchableOpacity>
                <Text style={[ForgotPasswordStyle.headerText,{color:theme.colors.TEXT}]}>Forgot Password</Text>
             <View></View>
             
             </View>
             {step==0&&
             <>
             <View style={ForgotPasswordStyle.recoverContainer}>
                <Text style={[ForgotPasswordStyle.subText,{color:theme.colors.TEXT}]}>Select which contact detail should we use to reset your password</Text>
             <TouchableOpacity onPress={()=>setSelection(0)} style={[ForgotPasswordStyle.buttonContainer,{borderColor:isSelected==0?theme.colors.PRIMARY:theme.colors.DEFAULT}]}>
                <View style={[ForgotPasswordStyle.iconContainer,{backgroundColor:theme.colors.LIGHTBLUE}]}>
                    <MaterialIcon name="message" size={20} color={theme.colors.PRIMARY} />
                </View>
                <View style={ForgotPasswordStyle.textContainer}>
                <Text style={[ForgotPasswordStyle.subText,{color:theme.colors.TEXT}]}>via SMS</Text>
                <Text style={[ForgotPasswordStyle.subText,{color:theme.colors.TEXT,fontWeight:'bold'}]}>+2348130*****567</Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>setSelection(1)} style={[ForgotPasswordStyle.buttonContainer,{borderColor:isSelected==1?theme.colors.PRIMARY:theme.colors.DEFAULT}]}>
                <View style={[ForgotPasswordStyle.iconContainer,{backgroundColor:theme.colors.LIGHTBLUE}]}>
                    <MaterialIcon name="forward-to-inbox" size={20} color={theme.colors.PRIMARY} />
                </View>
                <View style={ForgotPasswordStyle.textContainer}>
                <Text style={[ForgotPasswordStyle.subText,{color:theme.colors.TEXT}]}>via Email</Text>
                <Text style={[ForgotPasswordStyle.subText,{color:theme.colors.TEXT,fontWeight:'bold'}]}>seyi*********@gmail.com</Text>
                </View>
             </TouchableOpacity>
             </View>
                <View></View>
             <TouchableOpacity onPress={chooseMode} style={ForgotPasswordStyle.actionButton}>
                 <Text style={ForgotPasswordStyle.actionText}>Continue</Text>
             </TouchableOpacity>
             </>}
             {step==1&&
             <>
             <View style={ForgotPasswordStyle.recoverContainer}>
                <Text style={[ForgotPasswordStyle.subText,{color:theme.colors.TEXT}]}>Code has been sent to +2348130*****567</Text>
               <View style={ForgotPasswordStyle.inputContainer}>
                  <TextInput onChangeText={(e)=>addOtp(0,e)} style={[ForgotPasswordStyle.input,{borderColor:otp[0]!=undefined?theme.colors.PRIMARY:error.otp?theme.colors.ERROR:theme.colors.TEXT,color:theme.colors.TEXT}]}></TextInput>
                  <TextInput onChangeText={(e)=>addOtp(1,e)} style={[ForgotPasswordStyle.input,{borderColor:otp[1]!=undefined?theme.colors.PRIMARY:error.otp?theme.colors.ERROR:theme.colors.TEXT,color:theme.colors.TEXT}]}></TextInput>
                  <TextInput onChangeText={(e)=>addOtp(2,e)} style={[ForgotPasswordStyle.input,{borderColor:otp[2]!=undefined?theme.colors.PRIMARY:error.otp?theme.colors.ERROR:theme.colors.TEXT,color:theme.colors.TEXT}]}></TextInput>
                  <TextInput onChangeText={(e)=>addOtp(3,e)} style={[ForgotPasswordStyle.input,{borderColor:otp[3]!=undefined?theme.colors.PRIMARY:error.otp?theme.colors.ERROR:theme.colors.TEXT,color:theme.colors.TEXT}]}></TextInput>
               </View>
             {error.otp&&
                        <View style={ForgotPasswordStyle.errorContainer}>
                        <MaterialIcon style={ForgotPasswordStyle.errorText} name="error" size={20} />
                            <Text style={ForgotPasswordStyle.errorText}>{error.otp}</Text>
                        </View>}
                        <Text style={[ForgotPasswordStyle.subText,{color:theme.colors.TEXT}]}>Resend code in <Text style={{color:theme.colors.PRIMARY,fontWeight:'bold'}}>56</Text> s</Text>
                        <View></View>
             </View>
             <TouchableOpacity onPress={submitOtp} disabled={disabled} style={[ForgotPasswordStyle.actionButton,,{backgroundColor:disabled?"#93B8FE":'#4182FE',borderColor:disabled?"#93B8FE":'#4182FE'}]}>
                 <Text style={ForgotPasswordStyle.actionText}>Verify</Text>
             </TouchableOpacity>
             </>}
             <Loader modalVisible={loading}/>
        </View>
    );
};

export default ForgotPassword;