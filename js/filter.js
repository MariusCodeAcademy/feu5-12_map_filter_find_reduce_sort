'use strict';
console.log('filter.js file was loaded');

const arr = [1, -5, 0, -4, 10, -3, 15];
console.log('arr ===', arr);
// array.filter(function(currentValue, index, arr))
// metodas skirtas tik atrinki i nauja masyva reikmes
// attitinkancias salyga.
// jei vidine funkcija grazina true tai ta reiksme atrenkama

const positivesArr = arr.filter((sk) => {
  // if (sk > 0) {
  //   return true;
  // }
  return sk >= 0;
});

// arr.filter((sk) => <salyga pagal kuria atrenkam>)
const negatives = arr.filter((sk) => sk < 0);
const evenNumArr = arr.filter((sk) => sk % 2 === 0);

console.log('evenNumArr ===', evenNumArr);
console.log('positivesArr ===', positivesArr);
console.log('negatives ===', negatives);
