import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Icon  from 'react-native-vector-icons/Entypo';
import { SlideOne } from '../../../Images/index.js';
import SlideFirstStyle from "./slidefirststyle.js";
import { useNavigation } from '@react-navigation/native';


function SlideFirst(props) {
    const nav = useNavigation();
    return (
        <View style={[SlideFirstStyle.container,{backgroundColor:props.theme.type?props.sliders.color:props.theme.colors.BACKGROUND}]}>
              <Image source={props.sliders.image} style={SlideFirstStyle.logo} />
              <View style={[SlideFirstStyle.bottom,{backgroundColor:props.theme.colors.BACKGROUND}]}>
                    <View style={SlideFirstStyle.lineSpot}></View>
                    <View style={SlideFirstStyle.textContainer}>
                        <Text style={[SlideFirstStyle.textTitle,{color:props.theme.colors.PRIMARY}]}>{props.sliders.title}</Text>
                        <Text style={[SlideFirstStyle.textSubtitle,{color:props.theme.colors.TEXT}]}>{props.sliders.subtitle}</Text>
                        <View style={SlideFirstStyle.dotContainer}>
                            <Icon name={'dot-single'} size={25} color={props.sliders.next==0?"#4182FE":null} />
                            <Icon name={'dot-single'} size={25} color={props.sliders.next==1?"#4182FE":null}/>
                            <Icon name={'dot-single'} size={25} color={props.sliders.next==2?"#4182FE":null}/>
                        </View>

                        <TouchableOpacity onPress={()=>nav.navigate("Welcome")}><Text style={SlideFirstStyle.textTitle}>Skip</Text></TouchableOpacity>
                        <TouchableOpacity onPress={()=>props.clickSlide(props.sliders.next)} style={SlideFirstStyle.actionButton}>
                            <Text style={SlideFirstStyle.actionText}>Next</Text>
                        </TouchableOpacity>
                    </View>
                    <View></View>
              </View>
        </View>
    );
}

export default SlideFirst;