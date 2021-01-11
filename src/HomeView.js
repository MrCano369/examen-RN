import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ArtistList from './ArtistList';
import {getMusicData} from './ApiClient';

export default class HomeView extends Component {
  state = {
    artists: []
  }

  
  componentDidMount() {
    getMusicData().then(data => this.setState({ artists: data }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Artistas: {this.state.artists.length}</Text>
        <ArtistList data={this.state}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
