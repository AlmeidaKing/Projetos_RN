import React, { Component } from 'react';
import { View, Image } from 'react-native';

const image = require('../../images/jokenpo_top.png');

class Top extends Component{

    render(){
        return(
            <View>
                <Image
                    source={image}
                />
            </View>
        )
    }
}


export default Top