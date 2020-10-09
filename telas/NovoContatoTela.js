import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button , ScrollView, FlatList } from 'react-native';
import {useDispatch} from 'react-redux';
import * as contatosActions from '../store/contatos-actions';
import TiraFoto from '../componentes/TiraFoto';
import Cores from '../constantes/Cores';

const NovoContatoTela = (props) => {
  const[novoNome, setNovoNome] = useState('');
  const[novoNumero, setNovoNumero] = useState('');
  const [imagemURI, setImagemURI] = useState();

  const novoNomeAlterado = (texto) => {
    setNovoNome (texto);
  }

  const novoNumeroAlterado = (texto) => {
    setNovoNumero(texto);
  }

  const dispatch = useDispatch();

  const fotoTirada = imagemURI => {
    setImagemURI(imagemURI);
  }

  const adicionarContato = () => {
    dispatch (contatosActions.addContato(novoNome, novoNumero, imagemURI))
    setNovoNome('');
    setNovoNumero('');
    props.navigation.goBack();
  }

  return (
    <ScrollView>
      <View style={estilos.form}>
        <Text style={estilos.titulo}>Novo Contato</Text>
        <Text style={estilos.desc}>Nome</Text>
        <TextInput 
          style={estilos.textInput}
          onChangeText={novoNomeAlterado}
          value={novoNome}
        />
        <Text style={estilos.desc}>Numero</Text>
        <TextInput 
          style={estilos.textInput}
          onChangeText={novoNumeroAlterado}
          value={novoNumero}
        />
        <TiraFoto onFotoTirada={fotoTirada}/>
        <Button 
          title="Salvar Contato"
          color={Cores.primary}
          onPress={adicionarContato}
        />
      </View>
    </ScrollView>
    
  )
};

const estilos = StyleSheet.create({
  form: {
    margin: 30
  },
  titulo: {
    fontSize: 18,
    marginBottom: 16,
    textAlign: 'center'
  },
  desc: {
    fontSize: 14,
    marginBottom: 16,
  },
  textInput: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 2,
    marginBottom: 16,
    paddingVertical: 12
  }
});

export default NovoContatoTela;