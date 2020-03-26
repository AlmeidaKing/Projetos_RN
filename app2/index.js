//Importações
import React from 'react';
import { Text, TouchableOpacity, View, Image, Alert, AppRegistry } from 'react-native';

//Formatações
const estilos = {

    container: {
        backgroundColor: '#252525',
        flex: 1,
        justifyContent: 'center',       
        alignItems: 'center'
    },

    textbtnStyle: {
        fontFamily: 'serif',
        color: '#fff',
        fontSize: 16,
        fontStyle: 'italic',
    },

    imageStyle: {
        width: 350,
        height: 300,
    },

    btnStyle: {
        marginTop: 30,
        backgroundColor: '#353535',
        paddingVertical: 15,
        paddingHorizontal: 50,
    },
   
    btnImg: {
        width: 20,
        height: 20,
        alignSelf: 'flex-end',
    }

};

//Criação de componentes
const App = () => {
    
    const getPhrase = () =>{
        var randomNumber = Math.floor(Math.random()*10);
        
        //Frases
        var phrases = Array();
        phrases[0] = '"Ataque quando o inimigo está fraco"';
        phrases[1] = '"Não se negocia quando se está em desvantagem"';
        phrases[2] = '"– Pensa que sou prostituta? (Grace) – Todo mundo se prostitui, Grace. Só vendemos partes diferentes de nós." (Tommy)';
        phrases[3] = '"Não somos mais crianças, John. Mas ainda precisamos cuidar uns dos outros, certo?"';
        phrases[4] = '"Você precisa conter suas emoções, ou essa reunião acabará rápido"';
        phrases[5] = '"Quando o planejamento é bom, não precisa se apressar."';
        phrases[6] = '"Amor é uma coisa e os negócios são outra"';
        phrases[7] = '"Para eles, a família é uma fraqueza, e vão atrás dela. Para mim, família é uma força, e tenho negócios a fazer."';
        phrases[8] = '"O único jeito de garantir a paz é fazer a ideia de uma guerra parecer causa perdida!"';
        phrases[9] = '"O demônio mora dentro de todo homem"';
           
        var chosenPhrase = phrases[randomNumber]
            
        Alert.alert('Peaky Blinders', chosenPhrase)
    }
    
    const { container, imageStyle, textbtnStyle, btnStyle, btnImg } = estilos;

    return (
        
        <View style={ container }>
            <Image 
            source={ require('./images/home_logo.png') } 
            style={ imageStyle }
            />
            <TouchableOpacity style={ btnStyle } onPress={ getPhrase }>
                <Text 
                style={ textbtnStyle }>
                Take your dose...<Text>  </Text>
                <Image 
                source={ require('./images/whisky.png') }
                style={ btnImg }
                />
                </Text>
                
            </TouchableOpacity>
        </View>
    
    );
};

//Renderização 
AppRegistry.registerComponent('app2', () => { return App });