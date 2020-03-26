import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

export default class About extends Component {
    render(){
        return(
            <View style={ styles.aboutScene }>
                <Text>About</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    aboutScene: {
        backgroundColor: '#61bd8c',
        flex: 1,
    }
})