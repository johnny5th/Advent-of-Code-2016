let data = 'L1, L5, R1, R3, L4, L5, R5, R1, L2, L2, L3, R4, L2, R3, R1, L2, R5, R3, L4, R4, L3, R3, R3, L2, R1, L3, R2, L1, R4, L2, R4, L4, R5, L3, R1, R1, L1, L3, L2, R1, R3, R2, L1, R4, L4, R2, L189, L4, R5, R3, L1, R47, R4, R1, R3, L3, L3, L2, R70, L1, R4, R185, R5, L4, L5, R4, L1, L4, R5, L3, R2, R3, L5, L3, R5, L1, R5, L4, R1, R2, L2, L5, L2, R4, L3, R5, R1, L5, L4, L3, R4, L3, L4, L1, L5, L5, R5, L5, L2, L1, L2, L4, L1, L2, R3, R1, R1, L2, L5, R2, L3, L5, L4, L2, L1, L2, R3, L1, L4, R3, R3, L2, R5, L1, L3, L3, L3, L5, R5, R1, R2, L3, L2, R4, R1, R1, R3, R4, R3, L3, R3, L5, R2, L2, R4, R5, L4, L3, L1, L5, L1, R1, R2, L1, R3, R4, R5, R2, R3, L2, L1, L5';

var dataArray = data.split(", ");
var direction = 0;
var coordinateSet = [];

Number.prototype.mod = function(n) {
  return ((this%n)+n)%n;
};

function move(turn, amount) {
  if(turn == 'L') {
    direction = (direction-1).mod(4);
  } else {
    direction = (direction+1).mod(4);
  }

  let y, x;

  if(coordinateSet.length > 0) {
    y = coordinateSet[coordinateSet.length - 1].y;
    x = coordinateSet[coordinateSet.length - 1].x;
  } else {
    y = 0;
    x = 0;
  }

  for(let i=1; i <= amount; i++) {
    if(direction == 0)
      y++;
    else if(direction == 1)
      x++;
    else if(direction == 2)
      y--;
    else if(direction == 3)
      x--;

    coordinateSet.push({x: x, y: y});
  }
}

function getDestination() {
  for(let i in coordinateSet) {
    for(let j in coordinateSet) {
      if(i != j && coordinateSet[i].x == coordinateSet[j].x && coordinateSet[i].y == coordinateSet[j].y) {
        return Math.abs(coordinateSet[j].x) + Math.abs(coordinateSet[j].y);
      }
    }
  }
}

for(let movement in dataArray) {
  let turn = dataArray[movement].substr(0,1);
  let amount = dataArray[movement].substr(1);

  move(turn, +amount);
}

console.log(getDestination());

