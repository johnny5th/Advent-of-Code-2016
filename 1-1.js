let data = 'L1, L5, R1, R3, L4, L5, R5, R1, L2, L2, L3, R4, L2, R3, R1, L2, R5, R3, L4, R4, L3, R3, R3, L2, R1, L3, R2, L1, R4, L2, R4, L4, R5, L3, R1, R1, L1, L3, L2, R1, R3, R2, L1, R4, L4, R2, L189, L4, R5, R3, L1, R47, R4, R1, R3, L3, L3, L2, R70, L1, R4, R185, R5, L4, L5, R4, L1, L4, R5, L3, R2, R3, L5, L3, R5, L1, R5, L4, R1, R2, L2, L5, L2, R4, L3, R5, R1, L5, L4, L3, R4, L3, L4, L1, L5, L5, R5, L5, L2, L1, L2, L4, L1, L2, R3, R1, R1, L2, L5, R2, L3, L5, L4, L2, L1, L2, R3, L1, L4, R3, R3, L2, R5, L1, L3, L3, L3, L5, R5, R1, R2, L3, L2, R4, R1, R1, R3, R4, R3, L3, R3, L5, R2, L2, R4, R5, L4, L3, L1, L5, L1, R1, R2, L1, R3, R4, R5, R2, R3, L2, L1, L5';

var dataArray = data.split(", ");
var direction = 0;
var coordinates = {x: 0, y: 0};

Number.prototype.mod = function(n) {
  return ((this%n)+n)%n;
};

function move(turn, amount) {
  if(turn == 'L') {
    direction = (direction-1).mod(4);
  } else {
    direction = (direction+1).mod(4);
  }

  if(direction == 0)
    coordinates.y += amount;
  else if(direction == 1)
    coordinates.x += amount;
  else if(direction == 2)
    coordinates.y -= amount;
  else if(direction == 3)
    coordinates.x -= amount;
}

for(let movement in dataArray) {
  let turn = dataArray[movement].substr(0,1);
  let amount = dataArray[movement].substr(1);

  move(turn, +amount);
}

console.log('Coordinates', coordinates);
console.log('Distance', (Math.abs(coordinates.x) + Math.abs(coordinates.y)));

