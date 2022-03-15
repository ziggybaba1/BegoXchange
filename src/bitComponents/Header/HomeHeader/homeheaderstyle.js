import { StyleSheet,Dimensions,Platform } from 'react-native';

const {width,height}=Dimensions.get('screen');
const isSmallDevice = Dimensions.get('window').width < 768

export default  StyleSheet.create({
container:{
display:'flex',
flexDirection:'row',
justifyContent:'space-between',

...Platform.select({
    ios: {
        marginTop:30
      },
      android: {
        marginTop:30
      },
      default: {
        // other platforms, web for example
        marginTop:0
      }
    }),
},
logoRow:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    padding:10
},
logo:{
    width:50,
    height:70,
    resizeMode:'contain',
    marginRight:10
},
logoText:{
   fontSize:18,
   fontWeight:'bold', 
},
iconRow:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',  
},
iconButton:{
    padding:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    marginRight:15
}

});