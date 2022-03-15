import { StyleSheet,Dimensions,Platform } from 'react-native';

const {width,height}=Dimensions.get('screen');
const isSmallDevice = Dimensions.get('window').width < 768

export default  StyleSheet.create({
container:{
display:'flex',
flexDirection:'column',
// alignItems:'center',
justifyContent:'space-between',
padding:10,
margin:0,
borderRadius:20,
...Platform.select({
    ios: {
        height:200,
        width:width/1.06
      },
      android: {
       height:200,
       width:width/1.06
      },
      default: {
        // other platforms, web for example
        height:200,
        width:isSmallDevice?width/1.06:width/2.05
      }
    }),
},
titleText:{
    fontSize:25,
    fontWeight:'600',
    width:250,
    lineHeight:30
},
buttonCard:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:5,
    borderRadius:10,
    width:150,

},
textButton:{
    fontSize:15,
    fontWeight:'500',
}



});