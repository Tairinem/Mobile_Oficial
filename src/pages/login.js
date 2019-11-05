import React, { Component } from "react";
import api from '../services/api';

// import { Authenticator } from "aws-amplify-react-native";
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    TextInput,
    ImageBackground,
    KeyboardAvoidingView
} from "react-native";

console.disableYellowBox = true;
// yarn cache clean
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { login: Number };
        this.state = { senha: Number };
        this.state = { mensagem: '' };

    }
    componentDidMount = () => {
        // this.consultaDados();
    }

    doClear() {
        let login = this.refs["login"];
        let senha = this.refs["senha"];
     
        senha.clear();
        login.clear();
        
      }

    consultaDados = async () => {
        var msgerro = '';
        const response = await api.get("/dados");
        const dados = response.data;

        dados.map((lista) => {
            if (lista.cpf === this.state.login && lista.senha === this.state.senha) {
                msgerro = 'Carregando!';
                this.props.navigation.navigate('MenuAluno');
                this.doClear();
                // Alterar depois
                // this.props.navigation.navigate('Menu');              

            } else if (lista.cpf !== this.state.login || lista.senha !== this.state.senha ||
                this.state.login === undefined || this.state.senha === undefined) {
                msgerro = ('Dados digitados não conferem!');
                this.doClear();

            } 
            
            this.setState({ mensagem: msgerro, colorAlert: '#900' }).reset();          
        });
    }

    render() {
        return (
            <KeyboardAvoidingView
                keyboardVerticalOffset={100}
                style={{
                    flex: 1,
                    justifyContent: 'center',
                }}
                behavior="padding">
                <ImageBackground
                    source={require("../image/fundo.png")}
                    style={{
                        flex: 1,
                        width: "100%",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
            <Image style={styles.logo} source={require("../image/Logo_SysEMM.jpg")} />
            <Text style={styles.loginTitle}>
                        Sistema de Gerenciamento Escolar.
            </Text>

                    <View style={styles.container}>
                        <TextInput
                        autoCorrect={false} 
                            value={this.state.email}
                            keyboardType="number-pad"
                            onChangeText={(login) => this.setState({ login })}
                            placeholder={'Login'}
                            style={styles.input}
                            underlineColorAndroid="#ff8c1a"
                            autoCapitalize="none"
                            placeholderTextColor="rgba(131,157,182,.7)"
                            ref="login"
                        />
                    </View>

                    <View style={styles.container}>
                        <TextInput
                        autoCorrect={false} 
                            value={this.state.senha}
                            onChangeText={(senha) => this.setState({ senha })}
                            placeholder={'Senha'}
                            keyboardType="number-pad"
                            secureTextEntry={true}
                            style={styles.input}
                            underlineColorAndroid="#ff8c1a"
                            autoCapitalize="none"
                            placeholderTextColor="rgba(131,157,182,.7)"
                            ref="senha"
                        />
                    </View>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#900' }}>
                        {this.state.mensagem}
                    </Text>
                    <Text></Text>
                    <Button
                        title="Acessar"
                        width="100%"
                        height={50}
                        color="#3bd1df"
                        alignItems="center"
                        justifyContent="center"
                        onPress={this.consultaDados}
                    />
                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 30
    },
    loginTitle: {
        marginBottom: 50,
        width: 270,
        fontSize: 16,
        color: "black",
        textAlign: "left"
    },
    input: {
        margin: 15,
        width: 200,
        height: 50,
        color: "rgba(131,157,182,.7)",
        fontSize: 17
    },
});

//TODO: colocar validações ao sair e colocar que os campos de logine senha não aceite letras