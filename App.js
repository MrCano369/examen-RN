import React, {Component} from 'react';
import LoginView from './src/LoginView';
import HomeView from './src/HomeView';
import DetailsView from './src/DetailsView';
import { Actions, Scene, Router} from 'react-native-router-flux';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} title="Inicia sesión"/>
    <Scene key="home" component={HomeView} title="Home"/>
    <Scene key="details" component={DetailsView} title="Detalles"/>
  </Scene>
)

export default class App extends Component{
  render(){
    return <Router scenes={scenes}/>
  }
}