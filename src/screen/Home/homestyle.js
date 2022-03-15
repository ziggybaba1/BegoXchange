import { StyleSheet,Dimensions,Platform } from 'react-native';

const {width,height}=Dimensions.get('screen');
const isSmallDevice = Dimensions.get('window').width < 768

export default  StyleSheet.create({
container:{
display:'flex',
flexDirection:'column',
// justifyContent:'space-between',

...Platform.select({
    ios: {
        height:height,
        width:width
      },
      android: {
       height:height,
       width:width
      },
      default: {
        // other platforms, web for example
        height:height/1.2,
        width:isSmallDevice?width:width/2
      }
    }),
backgroundColor:'#fff'
},


});