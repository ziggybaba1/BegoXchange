import { StyleSheet,Dimensions,Platform } from 'react-native';

const {width,height}=Dimensions.get('screen');
const isSmallDevice = Dimensions.get('window').width < 768

export default  StyleSheet.create({
container:{
display:'flex',
flexDirection:'row',
alignItems:'center',
justifyContent:'space-evenly',
margin:0,
borderTopLeftRadius:15,
borderTopRightRadius:15,
borderWidth:1,
padding:10
},
bottomButton:{
    padding:10,
    borderRadius:10,
    ...Platform.select({
        ios: {
            marginBottom:20
          },
          android: {
            marginBottom:20
          },
          default: {
            // other platforms, web for example
            marginBottom:isSmallDevice?10:30
          }
        }),
}

});