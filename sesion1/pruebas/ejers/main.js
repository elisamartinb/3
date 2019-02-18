'use strict';

//ejer 1
const marks = [5, 4, 6, 7, 9];

const inflatedMarks = marks.map(mark => mark+1);

console.log('inflated marks',inflatedMarks);


//ejer 2

const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const sayHello = names.map(name => 'Bienvenida '+name);

console.log('inflated marks',sayHello);


//ejer 3

const users = [
    {name: 'María', isPremium: false},
    {name: 'Lucía', isPremium: true},
    {name: 'Susana', isPremium: true},
    {name: 'Rocío', isPremium: false},
    {name: 'Inmaculada', isPremium: false}
  ];


const usersPremium = [];

for(let i=0; i<users.length; i++){
    if(users[i].isPremium === true){
        usersPremium.push('Bienvenida '+users[i].name+'. Gracias por confiar en nosotros.');
    }
}

console.log('saudo premium',usersPremium);

//ejer 4 es igual que el 3 pero con filter

const usersPremium2 = users.filter(user => user.isPremium === true);

console.log('premiium con filter',usersPremium2);

//ejer 5

const pins = [2389, 2384, 2837, 5232, 8998];

const parPins = pins.filter(pin => pin%2 === 0);
console.log('contraseñas pares',parPins);

//ejer 6

const users6 = [
    {name: 'María', isPremium: false, pin: 2389},
    {name: 'Lucía', isPremium: true, pin: 2384},
    {name: 'Susana', isPremium: true, pin: 2837},
    {name: 'Rocío', isPremium: false, pin: 5232},
    {name: 'Inmaculada', isPremium: false, pin: 8998}
  ];

const usersIn = users6.filter(user => user.pin%2 === 0);
console.log('usersIn6', usersIn);

//ejer 7

const times = [56, 9, 45, 28, 35];
const result = times.reduce(
    (acc, number) =>  acc + number
  );

console.log('times reduced',result);

//ejer 8

const runners = [
    {name: 'Gregory Goyle', time: 56},
    {name: 'Nymphadora Tonks', time: 9},
    {name: 'Luna Lovegood', time: 45},
    {name: 'Cedric Diggory', time: 88},
    {name: 'Cho Chang', time: 35}
  ];

const runnerWinner = runners.reduce (
    (acc,runner) => (acc > runner.time) ? acc = acc : acc = runner.time,
    0
    );
  

console.log('ejer8 ganador',runnerWinner);

//ejer 9

const runners9 = [
    {name: 'Gregory Goyle', time: 56, student: true},
    {name: 'Nymphadora Tonks', time: 90, student: false},
    {name: 'Luna Lovegood', time: 45, student: true},
    {name: 'Cedric Diggory', time: 28, student: true},
    {name: 'Cho Chang', time: 95, student: true}
  ];

  const winnerStudent = runners9
  .filter (runner => runner.student === true)
  .reduce (
    (acc,runner) => (acc > runner.time) ? acc = acc : acc = runner.time,
    0
  );

  console.log('winner 9',winnerStudent);

  //ejer10 ordenar los del 8

  const runners10 = [
    {name: 'Gregory Goyle', time: 56},
    {name: 'Nymphadora Tonks', time: 9},
    {name: 'Luna Lovegood', time: 45},
    {name: 'Cedric Diggory', time: 88},
    {name: 'Cho Chang', time: 35}
  ];

runners10.sort((a, b) => b.time - a.time);
console.log('runners ordenados 10',runners10);

//ejer 11 ordenar por pin el 6

const users11 = [
    {name: 'María', isPremium: false, pin: 2389},
    {name: 'Lucía', isPremium: true, pin: 2384},
    {name: 'Susana', isPremium: true, pin: 2837},
    {name: 'Rocío', isPremium: false, pin: 5232},
    {name: 'Inmaculada', isPremium: false, pin: 8998}
  ];

//primero tengo que tener un array con solo los nombres
const users11orden = users11.map(user => user.name);
console.log('solo los nombres del 11 antes de ordenar',users11orden);

//cuando ya tengo el array con solo los nombres solo los ordeno alfabeticamente
users11orden.sort();
console.log('nombres 11 alfabeticamente',users11orden);
