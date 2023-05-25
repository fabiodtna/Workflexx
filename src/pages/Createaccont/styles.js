// Styles Create accont!

import {BackHandler, StyleSheet} from 'react-native';

const styles = StyleSheet.create({


    Vcontainer:{
        flex:1
    },

// header 
    Vheader:{
        flex:0.13,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-end',
        borderBottomWidth:3,
        borderColor:'white',
        backgroundColor:'black',
    },
    btncapa:{
        flex:0.2,
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:5,
        backgroundColor:'#249fa7',
        marginRight:'10%',
        marginBottom:'-8%',
        padding:2
    },
  
/// body 
    Vinfo:{
        flex:0.87,
        backgroundColor:'#37007d'
    },
      Vphot:{
        backgroundColor:'white',
        width:100,
        height:120,
        justifyContent:'center',
        alignItems:'center',
        position:'absolute',
        borderRadius:45,
        left:'10%',
        marginTop:'-6%' 
    },
    Vnomesobre:{
        marginTop:'1%',
    },
    Touchinpnome:{
        padding:1.5,
        width:'50%',
        borderBottomWidth:2,
        borderColor:'white',
        marginLeft:'40%',
        marginBottom:'2%'
    },
    Touchinpsobren:{
        padding:1.5,
        width:'50%',
        borderBottomWidth:2,
        borderColor:'white',
        marginLeft:'40%',
        marginBottom:'5%'
    },
    Inpstxt:{
        marginLeft:'5%',
        fontSize:15,
        color:'white'
    },
    Touchinpmail:{
        marginLeft:'10%',
        padding:1.5,
        width:'65%',
        borderBottomWidth:2,
        borderColor:'white',
        marginBottom:'1%'
    },
    Touchinpcpf:{
        marginLeft:'10%',
        padding:1.5,
        width:'55%',
        borderBottomWidth:2,
        borderColor:'white',
        marginBottom:'1%'
    },
    Touchinpass:{
        marginLeft:'10%',
        padding:1.5,
        width:'55%',
        borderBottomWidth:2,
        borderColor:'white',
        marginBottom:'1%'
    },
    Touchinnum:{
        marginLeft:'10%',
        padding:1.5,
        width:'50%',
        borderBottomWidth:2,
        borderColor:'white',
        marginBottom:'1%'
    },
    btncity:{
        margin:'2%',
        alignItems:'center',
        marginLeft:'10%',
        borderWidth:1,
        backgroundColor:'#FFFCFC',
        borderRadius:5,
        width:'40%'
    },
    btncitytxt:{
        fontSize:14,
        fontWeight:'bold'
    },

    // button radio 

    Vbtnradio:{
        justifyContent:'center',
        alignItems:'center',
        marginBottom:'2%',
    },
    Vvbtnradio:{
        width:'60%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    btnradio:{
        marginRight:'10%',
        marginLeft:'-1%',
        fontSize:15,
        color:'white',
        fontWeight:'bold'
    },
// modal

   
    Vmodal:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:"center"
    },
    Vconteudo:{
        alignItems:'center',
        width:'60%',
        borderRadius:10,
        borderWidth:2,
        borderColor:'black',
        backgroundColor:'#AB9CE7'
    },
    dropd:{
        width:'80%',
        height:200,
    },
    txtmodal:{
        fontSize:15,
        fontWeight:'bold'
    },  

// descrição input txt 

    Vdescri:{
        flex:0.6,
        alignItems:'center'
    },
    Touchdesc:{
        width:'72%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#249fa7',
        borderRadius:15,
        borderWidth:2,
    },
    inpdesc:{
        width:'90%',
        height:'95%',
        fontSize:16,
        textAlign:'center'
    },
    // Btn styles

    Vbtn:{
        flex:0.3,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        margin:'2%'
    },
    btncad:{
        backgroundColor:'#4E6DDB',
        width:'30%',
        borderRadius:10,
        alignItems:'center',
        padding:5,
        borderWidth:2
    },
    btncan:{
        backgroundColor:'#D9C8C8',
        width:'30%',
        borderRadius:10,
        alignItems:'center',
        padding:5,
        borderWidth:2
    },
    btntxt:{
        fontSize:15,
        fontWeight:"bold"
    }

  });
  
  export default styles;
