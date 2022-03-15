import React, { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import ResetPasswordStyle from "./resetpasswordstyle.js";
import { Input, Loader, SimpleHeader } from '../../../bitComponents';
import useTheme from '../../../Theme/useTheme.js';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Checkbox } from 'react-native-paper';
import { Logo } from '../../../Images/index.js';

const ResetPassword = ({route,navigation}) => {
    const theme=useTheme();
    const [finish,setFinished]=useState(false);
    const [error,setError]=useState({});
    const [isSelected, setSelection] = useState(0);
   const [email,setEmail]=useState(null);
   const [password,setPassword]=useState(null);
   const [disabled,setDisabled]=useState(false);
   const [loading,setLoading]=useState(false);

   const savePassword=async()=>{
    setFinished(true);
   }

    return (
        <View style={[ResetPasswordStyle.container,{backgroundColor:theme.colors.BACKGROUND}]}>
            {!finish&&
            <>
            <SimpleHeader label="Reset Password" onPress={()=>navigation.navigate("Login")} />
             <View style={ResetPasswordStyle.formContainer}> 
                <Input 
                disabled={disabled}
                placeholder={"New Password"}
                password={true}
                errorMessage={""}
                error={false}
                label={"New Password"}
                required={true}
                />
                 <Input 
                disabled={disabled}
                placeholder={"Confirm Password"}
                password={true}
                errorMessage={"Password Confirmation error"}
                error={false}
                label={"Confirm Password"}
                required={true}
                />
                <TouchableOpacity style={ResetPasswordStyle.rememberContainer} onPress={()=>setSelection(isSelected?false:true)}>
                    <Checkbox
                    color={theme.colors.PRIMARY}
                        status={isSelected ? 'checked' : 'unchecked'}
                        onValueChange={()=>setSelection(isSelected?false:true)}
                        style={ResetPasswordStyle.checkbox}
                        />
                          <Text style={[ResetPasswordStyle.checkboxLabel,{color:theme.colors.TEXT}]}>Remember me</Text>
                   </TouchableOpacity>  
             </View>
             <View></View>
             <View></View>
             <TouchableOpacity onPress={savePassword} disabled={disabled}  style={[ResetPasswordStyle.actionButton,{backgroundColor:disabled?"#93B8FE":'#4182FE',borderColor:disabled?"#93B8FE":'#4182FE'}]}>
                   <Text style={[ResetPasswordStyle.actionText]}>Save</Text>
               </TouchableOpacity>
               </>}
               {finish&&
                <>
                <View></View>
               <View>
               <Image  source={Logo} style={ResetPasswordStyle.logo} />
                <Text style={[ResetPasswordStyle.textTitle,{color:theme.colors.PRIMARY}]}>CONGRATS!</Text>
          <Text style={[ResetPasswordStyle.textTitle,{color:theme.colors.TEXT}]}>Your account is ready to use</Text>
          </View>
          <View style={ResetPasswordStyle.bottom}>
             <TouchableOpacity onPress={()=>navigation.navigate("Register")} style={ResetPasswordStyle.actionButton}>
                 <Text style={ResetPasswordStyle.actionText}>Go to homepage</Text>
             </TouchableOpacity>
          </View>
                </>
               }
               <Loader modalVisible={loading}/>
        </View>
    );
};

export default ResetPassword;