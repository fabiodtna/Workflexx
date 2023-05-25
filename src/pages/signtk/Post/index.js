// Page Show Post user!

import React from "react";
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";


export default function App({navigation}){
    
    return(
        <View style={styles.container}>
            <View style={styles.Vheader}> 
                <TouchableOpacity style={styles.toucharrow}
                onPress={() => navigation.navigate('Home')} >
                    <Icon name='arrow-left'color={'white'} size={30}/>
                </TouchableOpacity>
                <View style={styles.Vlogo}>
                    <Image  style={styles.logo} source={require('../img/logo.png')}/>
                </View>
                
            </View>
            <View style={styles.Vinfo}>
                <View style={styles.V2info}>
                    <View style={styles.Vcontpost}>
                        <View style={styles.vnomeft}>
                            <Image 
                            style={styles.foto}
                            source={{uri:'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png'}}/>
                            <Text style={styles.txtnome}>
                                teste
                            </Text>
                        </View>
                        <Text style={styles.txtcont} >
                            Etiam posuere quam ac quam. Maecenas aliquet accumsan leo. Nullam dapibus fermentum ipsum. Etiam quis quam. Integer lacinia. Nulla est. Nulla turpis magna, cursus sit amet, suscipit a, interdum id, felis. Integer vulputate sem a nibh rutrum consequat.
                        </Text>
                        <View style={styles.Vphoto}>
                            <Image
                                style={styles.ftcont}
                                source={{
                                uri: 'https://cdn.phonemore.com/content/2018/jpg/11073.jpg',
                                }}
                            />
                            <Image
                                style={styles.ftcont}
                                source={{
                                uri: 'https://cdn.phonemore.com/content/2018/jpg/11073.jpg',
                                }}
                            />
                            <Image
                                style={styles.ftcont}
                                source={{
                                uri: 'https://cdn.phonemore.com/content/2018/jpg/11073.jpg',
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.Vgeoloc}>
                        <Text>teste</Text>
                    </View>
                     
                </View>
            </View>

            <View style={styles.Vads}>
                <Text>teste</Text>
            </View>
        </View>
    )
}