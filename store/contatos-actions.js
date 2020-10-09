export const ADD_CONTATO = 'ADD_CONTATO';
export const LISTA_CONTATOS = 'LISTA_CONTATO';
import * as FileSystem from 'expo-file-system';
import { inserirContato, buscarContatos } from '../helpers/db';

export const listarContatos = () => {
  return async dispatch => {
    try{
      const resultadoDB = await buscarContatos();
      dispatch({ type: LISTA_CONTATOS, contatos: resultadoDB.rows._array || []})
    }
    catch (err){
      console.log (err);
      throw err;
    }
  }
}


export const addContato = (nome, numero, imagemURI) => {
  return async dispatch => {
    const nomeArquivo = imagemURI.split ('/').pop();
    const novoPath = FileSystem.documentDirectory + nomeArquivo;
    try{
      await FileSystem.moveAsync({
        from: imagemURI,
        to: novoPath
      });

      const resultadoDB = await inserirContato(nome, numero, novoPath);

      dispatch({type: ADD_CONTATO, dadosContato: {id: resultadoDB.insertId, nome: nome, numero: numero, imagemURI: novoPath}})

    }
    catch (err){
      console.log(err);
      throw err;
    }
  }
}
