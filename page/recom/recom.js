import React, { Component } from 'react';
import {
  Text,
  View,

} from 'react-native';

export default class Recom extends Component{
    render(){
        return(
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>这是推荐页</Text>
            </View>
        )
    }
}