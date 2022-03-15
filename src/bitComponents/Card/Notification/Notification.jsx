import React from 'react';
import { Image, Text, View } from 'react-native';
import { Cancel, Notify, Success } from '../../../Images';
import useTheme from '../../../Theme/useTheme';
import NotificationStyle from "./notificationstyle.js"

function Notification(props) {
    const theme=useTheme();
    return (
        <View style={[NotificationStyle.container,{borderColor:theme.colors.DEFAULT,backgroundColor:theme.colors.BACKGROUND_SEC}]}>
            <Image source={props.type==="cancel"?Cancel:props.type==="success"?Success:Notify} style={NotificationStyle.image}  />
            <View style={NotificationStyle.columnText}>
                <Text style={[NotificationStyle.titleText,{color:theme.colors.TEXT}]}>{props.title}</Text>
                <Text style={[NotificationStyle.subText,{color:theme.colors.TEXT}]}>{props.label}</Text>
            </View>
        </View>
    );
}

export default Notification;