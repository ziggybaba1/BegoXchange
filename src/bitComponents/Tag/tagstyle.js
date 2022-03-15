import { StyleSheet,Dimensions,Platform } from 'react-native';

const {width,height}=Dimensions.get('screen');
const isSmallDevice = Dimensions.get('window').width < 768

export default  StyleSheet.create({
container:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
padding:10,
borderRadius:20,
borderWidth:2,
marginRight:10
},
icon:{
    marginRight:10,
    fontWeight:'bold'
},
tagText:{
    fontSize:15,
    fontWeight:'600'
}


});