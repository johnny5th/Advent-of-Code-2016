let magicNumber = 1350;

function isSpace(x,y) {
  let sum = (x*x + 3*x + 2*x*y + y + y*y + magicNumber);
  let binary = sum.toString(2);
  var count = (binary.match(/1/g) || []).length;
  return count % 2 == 0;
}

Array.prototype.hasBeenVisited = function(x,y) {
  return this.indexOf('x'+x+'y'+y) == -1;
};

let visited = [];

function possibleMoves(x,y) {
  let moves = [];
  if(x-1 != -1 && visited.hasBeenVisited(x-1,y) && isSpace(x-1,y))
    moves.push([x-1, y]);
  if(visited.hasBeenVisited(x+1,y) && isSpace(x+1,y))
    moves.push([x+1, y]);
  if(y-1 != -1 && visited.hasBeenVisited(x,y-1) && isSpace(x,y-1))
    moves.push([x, y-1]);
  if(visited.hasBeenVisited(x,y+1) && isSpace(x,y+1))
    moves.push([x, y+1]);

  return moves;
}

function run(x,y,count) {
  let stack = [];
  stack.push([x,y,count]);

  while(stack.length>0) {
    let [x,y,count] = stack.shift();

    if(x==31 && y==39)
      return count;

    let moves = possibleMoves(x,y);

    moves.forEach((move) => {
      stack.push([move[0], move[1], count+1]);
      visited.push('x'+move[0]+'y'+move[1]);
    });
  }
}

console.log(run(1,1,0));
