import Component from '@ember/component';
import { computed } from '@ember/object';
import isSudokuBoardValid from 'sudoku/utils/sudoku-validator';

export default Component.extend({
  isValid: computed('boardData.@each', function() {
    return isSudokuBoardValid(this.boardData);
  }),

  boxes: computed('boardData.@each', function() {
    let boxes = [[[], [], []], [[], [], []], [[], [], []]];

    this.boardData.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        let boxRowIndex = Math.floor(rowIndex / 3);
        let boxColumnIndex = Math.floor(columnIndex / 3);

        boxes[boxRowIndex][boxColumnIndex].push(cell);
      });
    });

    return boxes.flat();
  }),

  updateBoard(boxIndex, cellIndex, value) {
    let rowData = [...this.boardData];

    let startingRowIndex = Math.floor(boxIndex / 3) * 3;
    let rowOffset = Math.floor(cellIndex / 3);
    let rowIndex = startingRowIndex + rowOffset;

    let startingColumnIndex = Math.floor(boxIndex % 3) * 3;
    let columnOffset = cellIndex % 3;
    let columnIndex = startingColumnIndex + columnOffset;

    rowData[rowIndex][columnIndex] = value;

    this.onUpdate(rowData);
  },
});
