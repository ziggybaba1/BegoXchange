import { StyleSheet,Dimensions,Platform } from 'react-native';
const {width,height}=Dimensions.get('screen');

const isSmallDevice = Dimensions.get('window').width < 768
export default StyleSheet.create({
container:{
display:'flex',
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
...Platform.select({
    ios: {
        height:height
      },
      android: {
       height:height
      },
      default: {
        // other platforms, web for example
        height:height/1.2,
        width:width
      }
    }),
backgroundColor:'white'
},
logo:{
   width:150,
   height:150,
   resizeMode:'contain',
   marginBottom:20
}
});