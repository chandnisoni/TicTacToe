import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  AppRegistry
} from 'react-native';
import Style from './Style';

export default class InputButton extends Component {
  render(){
    return(
      <TouchableHighlight style={Style.inputButton}
                          onPress = {this.props.onPress}>
        <Text style={Style.inputButtonText}>{this.props.value}</Text>
      </TouchableHighlight>
    )
  }
}
