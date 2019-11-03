/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-floating-decimal */
/* eslint-disable comma-dangle */
/* eslint-disable no-undef */
/* eslint-disable no-unreachable */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable prettier/prettier */
//console.disableYellowBox = false;  
import React, { Component } from 'react';
import { 
    View, 
    Text,    
    ListView,
    Action_click,    
    StyleSheet,
    ActivityIndicator,
    FlatList ,
    TouchableOpacity, 
    Alert,
    ShowText 
} from 'react-native';

export default class avisos extends Component{

    static navigationOptions = { title: 'Avisos', 
    headerStyle: {backgroundColor: 'orange'}, 
    headerTintColor: 'white', 
    headerTitleStyle: {textAlign: 'center', fontWeight: 'bold', 
    alignSelf: 'center', width: '75%' }, 
    backTitle: ''};
    

    handlePress = async () => {
        fetch('http://192.168.56.1:8000/notificacoes')      
          .then((response) => response.json())
          .then((responseJson) => {Alert.alert('Descrição', responseJson[0].Descricao);

          }
        )
          .catch((error) => {
            console.error(error);
          });
      }
        render(){
        return(
         <View style={{padding: 10, alignItems: 'center',backgroundColor:'#DDDDDD'}}>
          <TouchableOpacity onPress={this.handlePress.bind(this)}>
           <Text style={{padding: 10, alignItems:'center', color: 'orange'}}> Dias das Mães </Text>
          </TouchableOpacity>
      </View> 
        );
      }
      }