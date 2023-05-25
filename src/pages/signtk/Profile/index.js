// Page profile Users!

import React, {useState} from "react";
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { RadioButton } from 'react-native-paper';
import styles from "./styles";

export default function App({navigation}){
    var nome = 'Teste';
    const [radiobtn, setradiobtn] = useState();
    return(
        <View style={styles.container}>
            <View style={styles.Vheader}>
                <TouchableOpacity style={styles.toucharrow}
                onPress={() => navigation.navigate('Home')} >
                    <Icon name='arrow-left'color={'white'} size={35}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btncap}>
                    <Text style={styles.txtbtncap}>Capa</Text>
                    <Icon name='upload' color={'black'} size={15}/>
                </TouchableOpacity>
            </View>
            <View style={styles.Vcont}>
                <View style={styles.Vftnome}>
                    <View style={styles.photo} >
                        <Text>fot</Text>
                    </View>
                    <View style={styles.Vnomes}>
                        <TouchableOpacity style={styles.inptnome}>
                            <TextInput style={styles.txtinp} placeholder={'Nome:'} placeholderTextColor={'white'}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.inptnome}>
                            <TextInput style={styles.txtinp} placeholder={'Sobrenome:'} placeholderTextColor={'white'}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.Vcont2}>
                        <TouchableOpacity style={styles.inptpassandconf}>
                            <TextInput secureTextEntry={true} style={styles.txtinp} placeholder={'Senha:'} placeholderTextColor={'white'}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.inptpassandconf}>
                            <TextInput secureTextEntry={true} style={styles.txtinp} placeholder={'Confirmar Senha:'} placeholderTextColor={'white'}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.inptelefone}>
                            <TextInput secureTextEntry={true} style={styles.txtinp} placeholder={'Numero:'} placeholderTextColor={'white'}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchcity}>
                            <Text  style={styles.txtbtncit}>Cidade/Estado</Text>
                        </TouchableOpacity>
                        <View style={styles.Vvbtnradio}>
                            <RadioButton
                                style={styles.btnradio}
                                value="first"
                                color="white"
                                status={radiobtn === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => {setradiobtn('first') }}
                            />
                                <Text style={styles.btnradio}>Cliente</Text>
                            <RadioButton
                                style={styles.btnradio}
                                value="second"
                                color="white"
                                status={radiobtn === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => { setradiobtn('second')}}
                            />
                                <Text style={styles.btnradio}>Tecnico</Text>
                        </View>
                        <View style={styles.Vdescri}>
                            <TouchableOpacity style={styles.Touchdesc}>
                                <TextInput placeholder="Descrição/Especialização" multiline={true}  maxLength={200} style={styles.inpdesc}/>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.Vbtn}>
                            <TouchableOpacity style={styles.btncad}>
                                <Text style={styles.btntxt}>Salvar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btncan}
                                onPress={()=>{ navigation.navigate('Login')}}
                            >
                                <Text style={styles.btntxt}>Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
        </View>
    )
}