const md5 = require('js-md5');
let salt = 'ngcjuoqr';

function getHashes(salt) {
  let keys = new Set();
  let tuples = new Set();
  let i=0;

  while([...keys].length <= 64) {
    let hash = md5(salt+i);

    tuples.forEach((tuple) => {
      if(tuple[1]+999 > i) {
        let tupleEx = new RegExp('('+tuple[0]+')\\1{4}');

        if(hash.match(tupleEx)) {
          keys.add([hash, tuple[1]]);
          tuples.delete(tuple);
        }
      }else {
        tuples.delete(tuple);
      }
    });

    let tupleMatch = hash.match(/(.)\1{2}/);
    if(tupleMatch != null) {
      tuples.add([tupleMatch[1], i]);
    }

    i++;
  }

  let sortedKeys = [...keys].sort((a,b) => a[1] - b[1]);

  return sortedKeys[63];
}

console.log(getHashes(salt));