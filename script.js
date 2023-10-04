'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

let arr=['a','b','c','d','e'];
//slice method
  const pop=arr.slice(2);//extr first 3
  console.log(pop);
  const pop2=arr.slice(2,4);//ext 2,3 NB:do not include last index
  console.log(pop2);
  const pop3=arr.slice(-2)//ext last 2
  console.log(pop3);
  const pop4=arr.slice(0,-2);//ext from 0 and dont include last 2
  console.log(pop4);
  const pop5=arr.slice()//returns same array
  console.log(pop5);
  console.log([...arr]);//shalow copy

//Splice method
//mutates the original array
const pap=arr.splice(2);
console.log(pap);
// console.log(arr);::::it removes permanent the extracted elements in array;
//commonly used for deletion
arr.splice(1,2);//ext ind 1,2 and returns the rest of arr
console.log(arr);//c,d,e

//Reverse
//mutates original array=renames the array to new
arr=['a','b','c','d','e'];
const arr2=['j','i','h','g','j'];
arr2.reverse();//arranges in order
console.log(arr2);


//Concat
//do not mutate original array
const letters=arr.concat(arr2);//joins the array
console.log(letters);
console.log([...arr,...arr2]);//

//join()
console.log(letters.join('*'));//joins the letter using

//withdraws and deposits
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//use of for of loop
for (const movement of movements){
  if(movement > 0){
    console.log(`You deposited Ksh ${movement}`);
  }else{
    console.log(`You withdraw Ksh ${Math.abs(movement)}`);
  }
}

// for each function

movements.forEach(function(movement){
  if(movement > 0){
    console.log(`You deposited Ksh ${movement}`);
  }else{
    console.log(`You withdraw Ksh ${Math.abs(movement)}`);
  }
})
