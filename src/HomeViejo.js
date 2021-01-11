import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class LoginView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      txt1: '',
      txt2: ''
    };
  }
  volver(){
    Actions.login();
  }
  render(){
    const data = this.props;
    console.log(data);
    return (
      <View style={ styles.container }>
        <Image
          style={ styles.img }
          source={{uri: 'https://picsum.photos/200/300'}}
        />

        <Text style={ styles.txt}>
            Nombre: {data.nombre}, Clave: {data.clave}
        </Text>

        <Button
          onPress={() => this.volver()}
          title="Volver"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  txt: {
    marginBottom: 30,
    fontSize: 20,
    fontWeight: "bold"
  },
  img: {
    width: 220,
    height: 130,
    margin: 50,
  }
});
