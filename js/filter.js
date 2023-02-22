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

let myArray = [42, true, 'Hello World', false, 3.14, 'Spring', 0];

// atrkinkiti i naujus masyvus kiekvie tipo reiksmes
// i atskirus kintamuosius
const strOrBool = myArray.filter(
  (el) => typeof el === 'string' || typeof el === 'boolean'
);
console.log('strOrBool ===', strOrBool);
// atrikti i objekta su savybe kiekvieno tipo masyvui
const tipai = {
  str: myArray.filter((el) => typeof el === 'string'),
  bool: myArray.filter((el) => typeof el === 'boolean'),
  nums: myArray.filter((el) => typeof el === 'number'),
};
console.log('tipai ===', tipai);
