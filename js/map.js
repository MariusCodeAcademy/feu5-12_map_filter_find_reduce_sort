'use strict';
console.log('map.js file was loaded');

// Array.prototype.map((el, i, arr) => {})
// skirtas pakeisti elemetnu strukturai, kazka atlikti su kiekviena reiksme.
// panasus i forEach tik jis grazina jauja masyva.
// visada grazina tiek elementu kiek yra masyve kuriam iskviestas map

const arr = [1, 2, 3];
console.log('arr ===', arr);

// gauti nauja masyva su reiksmem padiintom vienetu
function forEachWay() {
  const arrPadidintas = [];
  const forEachReturn = arr.forEach((sk) => {
    let skPlius = sk + 1;
    arrPadidintas.push(skPlius);
  });
  console.log('forEachReturn ===', forEachReturn); // undefined
  console.log('arrPadidintas ===', arrPadidintas);
}

function mapWay() {
  // arr.map grazina i iskvietimo vieta tai kas yra return desineje, vidineje funkcijoje
  // debugger;
  const arrPadidintas = arr.map((sk) => {
    let skPlius = sk + 1;
    return skPlius;
  });
  console.log('arrPadidintas ===', arrPadidintas);
}
// mapWay();

// const arr = [1, 2, 3];

// gauti su map is arr masyvo reiksmes paverstas i string,
// ["reikme 1", "reikme 2", "reikme 3"]

const strArr = arr.map((sk) => {
  return `reiksme ${sk}`;
});
console.log('strArr ===', strArr);

const strArrOne = arr.map((sk) => `reiksme ${sk}`);
console.log('strArrOne ===', strArrOne);

// is users arr grazinti tik string vardu masyva
const names = users.map((userObj) => {
  return userObj.age;
});
console.log('names ===', names);
