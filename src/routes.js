import { createStackNavigator } from 'react-navigation';

import Login from './pages/login';
import Menu from './pages/menu';
import MenuAluno from './pages/menuAluno';
import Dados from './pages/dados';
import Notificacoes from './pages/notificacoes'
//lembrar de apagar
import Accordion_Panel from './pages/testeFrequencia'

export default createStackNavigator({
    Login,
    Menu,
    MenuAluno,
    Dados,
    Notificacoes,
    //lembrar de apagar
    Accordion_Panel
},
{
    // navigationOptions: {
    //     headerStyle: {
    //         backgroundColor: "#ff8c1a"
    //     },
    //     headerTintColor: "#FFF",
    // }
});