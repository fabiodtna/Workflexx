// styles Home page!

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
    },
    Vheader:{
        flex:0.23,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center',
        borderBottomWidth:2,
        borderColor:'white'
    },
    V1header:{
        flex:0.7,
        width:'90%',
        marginTop:'5%',
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
    },
    styleimg:{
        width: 160,
        height: 30,
    },
    btnhamb:{
        width:'17%',
        padding:3,
    },
    VModal:{
        flex: 0.25,
        width:'30%',
        alignSelf:'flex-end',
        justifyContent:'center',
        marginRight:'3%',
        marginTop:'10%'
    },
    hambopt:{
        padding:5,
        width:'100%',
        borderWidth:1,
        borderRadius:4,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    hamtxt:{
        fontSize:14,
        fontWeight:'bold'
    },


   
    V2header:{
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
    },
    Vsearch:{
        marginTop:'3%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'80%',
        marginBottom:'-2%'
    },
    inpsearch:{
        backgroundColor:'#37007d',
        color:'white',
        fontWeight:'bold',
        alignItems:'center',
        borderWidth:3,
        borderColor:'white',
        width:'70%',
        padding:4,
        margin:'2%',
        borderRadius:10,
    },
    btnsearch:{
        marginHorizontal:'3%',
        borderWidth:2,
        width:40,
        alignItems:'center',
        padding:3,
        borderColor:'white',
        borderRadius:15
    },

    Vinfo:{
        flex:0.78,
        backgroundColor:'#37007d'
    },

// flatlist style 

    Vflatlist:{
        flex:0.95,
        borderRadius:10,
    },
    Vinfoflat:{
        height:185,
        flexDirection:"row",
        borderWidth:3,
        backgroundColor:'#AB9CE7',
        borderRadius:5,
    },
    Vinfopost:{
        flex:0.65,
        borderRadius:5
    },
    fotouser:{
        backgroundColor:"black",
        width:51,
        padding:15,
        borderRadius:30,
        margin:'3%'
    },
    flatxtnome:{
        fontSize:16,
        fontWeight:"bold"
    },
    Vtxtinfo:{
        flex:0.9,
        alignItems:'center',
        width:'90%',
        margin:'3%'
    },
    txtinfo:{
        fontSize:14,
        fontWeight:'bold'
    },


    Vflatphot:{
        flex:0.40,
        margin:'2%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:"center"
    },
    flatimg1:{
        borderWidth:2,
        borderColor:'black',
        borderRadius:5,
        width:'40%',
        height:120,
        margin:'3%',
    },



    // ads style
    Vads:{
        flex:0.08,
        justifyContent:'center',
        backgroundColor:'red',
        alignItems:'center'
    }
  });
  
  export default styles;