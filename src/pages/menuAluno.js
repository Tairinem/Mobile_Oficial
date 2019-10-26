import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {Icon} from 'react-native-vector-icons';

export default class MenuAluno extends Component {

  static navigationOptions = { title: 'Menu', 
  headerStyle: {backgroundColor: 'orange'}, 
  headerTintColor: 'white', 
  headerTitleStyle: {textAlign: 'center', fontWeight: 'bold', 
  alignSelf: 'center', width: '75%' }, 
  backTitle: ''};
  render() {
    return (
      <View>
        <Button
          title="Frequências e Notas"
          type="outline"
          onPress={() => this.props.navigation.navigate('Dados')}
        />
        <Button
          title="Avisos"
          type="outline"
          onPress={() => this.props.navigation.navigate('Avisos')}
        />
        <Button
          title="outros"
          type="outline"
          onPress={() => this.props.navigation.navigate('MenuAluno')}
        />
      </View>
    );
  }
}
