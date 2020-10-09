import Contato from "../modelo/Contato";
import {ADD_CONTATO, LISTA_CONTATOS} from "./contatos-actions";

const estadoInicial = {
    contatos: []
};

export default (estado = estadoInicial, action) => {
    switch (action.type){
        case ADD_CONTATO:
            const contato = new Contato(
                action.dadosContato.id.toString(),
                action.dadosContato.nome,
                action.dadosContato.numero,
                action.dadosContato.imagemURI);
            return {
                contatos: estado.contatos.concat(contato)
            }
        case LISTA_CONTATOS:
          return{
            contatos: action.contatos.map (contato => new Contato (contato.id.toString(), contato.nome, contato.numero, contato.imagemURI))
          }
        default:
            return estado;
    }
}