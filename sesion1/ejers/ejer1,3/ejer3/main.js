'use strict';

const users = [
    {name: 'María', isPremium: false},
    {name: 'Lucía', isPremium: true},
    {name: 'Susana', isPremium: true},
    {name: 'Rocío', isPremium: false},
    {name: 'Inmaculada', isPremium: false}
  ];

  const usersPremium = users.map(user => { if(user.isPremium === true){
      return 'Bienvenida '+user.name+'.Gracias por confiar en nosotros';
  }else{ return'Bienvenida '+user.name}
  });
  console.log(usersPremium)

  //ejer4

  const usersPremium2 = users.filter(user => user.isPremium === true);
  console.log(usersPremium2)

  //ejer 6

  const users6 = [
    {name: 'María', isPremium: false, pin: 2389},
    {name: 'Lucía', isPremium: true, pin: 2384},
    {name: 'Susana', isPremium: true, pin: 2837},
    {name: 'Rocío', isPremium: false, pin: 5232},
    {name: 'Inmaculada', isPremium: false, pin: 8998}
  ];

  const usersParPin = users6.filter(user => user.pin%2 === 0);
  console.log(usersParPin) 

//ejer 8

const runners = [
    {name: 'Gregory Goyle', time: 56},
    {name: 'Nymphadora Tonks', time: 9},
    {name: 'Luna Lovegood', time: 45},
    {name: 'Cedric Diggory', time: 28},
    {name: 'Cho Chang', time: 35}
  ];

  const runnerWinner = runners.reduce(
    (acc, runner8) =>  (acc.time < runner8.time) ? acc : runner8,
    runners[0]
  );
  console.log(runnerWinner.name);

//ejer 10

runners.sort((a, b) => a.time - b.time);
console.log('runners10',runners);

//ejer 11
//pin
users6.sort((a, b) => a.pin - b.pin);
console.log('pins10',users6);

//alfabetico
users6.sort((user) => user.name);
console.log('nombres',users6);