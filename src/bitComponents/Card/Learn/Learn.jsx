import React from 'react';
import { ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import useTheme from '../../../Theme/useTheme.js';
import LearnStyle from "./learnstyle.js";
import { LearnImage } from '../../../Images/index.js';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";



function LearnCard(props) {
    const theme=useTheme();
    return (
        <ImageBackground imageStyle={{ borderRadius: 20}} source={LearnImage} style={[LearnStyle.container,{backgroundColor:theme.colors.JUICE}]}>
           <View></View>
           <Text style={[LearnStyle.titleText,{color:theme.colors.LIGHT}]}>Contact and Sell extraordinary NFTS</Text>
            <TouchableOpacity style={[LearnStyle.buttonCard,{backgroundColor:theme.colors.PRIMARY}]}>
            <MaterialIcons style={{color:theme.colors.LIGHT,marginRight:10}} size={20} name="play-circle-fill"  />
                <Text style={[LearnStyle.textButton,{color:theme.colors.LIGHT}]}>Learn more</Text>
            </TouchableOpacity>
            <View></View>
        </ImageBackground>
    );
}

export default LearnCard;