// Style Show Post user!

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    Vheader:{
        flex:0.1,
        flexDirection:'row',
        alignItems:'center',
        marginTop:'8%',
        backgroundColor:'black',
        borderBottomWidth:4,
        borderBottomColor:'white'
    },
    toucharrow:{
        margin:'4%'
    },
    Vlogo:{
        width:'70%',
        alignItems:"center",

    },
    logo:{
        width:200,
        height:50,
    },




    Vinfo:{
        flex:0.83,
        backgroundColor:"#3D0583"
    },
    V2info:{
        flex:1,
        alignItems:'center',
        justifyContent:"center",
    },
    Vcontpost:{
        flex:0.70,
        alignItems:'center',
        borderRadius:26,
        borderWidth:4,
        width:'80%',
        margin:'3%',
        backgroundColor:'#CBC2F0'
    },
    vnomeft:{
        flex:0.18,
        flexDirection:'row',
        alignItems:'center',
        width:'95%',
        margin:'2%',
    },
    foto:{
        width:50,
        height:50,
        marginLeft:'5%',
        borderRadius:35
    },
    txtnome:{
        fontSize:17,
        fontWeight:'bold',
        margin:'5%'
    },
    txtcont:{
        flex:0.40,
        alignItems:'center',
        width:'85%',
        margin:'1%',
        fontSize:13,
        fontWeight:'bold'
    },
    Vphoto:{
        flex:0.40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        width:'85%'
    },
    ftcont:{
        resizeMode: 'cover',
        borderWidth:2,
        borderColor:'black',
        borderRadius:6,
        height:'95%',
        width:'30%'
    },

    Vgeoloc:{
        flex:0.35,
        width:'80%',
        margin:'2%',
        borderRadius:26,
        borderWidth:4,
        backgroundColor:'white'
    },




    Vads:{
        flex:0.07,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center'
    }


  });
  
  export default styles;
