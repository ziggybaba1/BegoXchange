import { StyleSheet,Dimensions,Platform } from 'react-native';

const {width,height}=Dimensions.get('screen');
const isSmallDevice = Dimensions.get('window').width < 768

export default  StyleSheet.create({
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

});