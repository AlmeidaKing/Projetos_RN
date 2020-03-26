//Criação e exportação da barra de navegação
import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'


const btnVoltar = require('../images/btn_voltar.png')

class NavigationBar extends Component{
    render(){
        if(this.props.voltar){
            return(
                <View style={ [styles.titleBar, { backgroundColor: this.props.colorBar }] }>
                    <TouchableHighlight onPress={ ()=>{
                            this.props.navigator.pop()
                        }
                    }>
                        <Image source={ btnVoltar } />
                    </TouchableHighlight>
                        <Text style={ styles.txtTitle }>ATM Consultoria</Text>
                </View>
                )
        }

        return(
            <View style={ styles.titleBar }>
                <Text style={ styles.txtTitle }>ATM Consultoria</Text>
            </View>
            )
        }
    };
    
    const styles = StyleSheet.create({
        titleBar: {
            backgroundColor: '#ccc',
            padding: 10,
            height: 60,
            flexDirection: 'row'
        },
    
        txtTitle: {
            flex: 1,
            fontSize: 17,
            textAlign: 'center',
            color: 'black'
        },
    
    })

export default NavigationBar;