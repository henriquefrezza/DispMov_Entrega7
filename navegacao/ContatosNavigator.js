import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation';
import ListaDeContatosTela from '../telas/ListaDeContatosTela';
import NovoContatoTela from '../telas/NovoContatoTela';

const ContatosNavigator = createStackNavigator ({
    ListaDeContatos: ListaDeContatosTela,
    NovoContato: NovoContatoTela,
  });
  
  export default createAppContainer (ContatosNavigator);