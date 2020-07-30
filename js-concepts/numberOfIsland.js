function count_island(grid) {
  let countOfIsland = 0;
  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      if (grid[r][c] === 1) {
        checkNodes(grid, r, c);
        countOfIsland++;
      }
    }
  }
  return countOfIsland;
}

function checkNodes(grid, r, c) {
  grid[r][c] = 0;
  const [dX, dY] = [
    [-1, -1, -1, 0, 0, -1, 1, 1],
    [-1, 0, 1, -1, 1, 1, 0, 1],
  ];
  
  for (let i = 0; i < 8; i++) {
    let [nextX, nextY] = [r + dX[i], c + dY[i]];
    if (isSafe(nextX, nextY, grid.length - 1, grid[0].length - 1, grid)) {
      console.log(nextX,nextY);
      grid[nextX][nextY] = 0;
      checkNodes(grid, nextX, nextY);
    }
  }
}

const isSafe = (x, y, width, height, grid) => {
  return x >= 0 && x <= width && y >= 0 && y <= height && grid[x][y] === 1;
};

const grid = [
  [1, 1, 0, 0, 0],
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1],
];

console.log(count_island(grid));
