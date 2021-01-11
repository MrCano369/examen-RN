import React, { Component } from 'react';
import { StyleSheet, FlatList, Image, View, Text } from 'react-native';

export default class DetailsList extends Component {
    constructor(props){
        super(props)

        //console.log(props.navigation.state.params);
        this.state = {
            artist: props.navigation.state.params
        }

    }
    render() {
        return (
            <View style={styles.item}>
                <Image style={styles.image} source={{uri: this.state.artist.image}}/>
                <Text style={styles.name}>{this.state.artist.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item:{
        width: "100%",
        height: "100%",
        backgroundColor: '#abcdef',
        alignItems: 'center'
    },
    image:{
        width: 200,
        height: 200,
        borderRadius: 100,
        margin: 20
    },
    name:{
        fontWeight: "bold",
        fontSize: 30
    }
});