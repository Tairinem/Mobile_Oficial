/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  ImageBackground,
} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {login: ''};
    this.state = {senha: ''};
    this.state = {
      someData: null,
      otherData: null,
    };
  }
  componentDidMount = () => {
    this.setState({
      someData: 'some data',
      otherData: 'other data',
    });
  };

  render() {
    return (
      <ImageBackground
        source={require('../image/Laranja2.jpg')}
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={styles.logo}
          source={require('../image/Logo_SysEMM.jpg')}
          width= {218}
          height= {134}
        />
        <Text style={styles.loginTitle}>Sistema de Gerenciamento Escolar</Text>

        <View style={styles.container}>
          <TextInput
            value={this.state.email}
            onChangeText={login => this.setState({login})}
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
            onChangeText={senha => this.setState({senha})}
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
          onPress={() => this.props.navigation.navigate('Menu')}
        />
      </ImageBackground>
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
    marginBottom: 30,
  },
  loginTitle: {
    marginBottom: 50,
    width: 270,
    fontSize: 17,
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    margin: 15,
    width: 200,
    height: 50,

    color: 'rgba(131,157,182,.7)',

    fontSize: 17,
  },
});
