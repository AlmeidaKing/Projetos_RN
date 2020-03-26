import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const imgRock = require('../../images/rock.png');
const imgPaper = require('../../images/paper.png');
const imgScissors = require('../../images/scissors.png');

class Icon extends Component{
    render(){
        if (this.props.choice === 'Rock') {
            return(
                <View>
                    <Text style={ styles.txtPlayer }>{this.props.player}</Text>
                    <Image source={imgRock} style={ styles.imgChoice }/>
                </View>
            )
        } else if (this.props.choice === 'Paper') {
            return (
                <View>
                    <Text style={ styles.txtPlayer }>{this.props.player}</Text>
                    <Image source={imgPaper} style={ styles.imgChoice }/>
                </View>
            )

        } else if (this.props.choice === 'Scissors') {
            return (
                <View>
                    <Text style={ styles.txtPlayer }>{this.props.player}</Text>
                    <Image source={imgScissors} style={ styles.imgChoice }/>
                </View>
            )

        }
            return false

    };

};

const styles = StyleSheet.create({
    txtPlayer: {
        textAlign: 'center',
        fontSize: 16
    },

    imgChoice: {
        marginVertical: 20
    }
})

export default Icon
