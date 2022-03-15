import { StyleSheet,Dimensions,Platform } from 'react-native';

const {width,height}=Dimensions.get('screen');
const isSmallDevice = Dimensions.get('window').width < 768

export default  StyleSheet.create({
container:{
display:'flex',
flexDirection:'column',
justifyContent:'space-evenly',
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
backgroundColor:'#fff'
},
logoContainer:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',  
},
logo:{
   width:250,
   height:200,
   resizeMode:'contain',
   marginBottom:20,
   ...Platform.select({
    ios: {
        marginTop:80
      },
      android: {
        marginTop:80
      },
      default: {
        // other platforms, web for example
        marginTop:30
      }
    }),
},
formContainer:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'

},
inputContainer:{
    display:'flex',
    flexDirection:'column', 
    marginBottom:20
},
textContainer:{
    display:'flex',
    flexDirection:'row', 
},
input:{
    height:40,
    width:300,
    borderRadius:20,
    borderWidth:1,
    padding:10
},
inputPassword:{
    display:'flex',
    flexDirection:'row',  
    justifyContent:'space-between',
    height:40,
    width:300,
    borderRadius:20,
    borderWidth:1,
    padding:10
},
errorContainer:{
    display:'flex',
    flexDirection:'row', 
    alignItems:'center',
    padding:10,
    backgroundColor:'#e8bec57a',
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    marginTop:10,
    paddingLeft:20
},
errorText:{
    fontSize:16,
    fontWeight:'500',
    color:'red',
},
textTitle:{
    fontSize:20,
    fontWeight:'600',
    textAlign:'center',
    color:'#000',
    marginBottom:20
},
rememberContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    // justifyContent:'center',
},
checkboxContainer:{
    display:'flex',
    flexDirection:'row', 
    alignItems:'center',
    justifyContent:'center',
    ...Platform.select({
        ios: {
            height:20,
            width:20,
          }
        }),
borderColor:'#bdc3c7',
borderWidth:0.5,
},
checkbox:{
    alignSelf: "center",
},
checkboxLabel:{
    fontSize:16,
    fontWeight:'500',
},

actionButton:{
    padding:10,
    width:200,
    backgroundColor:'#4182FE',
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
    marginBottom:20,
    borderColor:'#4182FE',
    borderWidth:1
},
actionText:{
    fontSize:15,
    fontWeight:'500',
    textAlign:'center',
    color:'white'
},
alternateContainer:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center', 
},
alternateButtonContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center', 
    marginTop:10,
},
buttonAlternate:{
    display:'flex',
    flexDirection:'row', 
    alignItems:'center',
    justifyContent:'center',
    padding:10,
    marginRight:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,

},
alternateLowContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center', 
    marginTop:10,
    marginBottom:20 
}



});