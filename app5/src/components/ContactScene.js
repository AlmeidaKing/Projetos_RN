//Criação e exportação da barra de navegação
import React, { Component } from 'react'
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native'

import NavigationBar from './NavigationBar'

const contactDetail = require('../images/detalhe_contato.png');

class ContactScene extends Component{
    render(){
        return(
            <View style={ { backgroundColor: 'white', flex: 1} }>
                <StatusBar 
                    backgroundColor = '#61bd8c'
                />
                <NavigationBar voltar navigator={ this.props.navigator } colorBar='#61bd8c' />

                <View style={ styles.detail }>
                    <Image source={ contactDetail } />
                    <Text style={ styles.titleTxt }>Contato</Text>
                    <Text style={ styles.txtContact }>Tel: (11)2020-2020</Text>
                    <Text style={ styles.txtContact }>Cel: (11)99999-8888</Text>
                    <Text style={ styles.txtContact }>E-mail: atmconsultoria@atmconsultoria.com</Text>
                    
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
            color: '#61bd8c',
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
    
    
export default ContactScene;