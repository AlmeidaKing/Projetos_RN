//Criação e exportação da barra de navegação
import React, { Component } from 'react'
import { View, StatusBar, Image, StyleSheet, TouchableHighlight } from 'react-native'

import NavigationBar from './NavigationBar'

const logo = require('../images/logo.png');
const menuCliente = require('../images/menu_cliente.png');
const menuContato = require('../images/menu_contato.png');
const menuEmpresa = require('../images/menu_empresa.png');
const menuServico = require('../images/menu_servico.png');



class MainScene extends Component{
    render(){
        return(
            <View style={ { backgroundColor: 'white', flex: 1} }>
                <StatusBar 
                    backgroundColor = '#ccc'
                />
                <NavigationBar/>

                <View style={ styles.content }>
                    <Image source={ logo } />
                </View>
                <View style={ styles.menu }>
                        <View style={ styles.menuGrupo }>
                            <TouchableHighlight 
                                underlayColor={'#b9c941'}
                                activeOpacity={0.3}
                                onPress={ () =>{
                                    this.props.navigator.push( { id: 'client' } );
                                } 
                            }>
                                <Image source={ menuCliente } style={ styles.imgStyle }/>   
                            </TouchableHighlight>
                            
                            <TouchableHighlight 
                                underlayColor={'#61bd8c'}
                                activeOpacity={0.3}
                                onPress={ () =>{
                                    this.props.navigator.push( { id: 'contact' } )
                            }}>
                                <Image source={ menuContato } style={ styles.imgStyle } />
                            </TouchableHighlight>
                        </View>

                        <View style={ styles.menuGrupo }>
                            <TouchableHighlight 
                                underlayColor={'#ec7148'}
                                activeOpacity={0.3}
                                onPress={ () =>{
                                    this.props.navigator.push( { id: 'company' } )
                            } }>
                                <Image source={ menuEmpresa } style={ styles.imgStyle } />
                            </TouchableHighlight>
                            
                            <TouchableHighlight 
                                underlayColor={'#19d1c8'}
                                activeOpacity={0.3}
                                onPress={ () =>{
                                this.props.navigator.push( { id: 'services' } )
                            } }>
                                <Image source={ menuServico } style={ styles.imgStyle } />
                            </TouchableHighlight>
                        </View>
                </View>
            </View>
            )
        }
    };
    

    const styles = StyleSheet.create({
        content: {
            alignItems: 'center',
            marginTop: 30,
        },
    
        menu: {
            alignItems: 'center',
        },
    
        menuGrupo: {
            flexDirection: 'row',
        },
    
        imgStyle: {
            margin: 17
        }
    
        
    
    })
    
export default MainScene;