import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: '',
      clave: ''
    };
  }
  enviar(){
    Actions.home();
  }
  render(){
    return (
      <View style={ styles.container }>
        <Image
          style={ styles.img }
          source={{uri: 'https://picsum.photos/200/300'}}
        />
        <Text style={ styles.txt }>Nombre</Text>
        <TextInput 
          style={ styles.txtI }
          onChangeText={txt => this.setState({nombre: txt})}
        />
        <Text style={ styles.txt }>Clave</Text>
        <TextInput 
          style={ styles.txtI }
          onChangeText={txt => this.setState({clave: txt})}
        />
        <Button
          onPress={() => this.enviar()}
          title="Acceder"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  txtI: {
    width: 220,
    height: 40,
    marginBottom: 20,
    borderColor: 'gray',
    borderWidth: 1
  },
  txt:{
    fontSize: 20,
    fontWeight: "bold"
  },
  img: {
    width: 220,
    height: 130,
    margin: 40,
  }
});