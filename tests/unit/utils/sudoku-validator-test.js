import isSudokuBoardValid from 'sudoku/utils/sudoku-validator';
import { module, test } from 'qunit';

module('Unit | Utility | sudoku_validator', function() {
  // Replace this with your real tests.
  test('is invalid', function(assert) {
    const input = [
      [1, 3, 2, 5, 4, 6, 9, 2, 7],
      [4, 6, 5, 8, 7, 9, 3, 8, 1],
      [7, 9, 8, 2, 1, 3, 6, 5, 4],
      [9, 2, 1, 4, 3, 5, 8, 7, 6],
      [3, 5, 4, 7, 6, 8, 2, 1, 9],
      [6, 8, 7, 1, 9, 2, 5, 4, 3],
      [5, 7, 6, 9, 8, 1, 4, 3, 2],
      [2, 4, 3, 6, 5, 7, 1, 9, 8],
      [8, 1, 9, 3, 2, 4, 7, 6, 5],
    ];

    let isValid = isSudokuBoardValid(input);

    assert.ok(!isValid);
  });
  
  test('is valid', function(assert) {
    const input = [
      [1, 3, 2, 5, 4, 6, 9, 8, 7],
      [4, 6, 5, 8, 7, 9, 3, 2, 1],
      [7, 9, 8, 2, 1, 3, 6, 5, 4],
      [9, 2, 1, 4, 3, 5, 8, 7, 6],
      [3, 5, 4, 7, 6, 8, 2, 1, 9],
      [6, 8, 7, 1, 9, 2, 5, 4, 3],
      [5, 7, 6, 9, 8, 1, 4, 3, 2],
      [2, 4, 3, 6, 5, 7, 1, 9, 8],
      [8, 1, 9, 3, 2, 4, 7, 6, 5],
    ];

    let isValid = isSudokuBoardValid(input);

    assert.ok(isValid);
  });
});
