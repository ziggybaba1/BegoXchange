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
recoverContainer:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between',
    padding:15
},
subText:{
    fontSize:15,
    fontWeight:'400',
},
buttonContainer:{
    display:'flex',
    flexDirection:'row',
    padding:20,
    width:300,
    borderWidth:1,
    marginTop:20,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15,
},
iconContainer:{
    padding:20,
    borderRadius:100,
    marginRight:10

},
textContainer:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center'
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
inputContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    width:50,
    height:300,
    marginTop:20
},
input:{
    width:50,
    height:50,
    borderWidth:1,
    borderRadius:5,
    textAlign:'center',
    fontSize:15,
    fontWeight:'500',
    marginLeft:10
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
    marginTop:-150,
    marginBottom:20,
    paddingLeft:20
},
errorText:{
    fontSize:16,
    fontWeight:'500',
    color:'red',
},

});