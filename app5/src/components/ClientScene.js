//Criação e exportação da barra de navegação
import React, { Component } from 'react'
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native'

import NavigationBar from './NavigationBar'

const detalheCliente = require('../images/detalhe_cliente.png');
const cliente1 = require('../images/cliente1.png');
const cliente2 = require('../images/cliente2.png');


class ClientScence extends Component{
    render(){
        return(
            <View style={ { backgroundColor: 'white', flex: 1} }>
                <StatusBar 
                    backgroundColor = '#b9c941'
                />
                <NavigationBar voltar navigator={ this.props.navigator } colorBar='#b9c941' />

                <View style={ styles.title }>
                    <Image source={ detalheCliente } />
                    <Text style={styles.titleTxt}>Nossos Clientes</Text>
                </View>

                <View style={ styles.clientDetail }>
                    <Image source={ cliente1 } />
                    <Text style={ styles.txtDetail }>Lorem ipsum</Text>
                </View>

                <View style={ styles.clientDetail }>
                    <Image source={ cliente2 } />
                    <Text style={ styles.txtDetail }>Lorem ipsum</Text>
                </View>

            </View>
            )
        }
    };
    
    const styles = StyleSheet.create({

        title: {
            flexDirection: 'row',
            marginTop: 20,
        },
        titleTxt: {
            color: '#b9c941',
            fontSize: 24,
            marginLeft: 10,
            marginTop: 25,
        },
    
        clientDetail: {
            padding: 10,
            margin: 10,
        },
    
        txtDetail: {
            fontSize: 18,
            marginLeft: 20,
        }
    })
    
    


export default ClientScence;