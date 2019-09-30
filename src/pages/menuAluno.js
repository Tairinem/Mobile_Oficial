import React, { Component } from "react";
import {
    View,
    Text,
    Button
} from "react-native";
import { Icon } from 'react-native-vector-icons'


export default class MenuAluno extends Component {
    render() {
        return (
            <View>
                <Text>Aluno</Text>
                <Button
                    title="Frequências e Notas"
                    type="outline"
                    onPress={() => this.props.navigation.navigate('Dados')}
                    />
                 <Button
                    title="Notificações"
                    type="outline"
                    onPress={() => this.props.navigation.navigate('Notificacoes')}
                    />
                 <Button
                    title="outros"
                    type="outline"
                    onPress={() => this.props.navigation.navigate('MenuAluno')}
                />
            </View>
        )
    }
}


