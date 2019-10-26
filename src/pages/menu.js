/* eslint-disable no-trailing-spaces */
/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ImageBackground,
  TouchableHighlight
} from 'react-native';


export default class App extends React.Component {
  static navigationOptions = { title: 'Menu Aluno', 
  headerStyle: {backgroundColor: 'orange'}, 
  headerTintColor: 'white', 
  headerTitleStyle: {textAlign: 'center', fontWeight: 'bold', 
  alignSelf: 'center', width: '75%' }, 
  backTitle: ''};

  render() {
    return (
      // eslint-disable-next-line react/jsx-no-undef
      <ImageBackground 
           
        source={require('../image/fundo.png')}
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
      <React.Fragment>
        <View style={styles.container}>        
         <TouchableHighlight onPress={() => this.props.navigation.navigate('MenuAluno')}>         
          <Image         
            resizeMode="contain"
            style={styles.image}            
            source={require('../image/AvatarMenino.png')}
                         
          />
           </TouchableHighlight>
          <Text style={styles.nameText}>Mauro Filho</Text>
     </View>

      <View style={styles.container}>
      <TouchableHighlight onPress={() => this.props.navigation.navigate('MenuAluno')}> 
        <Image
          resizeMode="contain"
          style={styles.image}
          source={require('../image/AvatarMenina.png')}
        />
        </TouchableHighlight>
        <Text style={styles.nameText}>Ana Paula</Text>

      </View>      
    </React.Fragment>

    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   // backgroundColor: '#ffa262',
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 125,
    borderWidth: 5,
    borderColor: '#4cfcf3',
    marginBottom: 20,
  },
  nameText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
