import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { ArtImage } from '../../../Images/index.js';
import ItemStyle from "./itemstyle.js";
import MaterialIcons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome"
import useTheme from '../../../Theme/useTheme.js';

function Item(props) {
    const theme=useTheme();
    return (
        <View style={ItemStyle.container}>
        <View style={ItemStyle.subcontainer}>
            <Image source={ArtImage}  style={ItemStyle.imageCard} />
            <View style={[ItemStyle.shareContainer]}>
           <TouchableOpacity style={[ItemStyle.shareButton,{borderColor:theme.colors.LINEBLUE}]}>
            <MaterialIcons style={{color:theme.colors.LINEBLUE}} name="md-share-social-outline" size={15} />
            </TouchableOpacity>
           <TouchableOpacity style={[ItemStyle.shareButton,{borderColor:theme.colors.LINEBLUE}]}>  
           <MaterialIcons style={{color:theme.colors.LINEBLUE}} name="heart" size={15} />
           </TouchableOpacity>
            </View>
        </View>
        <View style={[ItemStyle.bottomContainer,{borderColor:theme.colors.DEFAULT}]}>
            <View style={ItemStyle.titleRow}>
                <Text style={[ItemStyle.bottomTitle,{color:theme.colors.TEXT}]}>Cream3D #78</Text>
                <TouchableOpacity style={ItemStyle.titleRow}>
                <MaterialIcons style={{color:theme.colors.TEXT}} name="heart" size={15} />
                <Text style={{color:theme.colors.TEXT}}>234</Text>
                </TouchableOpacity>
            </View>
            <View style={ItemStyle.priceContainer}>
                <Text style={{color:theme.colors.TEXT_SECONDARY}}>StrongQuest</Text>
                <View style={ItemStyle.priceRow}>
                    <FontAwesome style={[ItemStyle.iconPrice,{color:theme.colors.PRIMARY}]} name="sort" size={18} />
                    <Text style={[ItemStyle.priceText,{color:theme.colors.PRIMARY}]}>0.537 ETH</Text>
                </View>
            </View>
            <View style={ItemStyle.priceRow}>
                    <TouchableOpacity style={[ItemStyle.timeButton,{borderColor:theme.colors.PRIMARY}]}>
                        <Text style={{color:theme.colors.PRIMARY}}>4h 16m left</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[ItemStyle.priceButton,{borderColor:theme.colors.LIGHT,backgroundColor:theme.colors.PRIMARY}]}>
                        <Text style={{color:theme.colors.LIGHT}}>Place a bid</Text>
                    </TouchableOpacity>
                </View>
        </View>
        </View>
    );
}

export default Item;