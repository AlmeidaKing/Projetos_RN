import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    item: {
        borderWidth: .5,
        borderColor: '#999',
        margin: 10,
        padding: 10,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    
    foto: {
        width: 102,
        height: 102,
    },

    detalhes: {
        marginLeft: 20,
        flex: 1,

    },

    txtTitulo: {
        fontSize: 17,
        color: 'blue',
        marginBottom: 5,

    },

    txtValor: {
        fontWeight: 'bold',
        fontSize: 16,

    },

    txtLocal: {
        fontSize: 16
    }



});

class Itens extends Component{
    render() {
        console.log('render - Objeto renderizado')
        return(
            <View style={ styles.item }>
                <View style={ styles.foto }>
                    <Image style={{ height: 100, width: 100 }} source={{ uri: this.props.item.foto}} />
                </View>

                <View style={ styles.detalhes }>
                    <Text style={ styles.txtTitulo }>{this.props.item.titulo}</Text>
                    <Text style={ styles.txtValor }>R$ {this.props.item.valor}</Text>
                    <Text style={ styles.txtLocal }>Local: {this.props.item.local_anuncio}</Text>
                    <Text>Data: {this.props.item.data_publicacao}</Text>
                </View>
            </View>
        )
    
    }
};

export default Itens
