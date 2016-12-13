let instructions = `cpy 1 a
cpy 1 b
cpy 26 d
jnz c 2
jnz 1 5
cpy 7 c
inc d
dec c
jnz c -2
cpy a c
inc a
dec b
jnz b -2
cpy c b
dec d
jnz d -6
cpy 16 c
cpy 12 d
inc a
dec d
jnz d -2
dec c
jnz c -5`;

instructions = instructions.split("\n");

let registers = {a: 0, b: 0, c: 0, d: 0};

for(let i=0; i<instructions.length; null) {
  let copy = instructions[i].match(/cpy ([^\s]*) ([a-d]*)/);
  let increment = instructions[i].match(/inc ([a-d]*)/);
  let decrement = instructions[i].match(/dec ([a-d]*)/);
  let jump = instructions[i].match(/jnz ([^\s]*) ([^\s]*)/);
  if(jump && (jump[1] == '0' || registers[jump[1]] == 0))
    jump = false;

  if(copy) {
    if(copy[1].match(/[a-d]/)) {
      registers[copy[2]] = registers[copy[1]];
    } else {
      registers[copy[2]] = parseInt(copy[1], 10);
    }
  } else if(increment) {
    registers[increment[1]]++;
  } else if(decrement) {
    registers[decrement[1]]--;
  } else if(jump) {
    i=i+parseInt(jump[2], 10);
    continue;
  }
  i++;
}

console.log(registers);