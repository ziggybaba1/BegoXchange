import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Notification } from '../../bitComponents/index.js';
import useTheme from '../../Theme/useTheme.js';
import NotificationListStyle from './notificationliststyle.js';

function NotificationList(props) {
    const theme=useTheme();
    return (
        <View style={NotificationListStyle.container}>
             <ScrollView>
                <View style={NotificationListStyle.itemContainer}>
                    <Text style={[NotificationListStyle.title,{color:theme.colors.TEXT}]}>Today, December 25 2022</Text>
                    <Notification type="success" title="Place a bid Success" label="You have successfully bid an item and it will be on the list"  />
                    <Notification type="success" title="Place a bid Success" label="You have successfully bid an item and it will be on the list"  />
                    <Notification type="cancel" title="You have canceled NFT Listing" label="You can ist NFT whenever you want"  />
                </View>
                <View style={NotificationListStyle.itemContainer}>
                    <Text style={[NotificationListStyle.title,{color:theme.colors.TEXT}]}>Today, December 25 2022</Text>
                    <Notification type="cancel" title="You have canceled NFT Listing" label="You can ist NFT whenever you want"  />
                    <Notification type="notify" title="New Feature Available" label="Now you can split window between NFT and creator " />
                    <Notification type="success" title="Place a bid Success" label="You have successfully bid an item and it will be on the list"  />
                </View>
             </ScrollView>
        </View>
    );
}

export default NotificationList;