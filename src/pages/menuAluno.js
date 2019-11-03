import React, { Component } from "react";
import {
    View,
    TouchableOpacity,
    Image,
    StyleSheet,
    Button,
    Alert,
    Text,
} from "react-native";



export default class MenuAluno extends Component {

    voltarLogin = () => {
        this.props.navigation.navigate('Login');
    };

    cancelar = () => {
        this.props.navigation.navigate('MenuAluno')
    };

    onDemoButtonPressed = () => {
        Alert.alert(
            'Aviso!',
            'Deseja Realmente Sair?',
            [
                {
                    text: 'Cancel',
                    onPress: () => this.cancelar(),
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: () => this.voltarLogin(),
                },
            ]
        );
    };

    render() {
        return (
            <View>

                <TouchableOpacity onPress={() => this.onDemoButtonPressed()}>
                    <Image
                        style={styles.imagemSair}
                        source={require("../image/sair.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('Dados')}>
                    <Image
                        style={styles.imageDados}
                        source={require("../image/notasefaltas1.png")}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('Notificacoes')}>
                    <Image
                        style={styles.imageNotificacoes}
                        source={require("../image/Avisos2.png")}
                    />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('MenuAluno')}>
                    <Image
                        style={styles.imageNotificacoes}
                        source={require("../image/horario1.png")}
                    />
                </TouchableOpacity>
                {/* <Text></Text> */}

                {/* <Button
                    title="Sair"
                    width="100%"
                    height={50}
                    color="#900"
                    alignItems="center"
                    justifyContent="center"
                    onPress={this.onDemoButtonPressed}
                /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageDados: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 30,
        marginStart: 30,
        width: 300,
        height: 80,
    },
    imageNotificacoes: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 15,
        marginStart: 30,
        width: 300,
        height: 80,
    },
    imagemSair: {
        width: 50,
        height: 50,
        marginLeft: 300
    }
})


