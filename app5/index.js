import React, { Component } from 'react'
import { AppRegistry } from 'react-native';
import { Navigator } from 'react-native-deprecated-custom-components';

//Importação dos componentes
import MainScene from './src/components/MainScene'
import ClientScene from './src/components/ClientScene'
import ContactScene from './src/components/ContactScene'
import CompanyScene from './src/components/CompanyScene'
import ServicesScene from './src/components/ServicesScene'

class app5 extends Component {
    render(){
        return(
          <Navigator
            initialRoute={ { id: 'main' } }
            renderScene={ (route, navigator) =>{ 
                if(route.id === 'main'){
                  return (<MainScene navigator={ navigator }/>)
                }
                if(route.id === 'client' ){
                  return (<ClientScene navigator={ navigator }/>)
                }
                if(route.id === 'contact' ){
                  return (<ContactScene navigator={ navigator }/>)
                }
                if(route.id === 'company' ){
                  return (<CompanyScene navigator={ navigator }/>)
                }
                if(route.id === 'services' ){
                  return (<ServicesScene navigator={ navigator }/>)
                }
             } 
            }
          />
        );
    };
};

AppRegistry.registerComponent('app5', () => app5);

