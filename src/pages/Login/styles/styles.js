// Style login Page!
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    Vcontainer:{
        flex:1,
        backgroundColor:'black',
        justifyContent:'center',
        alignItems:'center'
    },
      backimg: {
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',
        width: '100%', 
        height: '100%'
    },
    
    Vinputbtn:{
        flex:0.6,
        width:'90%',
        alignItems:'center',
        justifyContent:'center',
      
    },

    touchinputs:{
       
        width:'70%',
        borderBottomWidth:2, 
        borderBottomColor:'white',
        margin:10
    },

    inpmail:{
        color:'white',
        marginLeft:10,
        fontSize:17
    },
    inppass:{
        color:'white',
        marginLeft:10,
        fontSize:17
    },

    btnlogin:{
        margin:25,
        backgroundColor:'#249fa7',
        borderRadius:9,
        alignItems:'center',
        justifyContent:'center',
        width:'60%',
        padding:7,
    },
    txtbtn:{
        fontSize:19,
        fontWeight:'bold',
        color:'black',
       
    },
    
    txtsignforg:{
        fontSize:17,
        color:'white',
        margin:10,
    }
  });
  
  export default styles;
