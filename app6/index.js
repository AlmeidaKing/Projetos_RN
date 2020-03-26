//Importação de módulos
import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'

//Importação de componentes
import mainScene from './src/components/Main'
import aboutScene from './src/components/Main'
import moreScene from './src/components/Main'



export default class app6 extends Component{
    render() {
        <Router>
            <Scene key='MainScene' component={ mainScene } />
            <Scene key='AboutGame' component={ aboutScene } initial/>
            <Scene key='AnotherGames' component={ moreScene }/>
        </Router>
    }
}

AppRegistry.registerComponent('app6', () => app6);
