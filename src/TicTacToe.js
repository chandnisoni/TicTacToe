import React, {Component} from 'react';
import {
  Text,
  View,
  AppRegistry
} from 'react-native';
import Style from './Style';
import InputButton from './InputButton';


class TicTacToe extends Component {
  constructor(props){
    super(props);
    var board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    this.state = {
      currentPlayer: 'x',
      board: board
    }
  }

  render() {
    return(
      <View style={Style.container}>
        <View style={Style.header}>
          <Text> Tic Tac Toe </Text>
        </View>
        <View style={Style.inputContainer}>
          {this._initBoard()}
        </View>
        <View style={Style.footer}></View>
      </View>
    )
  }

  _initBoard(){
    let views = [];

    for (var r = 0; r < 3; r ++) {
      let inputRow = [];
      for (var c = 0; c < 3; c ++) {
        var buttonKey = r + "-" + c;
        inputRow.push(
            <InputButton key={buttonKey}
                         value = {this.state.board[r][c]}
                         onPress={this._onButtonPressed.bind(this, r, c)} />
        );
      }
      views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
    }
    return views;
  }

  _onButtonPressed(r, c){
    if (this.state.board[r][c] === ' ') {
      var newBoard = this.state.board;
      newBoard[r][c] = this.state.currentPlayer;
      var newPlayer = ' ';
      if (this.state.currentPlayer === 'x') {
        newPlayer = '0';
      } else {
        newPlayer = 'x';
      }
      this.setState({
        board: newBoard,
        currentPlayer: newPlayer
      });
    }

  }

  

}

AppRegistry.registerComponent('TicTacToe', () => TicTacToe);
