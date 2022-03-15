import { StyleSheet,Dimensions,Platform } from 'react-native';
const {width,height}=Dimensions.get('screen');
const isSmallDevice = Dimensions.get('window').width < 768

export default  StyleSheet.create({
container:{
display:'flex',
flexDirection:'row',
alignItems:'center',
padding:10,
overflow:'scroll',
},
itemContainer:{
    display:'flex',
    flexDirection:'column',
    
},
title:{
    fontSize:16,
    fontWeight:'600',
    marginBottom:10
}


});