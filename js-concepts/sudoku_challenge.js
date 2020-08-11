const sudokuArr = [[], [], [], [], [], [], [], [], []];
const possible_value = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function appear_only_onc_constriant(board) {
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let row_element = board[r];
      let column_element = get_column(board, c);
      let updated = appear_only_once(row_element,r, c) || appear_only_once(column_element, r, c);
    }
  }
   console.log('Board', sudokuArr);
}

const sudoku = [[], [], [], [9, 5, 1], [2, 4], [], [], [], []];

function get_column(board, column) {
  let col = [];
  for (let row = 0; row < 9; row++) {
    col.push(board[row][column]);
  }
  return col;
}

function get_square(board, square) {
  console.log("functionget_square -> square", square)
  let cells = []
  for (let r = 0; r < 9; r++) {
      for (let c = 0; c < 9; c++) {
          if (square == sudoku[r][c]) {
              cells.push(sudoku[r][c])
          }
      }
  }
  return cells
}



function appear_only_once(r, c) {
  board_updated = false;
  for (let p = 1; p < 10; p++) 
  {
    let possibility = p;
    let counter = sudoku;
    console.log("functionappear_only_once -> counter", counter)
    let row_element = sudoku[r];
    let column_element = get_column(sudoku, c);
    let square_element = get_square(sudoku, sudoku[r][c]);
    if (
      !row_element.includes(possibility) &&
      !column_element.includes(possibility) && !square_element.includes(possibility)
    ) {
      return possibility;
    }
  }
  console.log("Board", sudoku);
}



function appear_only_once1(segment, r, c) {
    board_updated = false;
    for (let p = 1; p < 10; p++) 
    {
      let possibility = p;
      let counter = 0;
      
      segment.forEach(cell => {
          if(cell === possibility) {
              counter++;
          }
      });
      if(counter === 1) {
          sudokuArr[r][c] = possibility;
          board_updated = true;
          break;
      }
    }
  }

console.log(appear_only_once(4, 2));
//console.log(appear_only_once(sudokuArr));

