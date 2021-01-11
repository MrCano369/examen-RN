import React, { Component } from 'react';
import { StyleSheet, FlatList, Image, View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ArtistList extends Component {
    constructor(props){
        super(props)

        this.state = {
            isLoading: false
        }

    }
    
    renderRefreshControl() {
        this.setState({ isLoading: true });
    }
    
    render() {

        const Item = artist => (
            <View style={styles.item} onTouchEnd={() => Actions.details(artist)}>
                <Image style={styles.image} source={{uri: artist.image}}/>
                <Text style={styles.name}>{artist.name}</Text>
            </View>
        );

        const renderItem = ({ item }) => (
            <Item name={item.name} image={item.image}/>
        );

        return (
            <FlatList
                data={this.props.data.artists}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                onRefresh={() => this.renderRefreshControl()}
		        refreshing={this.state.isLoading}
            />
        );
    }
}

const styles = StyleSheet.create({
    item:{
        margin: 10,
        backgroundColor: '#abcdef',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 50,
    },
    image:{
        borderRadius: 50,
        width: 100,
        height: 100
    },
    name:{
        width: 180,
        textAlign: 'center',
        fontSize: 20
    } 
});