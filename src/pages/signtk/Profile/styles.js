// Style Page profile Users!

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1
    },  
    Vheader:{
        flex:0.15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:"space-between",
        width:'100%',
        backgroundColor:'black',
        borderBottomWidth:3,
        borderColor:'white'
    },
    toucharrow:{
        width:'10%',
        padding:5,
        marginLeft:'5%',
    },
    btncap:{
        width:'20%',
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        padding:3,
        borderRadius:4,
        backgroundColor:'white',
        flexDirection:'row',
        marginRight:'10%'
    },
    txtbtncap:{
        fontSize:14,
        fontWeight:'bold',
        marginRight:5
    },  



    Vcont:{
        flex:0.85,
        width:'100%',
        backgroundColor:'#37007d',
        alignItems:"center",
    },
    Vftnome:{
        flex:0.15,
        flexDirection:'row',
        alignItems:'center',
        width:'85%',
    },
    photo:{
        backgroundColor:'#C4C4C4',
        alignItems:'center',
        justifyContent:"center",
        width:100,
        height:100,
        borderRadius:50
    },
    Vnomes:{
        flex:0.9,
        justifyContent:'center',
        height:'99%',
        marginTop:'5%',
        marginLeft:'7%',
    },
    inptnome:{
        padding:3,
        borderBottomWidth:2,
        width:"100%"
    },
    Vcont2:{
        flex:0.82,
        width:'80%',
        marginTop:'7%',
    },
    inptpassandconf:{
        padding:3,
        borderBottomWidth:2,
        width:'75%',
        marginLeft:'2%'
    },
    inptelefone:{
        padding:3,
        borderBottomWidth:2,
        width:'55%',
        marginLeft:'2%'
    },
    touchcity:{
        backgroundColor:'white',
        margin:'4%',
        width:'40%',
        padding:2,
        alignItems:'center',
        borderRadius:5,
        borderWidth:2
    },
    txtbtncit:{
        fontSize:14,
        fontWeight:'bold',
    },

    // button  radio 

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
        fontSize:14,
        color:'white',
        fontWeight:'bold'
    },

    // txt area descrição
    
    Vdescri:{
        flex:0.65,
        marginTop:'5%',
        alignItems:'center'
    },
    Touchdesc:{
        width:'85%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#249fa7',
        borderRadius:15,
        borderWidth:2,
    },
    inpdesc:{
        width:'95%',
        height:'95%',
        fontSize:16,
        textAlign:'center'
    },

    // butao de cancelar e salvar 
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
    },





    txtinp:{
        marginLeft:'3%',
        fontSize:15,
        color:'white'

    }
    
  });
  
  export default styles;
