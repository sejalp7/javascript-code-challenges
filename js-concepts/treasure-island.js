const grid = [
  ['O', 'O', 'O', 'O'],
  ['D', 'O', 'D', 'O'],
  ['O', 'O', 'O', 'O'],
  ['X', 'D', 'D', 'O'],
];

const minStep = grid => {
  const [dX, dY] = [[0,1,0,-1], [1,0,-1,0]];
  const [startX, startY, endX, endY] = [
    0,
    0,
    grid[0].length - 1,
    grid[0].length - 1
  ];
  let node = {
    path: [],
    steps: 0,
    x: startX,
    y: startY,
    val: '0'
  }
  let queue = [node];
  while(queue.length) {
    let currentNode = queue.shift();
    if(currentNode.val === 'X') {
      return { steps: currentNode.steps, path: currentNode.path }
    }
    for(let i=0; i< dX.length; i++) {
      let [nextX, nextY] = [currentNode.x + dX[i], currentNode.y + dY[i] ];
      if (!isSafe(nextX, nextY, endX, endY, grid)) continue;
      let next = { 
        x: nextX,
        y: nextY,
        val: grid[nextX][nextY],
        steps: currentNode.steps + 1,
        path: [...currentNode.path, [nextX, nextY]]
      }
      grid[nextX][nextY] = 'D';
      queue.push(next);
    }
  }
  return -1;
};

const isSafe = (x, y, width, height, grid) => {
  return x >= 0 && x <= width && y >= 0 && y <= height && grid[x][y] !== 'D';
};

let min = minStep(grid);
console.log(min);