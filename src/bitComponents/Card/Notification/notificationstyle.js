import { StyleSheet,Dimensions,Platform } from 'react-native';

const {width,height}=Dimensions.get('screen');
const isSmallDevice = Dimensions.get('window').width < 768

export default  StyleSheet.create({
container:{
display:'flex',
flexDirection:'row',
alignItems:'center',
// justifyContent:'space-between',
marginBottom:10,
borderRadius:10,
borderWidth:0,
padding:10
},
image:{
    height:70,
    width:70,
    marginRight:40
},
columnText:{
    display:'flex',
    flexDirection:'column',
    width:width/2,
},
titleText:{
    fontSize:15,
    fontWeight:'bold',
    marginBottom:5
},
subText:{
    fontSize:13,
    fontWeight:'400',
    marginBottom:5,
    lineHeight:15
},


});