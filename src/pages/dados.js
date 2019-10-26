import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Dados extends Component {

  static navigationOptions = { title: 'Frequências e Notas', 
  headerStyle: {backgroundColor: 'orange'}, 
  headerTintColor: 'white', 
  headerTitleStyle: {textAlign: 'center', fontWeight: 'bold', 
  alignSelf: 'center', width: '75%' }, 
  backTitle: ''};
  
  render() {
    return (
      <View>
        <Text>Frequências e Notas</Text>
      </View>
    );
  }
}
