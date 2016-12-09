const md5 = require('js-md5');

let doorID = 'reyedfim';

let index = 0;
let password = '';

while(password.length < 8) {
  let hash = md5(doorID + index++);
  if(hash.substr(0, 5) == '00000')
    password += hash.substr(5, 1);
}

console.log(password);


