import { StyleSheet,Dimensions,Platform } from 'react-native';
const {width,height}=Dimensions.get('screen');
const isSmallDevice = Dimensions.get('window').width < 768

export default  StyleSheet.create({
container:{
display:'flex',
flexDirection:'column',
// alignItems:'center',
},
rowContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingRight:20,
    paddingLeft:20,
    paddingTop:10
},
scrollView:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    overflow:'scroll',
}


});