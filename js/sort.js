'use strict';
console.log('sort.js file was loaded');

const arr = [1, -5, 0, -4, 10, -3, 15];

console.log('arr ===', arr);

// Array.sort((a, b) => {grazinam 1, -1, 0})
// palyginimo funkcija (a, b) => {grazinam 1, -1, 0}
// keicia orginalu masyva

arr.sort(); // neveikia su skaiciais
// [1, -5, 0, -4, 10, -3, 15];
//        1  -5
arr.sort((a, b) => {
  if (a < b) {
    return -1;
  } else {
    return 1;
  }
});

// sutrumpintai
arr.sort((a, b) => b - a);

console.log('arr ===', arr);

console.table(users);
// isrikiuoti userius pagal amziu
users.sort((aObj, bObj) => aObj.age - bObj.age);
console.table(users);

// isrikiuoti userius pagal varda  (String.prototype.localCompare)
