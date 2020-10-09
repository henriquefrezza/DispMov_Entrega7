import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Cores from '../constantes/Cores';

const ContatoItem = (props) => {
  return (
    <TouchableOpacity style={styles.contatoItem}>
      <Image 
        style={styles.imagem}
        source={{ uri: props.imagem}}
      /> 
      <View style={styles.infoContainer}>
        <Text style={styles.nome}>nome: {props.nome}</Text>
        <Text style={styles.numero}>numero: {props.numero}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  contatoItem: {
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  imagem: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#CCC',
    borderColor: Cores.primary,
    borderWidth: 1
  },
  infoContainer: {
    marginLeft: 28,
    width: 250,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  nome: {
    color: 'black',
    fontSize: 18,
    marginBottom: 8
  },
  numero: {
    color: '#555',
    fontSize: 16
  }

})

export default ContatoItem;