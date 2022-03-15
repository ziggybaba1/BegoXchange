import { StyleSheet,Dimensions,Platform } from 'react-native';
const {width,height}=Dimensions.get('screen');
const isSmallDevice = Dimensions.get('window').width < 768
export default StyleSheet.create({
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
backgroundColor:'#9BEAF1'
},
logo:{
   width:250,
   height:250,
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
    justifyContent:'space-between',
    alignItems:'center',
    ...Platform.select({
        ios: {
            width:width,
            height:height/2,
          },
          android: {
           width:width,
           height:height/2,
          },
          default: {
            // other platforms, web for example
            width:isSmallDevice?width/1.5:width/3,
            height:isSmallDevice?height/2:height/2.3,
          }
        }),
    backgroundColor:'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30

},
lineSpot:{
    width:50,
    height:3,
    backgroundColor:'rgba(128, 128, 128,0.29)',
    marginTop:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
},
textContainer:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    padding:20
},
textTitle:{
    fontSize:20,
    fontWeight:'600',
    textAlign:'center',
    color:'#4182FE',
    marginBottom:20
},
textSubtitle:{
    fontSize:13,
    fontWeight:'400',
    textAlign:'center',
    color:'#000',
    marginBottom:10
},
dotContainer:{
    display:'flex',
    flexDirection:'row',
    ...Platform.select({
        ios: {
            marginBottom:50
          },
          android: {
            marginBottom:50
          },
          default: {
            // other platforms, web for example
            marginBottom:isSmallDevice?10:50
          }
        }),
    
},
actionButton:{
    padding:10,
    width:200,
    backgroundColor:'#4182FE',
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15
},
actionText:{
    fontSize:15,
    fontWeight:'500',
    textAlign:'center',
    color:'white'
}


});