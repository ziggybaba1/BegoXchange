import React from 'react';
import { ScrollView, View } from 'react-native';
import { HomeHeader } from '../../bitComponents/index.js';
import { BottomNav, ItemList, LearnCardList, TagList } from '../../components/index.js';
import useTheme from '../../Theme/useTheme.js';
import HomeStyle from "./homestyle.js";

const Home = ({route,navigation}) => {
    const theme=useTheme();
    return (
        <View style={{display:'flex',flexDirection:'row',justifyContent:'center',backgroundColor:theme.colors.BACKGROUND}}>
        <View style={[HomeStyle.container,{backgroundColor:theme.colors.BACKGROUND}]}>
            <HomeHeader navigation={navigation} />
            <ScrollView showsHorizontalScrollIndicator={false}>
            <TagList />
            <LearnCardList />
            <ItemList />
            <ItemList />
            </ScrollView>
            <BottomNav />
        </View>
        </View>
    );
};

export default Home;