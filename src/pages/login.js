import React, { Component } from "react";
// import { Authenticator } from "aws-amplify-react-native";
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    TextInput,
    ImageBackground
} from "react-native";


export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { login: '' };
        this.state = { senha: '' };
        this.state = {
            someData: null,
            otherData: null
        }
    }
    componentDidMount = () => {
        this.setState({
            someData: "some data",
            otherData: "other data"
        });
    }
    // static navigationOptions = {
    //     title: "SysEMMApp"
    // };
    render() {
        return (

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
                        value={this.state.email}
                        onChangeText={(login) => this.setState({ login })}
                        placeholder={'Login'}
                        style={styles.input}
                        underlineColorAndroid="#ff8c1a"
                        autoCapitalize="none"
                        placeholderTextColor="rgba(131,157,182,.7)"
                    />
                </View>

                <View style={styles.container}>
                    <TextInput
                        value={this.state.senha}
                        onChangeText={(senha) => this.setState({ senha })}
                        placeholder={'Senha'}
                        secureTextEntry={true}
                        style={styles.input}
                        underlineColorAndroid="#ff8c1a"
                        autoCapitalize="none"
                        placeholderTextColor="rgba(131,157,182,.7)"
                    />
                </View>
                <Button
                    title="Acessar"
                    width="100%"
                    height={50}
                    color="#3bd1df"
                    alignItems="center"
                    justifyContent="center"

                    // onPress={this._authunticate}
                    onPress={() => this.props.navigation.navigate('Menu')}
                />
              
                {/* <Authenticator authData={'username'} authState="signIn">
                    <AppContainer screenProps={{
                        someData: this.state.someData,
                        otherData: this.state.otherData
                    }} />
                </Authenticator> */}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',

        // backgroundColor: '#ecf0f1',
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
        //   borderBottomColor: "#d2dde8",
        color: "rgba(131,157,182,.7)",
        //borderBottomWidth: 1,
        fontSize: 17
    },

    // login: {
    //     marginTop: 40,
    //     textAlign: 'center',
    //     fontSize: 20
    // },
    // senha: {
    //     marginTop: 20,
    //     textAlign: 'center',
    //     fontSize: 20
    // },
    // botaoLogin: {
    //     backgroundColor: '#ff8c1a',
    //     marginEnd: 80,
    //     marginStart: 80,
    //     // color: '#DA552F',
    //     // backgroundColor: "#DA552F"
    //     marginTop: 80,

    // },
    // textColor: {
    //     color: '#FFF',
    //     textAlign: 'center',
    //     fontSize: 25,
    //     // borderRadius: 30,

    // }
});