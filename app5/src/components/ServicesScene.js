//Criação e exportação da barra de navegação
import React, { Component } from 'react'
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native'

import NavigationBar from './NavigationBar'

const servicesDetail = require('../images/detalhe_servico.png');

class ServicesScene extends Component{
    render(){
        return(
            <View style={ { backgroundColor: 'white', flex: 1} }>
                <StatusBar 
                    backgroundColor = '#19d1c8'
                />
                <NavigationBar voltar navigator={ this.props.navigator } colorBar='#19d1c8'/>

                <View style={ styles.detail }>
                    <Image source={ servicesDetail } />
                    <Text style={ styles.titleTxt }>Serviços</Text>
                    <Text style={ styles.txtContact }>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
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
            color: '#19d1c8',
            fontSize: 24,
            marginLeft: 10,
            marginTop: 25,
        },

        detail: {
            marginTop: 20,
            padding: 20,
        },

        txtContact: {

        },
    })
    
    
export default ServicesScene;