import React, { useEffect } from 'react';
import { StyleSheet, Button , FlatList } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ContatoItem from '../componentes/ContatoItem';
import * as contatosActions from '../store/contatos-actions';

const ListaDeContatosTela = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(contatosActions.listarContatos())
  });
  const contatos = useSelector(estado => estado.contatos.contatos);
  return (
    <FlatList
    data={contatos}
    keyExtractor={contato => contato.id}
    renderItem={
      contato => (
        <ContatoItem
          nome={contato.item.nome}
          numero={contato.item.numero}
          imagem={contato.item.imagemURI}
        />
      )
    }
/>
  )
};

ListaDeContatosTela.navigationOptions = dadosNavegacao => {
    return {
        headerTitle: "Lista de Contatos",
        headerRight: () => {
            return(
    <Button
    title="Adicionar Contato"
    onPress={() => dadosNavegacao.navigation.navigate("NovoContato")}
    />
  )
}
}
}

const estilos = StyleSheet.create({

});

export default ListaDeContatosTela;