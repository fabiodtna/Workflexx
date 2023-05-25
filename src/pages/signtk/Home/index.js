// Page Home User!

import React, {useState} from "react";
import {View, Text, Image, TouchableOpacity, TextInput, FlatList, Modal} from 'react-native'
import { Button, Menu, Provider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./styles";

export default function App({navigation}){

    const [modalVisible, setModalVisible] = useState(false);
    const datainfo = require('./info.json');
    
    return(
        <View style={styles.container}>
            <View style={styles.Vheader}>
                <View style={styles.V1header}>
                    <Image
                        style={styles.styleimg}
                        source={require('../img/logo.png')}
                    />

                    <TouchableOpacity style={styles.btnhamb}
                        onPress={() => {setModalVisible(true)}}>
                            <Icon name='bars' size={20} color={'white'}/>
                    </TouchableOpacity>
                   
                </View>

                <View style={styles.V2header}>
                    <View style={styles.Vsearch} >
                        <TextInput placeholder="Search Work" textAlign="center" placeholderTextColor={'white'} style={styles.inpsearch} />
                        <TouchableOpacity style={styles.btnsearch}>
                            <Icon name="search" size={25} color={'white'}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

                <Modal visible={modalVisible} transparent={true}>
                    <View style={ styles.VModal}>
                        <TouchableOpacity style={styles.hambopt}
                          onPress={() => {setModalVisible(false)}}>
                                <Icon name='bars' size={27} color={'black'}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.hambopt}
                            onPress={() => navigation.navigate('Profile')}>
                            <Text  style={styles.hamtxt} >Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.hambopt}>
                            <Text  style={styles.hamtxt}>New Post</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.hambopt}>
                            <Text  style={styles.hamtxt}>My Post</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.hambopt}>
                            <Text style={styles.hamtxt}>Chat</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.hambopt}>
                            <Text  style={styles.hamtxt}>Sair</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>


            <View style={styles.Vinfo}>
                <View style={styles.Vflatlist}>
                    <FlatList 
                    data={datainfo}
                    keyExtractor={item =>item.iduser}
                    renderItem={({item}) => {
                        return(
                        <View style={styles.Vinfoflat}>
                            <TouchableOpacity style={styles.Vinfopost}
                             onPress={() => navigation.navigate('Post')} >
                                <View style={{flexDirection:'row',alignItems:'center'}}>
                                    <TouchableOpacity style={styles.fotouser}>
                                        <Text>ok</Text>
                                    </TouchableOpacity>
                                    <Text style={styles.flatxtnome}>Joao nome</Text>
                                </View>
                                <View style={styles.Vtxtinfo}>
                                     <Text style={styles.txtinfo}>
                                        {item.info}
                                    </Text>
                                </View>
                               
                            </TouchableOpacity>
                            <View style={styles.Vflatphot}>
                                <Image style={styles.flatimg1} source={{uri:item.photo.photo1}}  />
                                <Image style={styles.flatimg1} source={{uri:item.photo.photo2}}  />
                            </View>
                        </View>
                        )
                    }}
                     />
                </View>
                <View style={styles.Vads}>
                    <Text>ADS</Text>    
                </View>    
            </View>
        </View>
    )
}