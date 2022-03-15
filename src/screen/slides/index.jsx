import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SlideFirst } from '../../components';
import { SlideOne,SlideSecond, SlideThird } from '../../Images/index.js';
import useTheme from '../../Theme/useTheme';

export default function Slides({route,navigation}) {
const [index,setIndex]=useState(0);
const theme = useTheme();
    const sliders=[
        {
            title:"The world's largest digital marketplace for NFT",
            subtitle:"The world's largest digital marketplace for crypto collectibles and non fungible tokens. Buy, sell and discover exclusive digital items",
            image:SlideOne,
            color:"#9BEAF1",
            next:0
        },
        {
            title:"Secure your digital assets with best one",
            subtitle:"BegoXchange has partnered with some notable companies and recently partnered with Binance to help secure non fungible tokens artists' and creators' work",
            image:SlideSecond,
            color:"#E8BEC5",
            next:1
        },
        {
            title:"Provides a variety support of cryptocurrency wallet",
            subtitle:"Supports more than 150 cryptocurrency wallet, for an introduction to the non-fungible tokens world, BegoXchange is a great place to start",
            image:SlideThird,
            color:"#E8BEC5",
            next:2
        }
    ];

    const clickSlide=(id)=>{
        if(id==2){
            navigation.navigate("Welcome");
            return false;
        }
            setIndex(id+1);
    }

    return (
        <SlideFirst theme={theme} clickSlide={clickSlide} sliders={sliders[index]}/>
    );

}