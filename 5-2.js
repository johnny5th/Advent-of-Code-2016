const md5 = require('js-md5');

let doorID = 'reyedfim';

let index = 0;
let password = [false, false, false, false, false, false, false, false];
let passwordCharsFilled = 0;

while(passwordCharsFilled < 8) {
  let hash = md5(doorID + index++);
  if(hash.substr(0, 5) == '00000') {
    let pos = hash.substr(5, 1);

    if(parseInt(pos, 16) < 8 && password[pos] == false) {
      password[pos] = hash.substr(6, 1);
      passwordCharsFilled++;
    }
  }
}

console.log(password.join(''));