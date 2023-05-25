// Page Create Accont!

// categoria de user colocar !!!!

import React, {useState} from "react";
import {View, Text, TouchableOpacity, TextInput, Modal} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { Icon } from 'react-native-elements'
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import styles from "./styles";

export default function App({navigation}){
    
    const [radiobtn, setradiobtn] = useState();
    const [drop, setDrop] = useState(false)
    const [categoria, SetCategoria] = useState([])

    const [selected, setSelected] = React.useState([]);
    const data = [
        {key:'1', value:'Tecnologia da informatica'},
        {key:'3', value:'Construção civil'},
        {key:'4', value:'Fotógrafo'},
        {key:'5', value:'Encanador'},
        {key:'6', value:'Limpeza'},
    ]  
// Desenvolvedor de software, Designer gráfico, Fotógrafo, Web designer, Pedreiro autônomo, Pintor autônomo, Encanador autônomo
// Eletricista autônomo, Carpinteiro autônomo,  Gesseiro autônomo, Jardineiro autônomo, Montador de móveis, Cuidador de idosos,  limpeza residencial
// Artesão autônomo, Técnico em Informática, Tecnico manutenção de celulares, Tecnico manutenção de Computadores, Tecnico manutenção de ventilador
    return(
        <View style={styles.Vcontainer}>
            <View style={styles.Vheader}>
                <TouchableOpacity style={styles.btncapa}>
                    <Text> capa</Text>
                </TouchableOpacity>
            </View>
            
            <View style={styles.Vinfo}>
                <TouchableOpacity style={styles.Vphot}>
                    <Text>Photo</Text>
                </TouchableOpacity>

                 <View style={styles.Vnomesobre}>
                    <TouchableOpacity style={styles.Touchinpnome}>
                        <TextInput placeholder="Nome:" placeholderTextColor={'white'} style={styles.Inpstxt}/>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.Touchinpsobren}> 
                        <TextInput placeholder="Sobrenome:" placeholderTextColor={'white'} style={styles.Inpstxt}/>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.Touchinpmail}>
                    <TextInput placeholder="Email:" placeholderTextColor={'white'} style={styles.Inpstxt} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.Touchinpcpf}>
                    <TextInput placeholder="CPF:" placeholderTextColor={'white'} style={styles.Inpstxt} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.Touchinpass}>
                    <TextInput placeholder="Senha:" placeholderTextColor={'white'} secureTextEntry={true} style={styles.Inpstxt} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.Touchinpass}>
                    <TextInput placeholder="Confirmar Senha:" placeholderTextColor={'white'} secureTextEntry={true} style={styles.Inpstxt} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.Touchinnum}>
                    <TextInput placeholder="Numero:" placeholderTextColor={'white'} style={styles.Inpstxt} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btncity}>
                    <Text style={styles.btncitytxt}>Cidade/Estado</Text>
                </TouchableOpacity>

                <View style={styles.Vbtnradio}>
                    <View style={styles.Vvbtnradio}>
                        <RadioButton
                            style={styles.btnradio}
                            value="first"
                            label="Carto Base MAp"
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
                            onPress={() => { setradiobtn('second') || setDrop(true)}}
                        />
                       <Text style={styles.btnradio}>Tecnico</Text>
                    </View>
                    
                </View>

                <Modal transparent={true} visible={drop}>
                    <View style={styles.Vmodal}>
                        <View style={styles.Vconteudo}>
                            <TouchableOpacity onPress={()=> setDrop(false) }>
                                 <Icon name='close' size={35} color={'black'}/>
                            </TouchableOpacity>

                        <Text style={styles.txtmodal}>
                            selecione sua área de interesse!
                        </Text>
                        <MultipleSelectList 
                            style={styles.dropd}
                            setSelected={(val) => SetCategoria(val)} 
                            data={data} 
                            save="value"
                            label="Categories"
                        />
                        </View>
                    </View>
                </Modal>
                <View style={styles.Vdescri}>
                    <TouchableOpacity style={styles.Touchdesc}>
                        <TextInput  placeholder="Descrição/Especialização" multiline={true}  maxLength={200} style={styles.inpdesc}/>
                    </TouchableOpacity>
                </View>
                
                <View style={styles.Vbtn}>
                    <TouchableOpacity style={styles.btncad}>
                        <Text style={styles.btntxt}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btncan}
                        onPress={()=>{ navigation.navigate('Login')}}
                    >
                        <Text style={styles.btntxt}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
