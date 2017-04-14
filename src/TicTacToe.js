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

  _resetBoard() {
    var board = [
      [' ', ' ', ' '],
      [' ', ' ', ' '],
      [' ', ' ', ' ']
    ];
    this.setState({
      currentPlayer: 'x',
      board: board
    });
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
    console.log("Initing");
    console.log(this.state.board);
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
      // Fill the cell with the current player
      this.state.board[r][c] = this.state.currentPlayer;

      if (this._checkRowsForWin()
      || this._checkColumnsForWin()
      || this._checkLeftDiagonalForWin()
      || this._checkRightDiagonalForWin()) {
        alert(this.state.currentPlayer + " is a winner");
        this._resetBoard();
      } else {
        // Change the currrent player
        if (this.state.currentPlayer === 'x') {
          this.state.currentPlayer = '0';
        } else {
          this.state.currentPlayer = 'x';
        }

        this.setState({
          board: this.state.board,
          currentPlayer: this.state.currentPlayer
        });
      }
    }

  }


  _checkRowsForWin(){
    for (var i = 0; i < 3; i++) {
      var flag = true;
      for (var j = 0; j < 3; j++) {
        if(this.state.board[i][j] !== this.state.currentPlayer){
          flag = false;
          break;
        }
      }
      if(flag === true){
        return true;
      }
    }
    return false;
  }

  _checkColumnsForWin(){
    for (var i = 0; i < 3; i++) {
      var flag = true;
      for (var j = 0; j < 3; j++) {
        if(this.state.board[j][i] !== this.state.currentPlayer){
          flag = false;
          break;
        }
      }
      if(flag === true){
        return true;
      }
    }
    return false;
  }

  _checkLeftDiagonalForWin(){
    var flag = true;
    for (var i = 0; i < 3; i++) {
      if(this.state.board[i][i] !== this.state.currentPlayer){
        flag = false;
        break;
      }
    }
    return flag;
  }

  _checkRightDiagonalForWin(){
    var flag = true;
    var r = 0;
    var c = 2;
    for (var i = 0; i < 3; i++) {
      if(this.state.board[r + i][c - i] !== this.state.currentPlayer){
        flag = false;
        break;
      }
    }
    return flag;
  }
}

AppRegistry.registerComponent('TicTacToe', () => TicTacToe);
