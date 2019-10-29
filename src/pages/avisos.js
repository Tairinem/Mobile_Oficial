/* eslint-disable prettier/prettier */

import React, { Component } from "react";
import { 
    View, 
    Text,
    Button
       
} from "react-native";


export default class avisos extends Component{

    static navigationOptions = { title: 'Avisos', 
    headerStyle: {backgroundColor: 'orange'}, 
    headerTintColor: 'white', 
    headerTitleStyle: {textAlign: 'center', fontWeight: 'bold', 
    alignSelf: 'center', width: '75%' }, 
    backTitle: ''};

    teste(){
        fetch('http://192.168.56.1:8000/notificacoes')
          .then(response => response.json())
          .then(notificacoes => console.warn(notificacoes))
          console.disableYellowBox = false;
      
      }
    render() {
        return(
            <View>
            <Button
             onPress={() => {this.teste()
             ;
  }}
            title="Press Me"
            />
            </View>
     )
    }

}