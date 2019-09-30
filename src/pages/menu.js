import React, { Component } from "react";
import { View, 
    Text,
    Button,
    StyleSheet } from "react-native";

export default class Menu extends Component {
    render(){
        return(
            <View>
                <Text>Menu</Text>
                <Button style={styles.botao}
                    title="Nome do Aluno"
                    onPress={() => this.props.navigation.navigate('MenuAluno')}
                // onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    botao: {

    }
});