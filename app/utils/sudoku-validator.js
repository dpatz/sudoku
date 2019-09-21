export default function isSudokuBoardValid(input) {
  let rows = [];
  let columns = [
    [], [], [], [], [], [], [], [], []
  ];
  let boxes = [
    [[], [], []],
    [[], [], []],
    [[], [], []]
  ];

  input.forEach((row, row_index) => {
    rows.push(row);
    row.forEach((cell, column_index) => {
      columns[column_index].push(cell);

      let box_row_index = Math.floor(row_index / 3);
      let box_column_index = Math.floor(column_index / 3);

      boxes[box_row_index][box_column_index].push(cell);
    });
  });

  const rowIsValid = !hasInvalidSet(rows);
  const columnsIsValid = !hasInvalidSet(columns);
  const boxesIsValid = !hasInvalidSet(boxes.flat());

  return rowIsValid && columnsIsValid && boxesIsValid;
}

const VALID_SET = '123456789'

function hasInvalidSet(sets) {
  for (let i = 0; i < sets.length; i++) {
    if ([...sets[i]].sort().join('') !== VALID_SET) {
      return true;
    }
  }

  return false
}
