'use strict';
console.log('people.js file was loaded');

const people = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

// 1. Naudojant Array.prototype.forEach atspausdinti visus vyrus.

people.forEach((pObj) => {
  // ar vyras
  if (pObj.sex === 'male') {
    console.log('pObj man ===', pObj);
  }
});

// 2. Naudojant Array.prototype.filter grazinti visas moteris jaunesnes nei 35 metai.

const youngLadiesArr = people.filter(
  (pObj) => pObj.sex === 'female' && pObj.age < 35
);
console.table(youngLadiesArr);

// 3. Naudojant Array.prototype.forEach atspausdinti visus žmones kurie turi mašinas.

people.forEach((pObj) => {
  // ar asmuo turi masina
  if (pObj.hasCar === true) {
    console.log('has car ===', pObj);
  }
});

const drivers = people.filter((pObj) => pObj.hasCar === true);
console.table(drivers);

// 5. Naudojant Array.prototype.forEach atspausdinti visų vairuojančių žmonių lytį.

people.forEach((pObj) => {
  // ar vairuoja?
  if (pObj.hasCar === true) {
    // jei taip spausdinam lyti
    console.log('driver lytis ===', pObj.sex);
  }
});

// 5.1 Naudojant Array.prototype.map grazinti naujame masyve visų vairuojančių žmonių lytį.
const drivers1 = people.filter((pObj) => pObj.hasCar === true);
console.log('drivers1 ===', drivers1);
let driversGenderArr = drivers1.map((pObj) => pObj.sex);
console.log('driversGenderArr ===', driversGenderArr);

// metodu jungimas i grandinele =================
driversGenderArr = people
  .filter((pObj) => pObj.hasCar === true)
  .map((pObj) => pObj.sex);
console.log('driversGenderArr ===', driversGenderArr);

// 6. Naudojant Array.prototype.forEach ir globalius kintamuosius,
// suskaičiuoti vairuojančių moterų ir vyrų kiekius, bei juos atspausdinti.

function makeDriverCount() {
  // sukti cikla
  /// skaicuoti i atskirus kibirelius
  let vyrai = 0;
  let moterys = 0;
  people.forEach((pObj) => {
    // jei vairuoja
    if (pObj.hasCar === true) {
      // vairuojanti/s
      if (pObj.sex === 'female') {
        // vairuojanti moteris
        moterys++;
      } else {
        // vairuojantis vyras
        vyrai++;
      }
    }
  });
  console.log({ vyrai, moterys });
  // jei moteris
  // dedam i moteru count
  // jei ne i vyru count
}
makeDriverCount();

// {
//   name: 'Jonas',
//   surname: 'Jonaitis',
//   sex: 'male',
//   age: 26,
//   income: 1200,
//   married: false,
//   hasCar: false,
// },

// 7. Pagal people masyvą, naudojant Array.prototype.map, suformuokite masyva su objektais, kurie turės savybes sex ir income
// {
//   sex: 'male',
//   income: 1200,
// },

const smallerObjArr = people.map((pObj) => {
  const newSmallerObj = {
    gender: pObj.sex,
    income: pObj.income,
  };
  return newSmallerObj;
});
console.log('smallerObjArr ===', smallerObjArr);
