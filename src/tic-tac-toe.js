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
      this.player = this.getFieldValue(rowIndex, columnIndex);
    }

    isFinished() {

    }

    getWinner() {

    }

    noMoreTurns() {

    }

    isDraw() {

    }

    getFieldValue(rowIndex, colIndex) {
      if (this.field[rowIndex][colIndex] == null) {
        if (this.player == 'x') {
          this.field[rowIndex][colIndex] = 'x';
          this.player = 'o';
        } else {
          this.field[rowIndex][colIndex] = 'o';
          this.player = 'x';
        }
      } else {
        if (this.player == 'o') {
          this.player = 'o';
        } else {
          this.player = 'x';
        }
      }
      return this.player;
    }
}

module.exports = TicTacToe;

