import { StyleSheet,Dimensions,Platform } from 'react-native';

const {width,height}=Dimensions.get('screen');
const isSmallDevice = Dimensions.get('window').width < 768

export default  StyleSheet.create({
container:{
display:'flex',
flexDirection:'column',
justifyContent:'space-between',
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
rowHeader:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    width:width,
    justifyContent:"space-between",
    ...Platform.select({
        ios: {
           marginTop:30,
          },
          android: {
            marginTop:30,
          },
          default: {
            // other platforms, web for example
            marginTop:10,
          }
        }),
    padding:20
},
headerText:{
    fontSize:20,
    fontWeight:'600',
    textAlign:'center',
},
formContainer:{
    display:'flex',
    flexDirection:'column',
    // justifyContent:'center',
    // alignItems:'center'
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
  marginBottom:50,
  borderColor:'#4182FE',
  borderWidth:1
},
actionText:{
  fontSize:15,
  fontWeight:'500',
  textAlign:'center',
  color:'white'
},
container:{
  display:'flex',
  flexDirection:'column',
  justifyContent:'space-between',
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
bottom:{
   display:'flex',
   flexDirection:'column',
   justifyContent:'center',
   alignItems:'center'

},

textHeader:{
  fontSize:25,
  fontWeight:'600',
  textAlign:'center',
  color:'#000',
  // marginBottom:20
},

textTitle:{
   fontSize:20,
   fontWeight:'600',
   textAlign:'center',
   color:'#000',
   marginBottom:20
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
}
});