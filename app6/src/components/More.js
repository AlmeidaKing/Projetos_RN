import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'

export default class More extends Component {
    render(){
        return(
            <View style={ styles.moreScene }>
                <Text>Another Games</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    moreScene: {
        backgroundColor: '#61bd8c',
        flex: 1,
    }
})