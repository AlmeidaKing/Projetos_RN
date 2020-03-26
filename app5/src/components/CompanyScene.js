//Criação e exportação da barra de navegação
import React, { Component } from 'react'
import { View, StatusBar, Image, Text, StyleSheet } from 'react-native'

import NavigationBar from './NavigationBar'

const companyDetail = require('../images/detalhe_empresa.png');

class CompanyScene extends Component{
    render(){
        return(
            <View style={ { backgroundColor: 'white', flex: 1} }>
                <StatusBar 
                    backgroundColor = '#ec7148'
                />
                <NavigationBar voltar navigator={ this.props.navigator } colorBar='#ec7148'/>

                <View style={ styles.detail }>
                    <Image source={ companyDetail } />
                    <Text style={ styles.titleTxt }>A Empresa</Text>
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
            color: '#ec7148',
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
    
    
export default CompanyScene;