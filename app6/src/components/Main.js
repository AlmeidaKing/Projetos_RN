import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const logo = require('../images/logo.png')
const btnPlay = require('../images/botao_jogar.png')
const btnAbout = require('../images/sobre_jogo.png')
const btnMore = require('../images/outros_jogos.png')

export default class Main extends Component {
    render(){
        return(
            <View style={ styles.mainScene }>
                <View style={ styles.mainLogo }>
                    <Image source={ logo }/>
                    <Image source={ btnPlay }/>
                </View>
                
                <View style={ styles.footer }>
                    <Image source={ btnAbout }/>
                    <Image source={ btnMore }/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainScene: {
        backgroundColor: '#61bd8c',
        flex: 1,
    },

    mainLogo: {
        flex: 10,
        alignItems: 'center'
    },

    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
})
