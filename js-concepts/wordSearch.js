// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell,
// where "adjacent" cells are those horizontally or vertically neighboring.
// The same letter cell may not be used more than once.
// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]

// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.
// function searchWord(board, word) {
//     for (let index = 0; index < word.length; index++) {
//         const element = word[index];
//         for(let i=0; i < board.length; i++) {
//             for (let j = 0; j < board[0].length; j++) {
//                 console.log("searchWord -> board[i]", board[i][j])
//                 if(board[i][j] === element || board[i + 1][j] === element) {
//                     board[i] = 0;
//                 }
//             }
        
//         }
//         console.log("searchWord -> board", board);
//     }
   
// }
const searchWord = (board, word) => {
    console.log(word[0]);
    let [dX, dY] = [[1, 1], [1, 1]];
    let [startX, startY, endX, endY] = [0,0, board[0].length - 1, board[0].length - 1];
    let node = {
        path: [],
        steps: 0,
        x: startX,
        y: startY,
        val: word[0]
    }
    let wordQueue = [node];
    if(wordQueue.length) {
        let currentWord = wordQueue.shift();
        console.log("searchWord -> currentWord", currentWord)
        for(let i=0; i< word.length; i++) { 
            let [nextX, nextY] = [currentWord.x + dX[i], currentWord.y + dY[i]];
            console.log("searchWord -> board[currentWord.x][currentWord.y]", board[currentWord.x][currentWord.y])
            if(board[currentWord.x][currentWord.y] === word[i]) {
                
            }
        }
    }
}
const board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]
console.log("searchWord -> searchWord", searchWord(board,'ABCCED'));