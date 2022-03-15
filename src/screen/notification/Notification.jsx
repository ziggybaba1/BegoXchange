import React from 'react';
import { ScrollView, View } from 'react-native';
import { HomeHeader, SimpleHeader } from '../../bitComponents/index.js';
import { BottomNav, NotificationList } from '../../components/index.js';
import useTheme from '../../Theme/useTheme.js';
import NotificationStyle from "./notificationstyle.js";

const Notification = ({route,navigation}) => {
    const theme=useTheme();
    return (
        <View style={{display:'flex',flexDirection:'row',justifyContent:'center',backgroundColor:theme.colors.BACKGROUND}}>
        <View style={[NotificationStyle.container,{backgroundColor:theme.colors.BACKGROUND}]}>
            <SimpleHeader onPress={()=>navigation.navigate('Home')} option={true} label="Notification" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <NotificationList />
            </ScrollView>
            <BottomNav />
        </View>
        </View>
    );
};

export default Notification;