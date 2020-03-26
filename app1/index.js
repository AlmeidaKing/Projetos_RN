import React from 'react';
import {Text, View, Button, AppRegistry} from 'react-native';

const getNumber = () => {
    var number = Math.floor(Math.random()*10);
    alert(number);
}

const App =  function(){
    return (
        <View>
            <Text>Hello, World!</Text>
            <Text>This is a random number generator</Text>
            <Button
                title="Get random number"
                onPress={getNumber}
            />
        </View>
    );
}

AppRegistry.registerComponent('app1', () =>{ return App });