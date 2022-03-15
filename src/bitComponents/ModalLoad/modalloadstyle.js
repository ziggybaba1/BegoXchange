import { StyleSheet,Dimensions,Platform } from 'react-native';

const {width,height}=Dimensions.get('screen');
const isSmallDevice = Dimensions.get('window').width < 768

export default  StyleSheet.create({
container:{
display:'flex',
flexDirection:'column',
justifyContent:'center',
alignItems:'center',

},
centeredView:{
  display:'flex',
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
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
      width:width
    }
  }),
  backgroundColor:'rgba(0,0,0,0.6)'
},
modalView:{
  display:'flex',
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
  height:100,
width:100,
backgroundColor:'white',
  padding:50,
  borderTopLeftRadius:15,
  borderTopRightRadius:15,
  borderBottomLeftRadius:15,
  borderBottomRightRadius:15,
}

});