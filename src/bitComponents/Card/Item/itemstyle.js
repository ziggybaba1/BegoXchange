import { StyleSheet,Dimensions,Platform } from 'react-native';

const {width,height}=Dimensions.get('screen');
const isSmallDevice = Dimensions.get('window').width < 768

export default  StyleSheet.create({
container:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    padding:10,
    margin:0,
    borderRadius:20,
},
subcontainer:{
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
},
imageCard:{
    position:'relative',
    top:0,
    left:0,
    width:200,
    height:200,
    borderTopEndRadius:10,
    borderTopStartRadius:10
},
shareContainer:{
   position:"absolute",
   top:10,
   right:0 ,
   display:'flex',
    flexDirection:'row',
    
},
shareButton:{
   padding:3,
   borderRadius:100,
   borderWidth:2 ,
   marginRight:5
},
bottomContainer:{
    display:'flex',
    flexDirection:'column',
    width:200,
    borderBottomEndRadius:10,
    borderBottomStartRadius:10,
    borderWidth:1,
    padding:10
},
titleRow:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between'
},
bottomTitle:{
    fontSize:15,
    fontWeight:'bold',
    padding:0, 
},
priceContainer:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingTop:10,
    paddingBottom:10
},
priceRow:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
},
iconPrice:{
    marginRight:3
},
priceText:{
    fontSize:13,
    fontWeight:'bold',
},
timeButton:{
    padding:5,
    borderWidth:1,
    borderRadius:15,
    margin:5
},
priceButton:{
    padding:8,
    borderWidth:1,
    borderRadius:15,
}

});