import React, { Component } from 'react';
import { AppRegistry, View, Text, Button, StyleSheet } from 'react-native';
import Top from './src/components/top';
import Icon from './src/components/icon'



class app3 extends Component {

    constructor(props) {
        super(props);

        this.state = { userChoice: '', comChoice: '', result: '' };
    };

    jokenpo(userChoice, comChoice) {
        const randomNumber = Math.floor(Math.random() * 3);
        
        switch (randomNumber) {
            case 0:
                comChoice = 'Rock';
                break
            case 1:
                comChoice =  'Paper';
                break
            case 2:
                comChoice = 'Scissors';
                break;
            default: '';
        }

        let result = '';
    
        //Lógica do jogo
        //PC escolhe Rock
        if (comChoice == 'Rock'){
            if (userChoice === 'Rock') {
                result = 'Draw';
            }
            if (userChoice === 'Paper') {
                result = 'You Win';
            } 
            if (userChoice === 'Scissors') {
                result = 'You Lose';
            }
        }

        //Lógica do jogo
        //PC escolhe Paper
        if (comChoice === 'Paper') {
            if(userChoice === 'Paper'){
                result = 'Draw';
            }
            if (userChoice === 'Scissors') {
                result = 'You Win';
            } 
            if (userChoice === 'Rock') {
                result = 'You Lose';
            } 
        }

        //Lógica do jogo
        //PC escolhe Scissors
        if (comChoice === 'Scissors') {
            if (userChoice === 'Scissors') {
                result = 'Draw';
            }
            if (userChoice === 'Rock') {
                result = 'You Win';
            } 
            if (userChoice === 'Paper') {
                result = 'You Lose';

            }
        }

        this.setState({ userChoice, comChoice, result  })
    
    }

    render(){
        return (
            <View>
                
               <Top />
                
                {/* Panel */}
                <View style={ styles.panel }>
                    <View style={ styles.btnChoice }>
                        <Button title='Rock' onPress={() =>{ this.jokenpo('Rock'); }}/>
                    </View> 
                    <View style={ styles.btnChoice }>
                        <Button title='Paper' onPress={() =>{ this.jokenpo('Paper'); }}/>
                    </View>
                    <View style={ styles.btnChoice }>
                        <Button title='Scissors' onPress={() =>{ this.jokenpo('Scissors'); }}/>
                    </View>
                </View>

                {/* Theater */}
                <View style={ styles.theater }>
                    <Text style={ styles.txtResult }>{this.state.result}</Text>

                    <Icon choice={this.state.userChoice} player='You' ></Icon>
                    <Icon choice={this.state.comChoice} player='Computer' ></Icon>

               </View>
            </View>
        );

    };
}




const styles = StyleSheet.create({
    
    panel: {
        flexDirection: 'row',
        justifyContent: "space-around"
    },
    
    btnChoice: {
        width: 90,
        marginVertical: 30,
        
    },

    theater: {
        alignItems: 'center',
    },

    txtResult: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
        height: 60

    },

    
    
});

AppRegistry.registerComponent('app3', () => app3);
