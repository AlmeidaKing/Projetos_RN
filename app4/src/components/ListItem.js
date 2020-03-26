import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios'

import Itens from './Itens'

class ListItem extends Component{
    constructor(props){
        super(props)

        this.state = { ListItem: [] }
    };

    UNSAFE_componentWillMount(){
        //requisição HTTP
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
            .then((response) =>{ this.setState({ ListItem: response.data }) })
            .catch(() =>{ console.log('Erro de requisição') })
    }
    render() {
        return(
            <ScrollView style={{ backgroundColor: '#ddd' }} >
                { this.state.ListItem.map((item) =>{ return <Itens key={item.titulo} item={item} /> }) }
            </ScrollView>
        )
    
    }
};

export default ListItem
