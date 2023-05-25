// Page Login! **LEMBRETE** forgot password alert('adicione seu email if(mail=>ok) enviamos um email para resetar a sua senha!')

import React from "react";
import { ImageBackground ,View, Text, TouchableOpacity, TextInput} from 'react-native'
import styles from "./styles/styles";


const Image = require('./img/backlogin.jpg');

export default function App({ navigation }){

    

    return(
        <View style={styles.Vcontainer}>
            <ImageBackground source={require('./img/backlogin.jpg')} resizeMode='cover' style={styles.backimg}>
                <View style={styles.Vinputbtn}>
                    
                    <TouchableOpacity style={styles.touchinputs}>
                        <TextInput style={styles.inpmail} placeholder="Email" placeholderTextColor={'white'}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.touchinputs}>
                        <TextInput style={styles.inppass} placeholder="Senha" placeholderTextColor={'white'} secureTextEntry={true}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnlogin} onPress={()=> navigation.navigate('Home')}>
                        <Text  style={styles.txtbtn}>
                            Entrar
                        </Text>
                    </TouchableOpacity>

                    
                    <TouchableOpacity>
                        <Text style={styles.txtsignforg} 
                        onPress={() => navigation.navigate('Caccont')}>
                            Create an account? sign up
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Text style={styles.txtsignforg}>
                            forgot your password?
                        </Text>
                    </TouchableOpacity>
                    

                </View>
         
            </ImageBackground>
        </View>
    )
}