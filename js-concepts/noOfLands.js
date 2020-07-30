/*

var sea =[ 
  [1,1,1,0,0],
  [0,1,0,0,1],
  [1,0,0,1,1],
  [0,0,0,0,0],
  [1,1,1,0,1] 
]

1 = part of land
0 = water

No of connected lands: 4

[ 
  x,x,x,0,0,
  0,x,0,0,y,
  x,0,0,y,y,
  0,0,0,0,0,
  w,w,w,0,z 
]

x.   x.    x

x.  i,j.  x

x.   x.   x
*/

const positions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

function findNoOfLands(sea) {
  let count = 0;
  for (let i = 0; i < sea.length; i++) {
    for (let j = 0; j < sea[0].length; j++) {
      if (sea[i][j] === 1) {
        dfs(sea, i, j);
        count++;
      }
    }
  }
  return count;
}

function dfs(sea, i, j) {
  sea[i][j] = 0;
  for (let k = 0; k < positions.length; k++) {
    let [nextX, nextY] = [i + positions[k][0], j + positions[k][1]];
    if (checkIfLand(sea, nextX, nextY)) {
      sea[nextX][nextY] = 0;
      dfs(sea, nextX, nextY);
    }
  }
}
function checkIfLand(sea, x, y) {
  return (
    x >= 0 && x < sea.length && y >= 0 && y < sea[0].length && sea[x][y] === 1
  );
}
// var sea = [
//   [1, 1, 1, 0, 0],
//   [0, 1, 0, 0, 1],
//   [1, 0, 0, 1, 1],
//   [0, 0, 0, 0, 0],
//   [1, 1, 1, 0, 1],
// ];
// var sea = [
//   [1, 1, 1, 1, 0],
//   [0, 1, 0, 0, 1],
//   [1, 0, 0, 1, 1],
//   [0, 0, 0, 1, 0],
//   [1, 1, 1, 0, 1],
// ];
// const sea = [
//   [1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 1],
//   [1, 0, 0, 1, 1],
//   [0, 0, 0, 0, 0],
//   [1, 0, 1, 0, 1],
// ];
const sea = [
  [1, 1, 1, 1, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 1, 0],
  [1, 1, 1, 0, 1],
];

// console.log('checkIfLand -> checkIfLand', checkIfLand(sea, 4, 4));
console.log('findNoOfLands -> findNoOfLands', findNoOfLands(sea));
