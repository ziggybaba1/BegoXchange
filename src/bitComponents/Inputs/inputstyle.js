import { StyleSheet,Dimensions,Platform } from 'react-native';

const {width,height}=Dimensions.get('screen');
const isSmallDevice = Dimensions.get('window').width < 768

export default  StyleSheet.create({
    inputContainer:{
        display:'flex',
        flexDirection:'column', 
        marginBottom:20
    },
    textContainer:{
        display:'flex',
        flexDirection:'row', 
    },
    textTitle:{
        fontSize:20,
        fontWeight:'600',
        textAlign:'center',
        color:'#000',
        marginBottom:20
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
input:{
    borderWidth:0,
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

});