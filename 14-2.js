const md5 = require('js-md5');
let salt = 'ngcjuoqr';

function getHashes(salt) {
  let keys = [];
  let tuples = new Set();
  let i=0;

  while(keys.length <= 75) {
    let hash = md5(salt+i);

    for(let j=0; j<2016; j++) {
      hash = md5(hash);
    }

    let deleteArr = [];
    tuples.forEach((tuple) => {
      if(tuple[1]+1000 > i) {
        let tupleEx = new RegExp('('+tuple[0]+')\\1{4}');

        if(hash.match(tupleEx)) {
          keys.push(tuple[1]);
          deleteArr.push(tuple);
        }
      }else {
        deleteArr.push(tuple);
      }
    });

    deleteArr.forEach((tuple) => tuples.delete(tuple));

    let tupleMatch = hash.match(/(.)\1{2}/);
    if(tupleMatch != null)
      tuples.add([tupleMatch[1], i]);

    i++;
  }

  let sortedKeys = keys.sort((a,b) => parseInt(a,10) - parseInt(b,10));
console.log(sortedKeys);
  return sortedKeys[63];
}

console.log(getHashes(salt));