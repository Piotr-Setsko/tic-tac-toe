class TicTacToe {
    constructor() {
      this.field = [];
      this.player = 'x';
      this.field = array(this.field);
      function array(arr) {
        for (let i = 0; i< 3 ; i++) {
          arr[i] = [];
            for (let j=0;j<3;j++){
            arr[i][j] = null;
          }
        }
        return arr;
      }
    }

    getCurrentPlayerSymbol() {
      return this.player;
    }

    nextTurn(rowIndex, columnIndex) {
      if (this.field[rowIndex][columnIndex] == null) {
        if (this.player == 'x') {
          this.field[rowIndex][columnIndex] = 'x';
          this.player = 'o';
        } else {
          this.field[rowIndex][columnIndex] = 'o';
          this.player = 'x'; }
      } else {
        if (this.player == 'o') {
          this.player = 'o';
        } else {
          this.player = 'x';
        }
      }
      return this.player;
    }

    isFinished() {
     if (this.getWinner() != null) {
      return true;
     }
     if(this.noMoreTurns()) {
       return true;
     }
     return false;
  }

    getWinner() {
      let arr = [[0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]];

      let check = this.field[0].concat(this.field[1].concat(this.field[2]));

      for (let i = 0; i < arr.length; i++) {
        if ((check[arr[i][0]] == check[arr[i][1]] && check[arr[i][1]] == check[arr[i][2]]) && check[arr[i][2]] != null) {
          return check[arr[i][0]];
          }
      }
      return null;
    }

    noMoreTurns() {
      for(let i=0;i<this.field.length;i++) {
      if (this.field[i].some(item => item == null)) {
        return false;
      }
    }
    return true;
  }



    isDraw() {
      if(this.getWinner() != null) {
        return false;
      }
      return this.noMoreTurns();
    }

    getFieldValue(rowIndex, colIndex) {
      return this.value = this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
