import React, { Component } from "react";
import {
    View,
    Text,
    Button,
    StyleSheet
} from "react-native";
import api from "../services/api";
import { TouchableOpacity } from "react-native-gesture-handler";

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { nomeAluno: '' }
    }
    componentDidMount = () => {
        this.buscarAluno();
    }

    buscarAluno = async () => {
        const response = await api.get("/dados");
        const alunos = response.data;

        alunos.map((aluno) => {
            console.log(aluno)
            // this.props.navigation.navigate('MenuAluno');
            // if (alunos.nome_do_aluno){

            // }
        });
    }

    // onLearnMore = (nome) => {
    //     this.props.navigation.navigate('Login', nome);
    // };

    render() {
        return (
            <View>
                          
                    {/* <Text style={styles.nome}>
                        {this.onLearnMore(nome)}
                    {this.state.nomeAluno}
                    </Text> */}
 
                {/* <Button style={styles.botao}
                    title={this.state.nomeAluno}
                    onPress={() => this.props.navigation.navigate('MenuAluno')}
                // onPress={() => Alert.alert('Simple Button pressed')}
                /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    botao: {
        color: "#ffffff",
        alignSelf: "stretch",
        textAlign: "center",
        fontSize: 28
    },
    nome: {
        fontSize: 15, 
        fontWeight: 'bold', 
        color: '#ff8c1a'
    }
});