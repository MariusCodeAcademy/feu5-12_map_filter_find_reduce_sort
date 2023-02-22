'use strict';
console.log('find.js file was loaded');

// array.find(function(currentValue, index, arr))
// toks pat kaip filter, tik grazina pirma salyga atitinkancia reiksme
// skirtas surasti konkreciam vienam el.
// grazina surasta el.
// daznu atveju pasitikrinam ar radom

// su find surasti ir atspausdinti useri kurio email yra harry@hogwarts.com

const foundUser = users.find((uObj) => uObj.email === 'harry@hogwarts.com');
if (foundUser === undefined) {
  console.log('neradom vartotojo');
}
foundUser.town = 'London';
console.log('foundUser ===', foundUser);
console.log('users ===', users);
