/* eslint-disable prettier/prettier */
import {createStackNavigator} from 'react-navigation';

import Login from './pages/login';
import Menu from './pages/menu';
import MenuAluno from './pages/menuAluno';
import Dados from './pages/dados';
import Avisos from './pages/avisos';

export default createStackNavigator({
  Login,
  Menu,
  MenuAluno,
  Dados,
  Avisos,

// eslint-disable-next-line eol-last
});