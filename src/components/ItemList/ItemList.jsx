import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Item } from '../../bitComponents';
import useTheme from '../../Theme/useTheme';
import ItemListStyle from "./itemliststyle.js";

function ItemList(props) {
    const theme=useTheme();
const data=[{},{},{},{},{},{}];
    const renderItem = ({ item,index }) => (
        <Item />
          );
    return (
        <View style={ItemListStyle.container}>
        <View style={ItemListStyle.rowContainer}>
        <Text style={{fontSize:15,fontWeight:'bold',color:theme.colors.TEXT}}>Live Bidding</Text>
        <TouchableOpacity> 
        <Text style={{fontSize:15,fontWeight:'bold',color:theme.colors.PRIMARY}}>See all</Text>
        </TouchableOpacity>
        </View>
        <View style={ItemListStyle.scrollView}>
        <FlatList
        // contentContainerStyle={{alignSelf: 'flex-start'}}
        // columnWrapperStyle={{alignItems: 'space-between'}}
        pagingEnabled={true}
        horizontal
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id} 
        // style={{width:200}}
        /> 
        
        </View>
    </View>
    );
}

export default ItemList;