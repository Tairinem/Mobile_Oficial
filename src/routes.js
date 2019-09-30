import { createStackNavigator } from 'react-navigation';

import Login from './pages/login';
import Menu from './pages/menu';
import MenuAluno from './pages/menuAluno';
import Dados from './pages/dados';
import Notificacoes from './pages/notificacoes'

export default createStackNavigator({
    Login,
    Menu,
    MenuAluno,
    Dados,
    Notificacoes
},
{
    // navigationOptions: {
    //     headerStyle: {
    //         backgroundColor: "#ff8c1a"
    //     },
    //     headerTintColor: "#FFF",
    // }
});