/* eslint-disable prettier/prettier */
import React, { Component } from "react";
import { 
    View, 
    Text,
} from "react-native";


export default class avisos extends Component{

    static navigationOptions = { title: 'Avisos', 
    headerStyle: {backgroundColor: 'orange'}, 
    headerTintColor: 'white', 
    headerTitleStyle: {textAlign: 'center', fontWeight: 'bold', 
    alignSelf: 'center', width: '75%' }, 
    backTitle: ''};
    render() {
        return(
            <View>
                <Text>Avisos</Text>
            </View>
        )
    }
}