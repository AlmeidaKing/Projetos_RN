import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import ListItem from './src/components/ListItem'

class app4 extends Component{
    render(){
        return (
            <ListItem/>
        )
    }
};

AppRegistry.registerComponent('app4', () => app4);
