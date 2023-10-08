'use strict';
// BANKIST APP

// Fetched Data
const account1 = {
  holder: 'James Mburu',
  transactions: [80000, 45000, -4000, 300000, -65000, -58000, 700000, 1300000],
  interest: 1.2, // %
  pin: 1111,
};

const account2 = {
  holder: 'Moses Mbugua',
  transactions: [500000, 34000, -60000, -14000, -2510, -5000, 850000, -3000],
  interest: 1.5,
  pin: 2222,
};

const account3 = {
  holder: 'Grace Wamaitha',
  transactions: [200000, -20000, 3400, -3000, -2000, 5000, 40000, -46000],
  interest: 0.7,
  pin: 3333,
};

const account4 = {
  holder: 'Peter Kimani',
  transactions: [43000, 10000, 7000, 5000, 90000],
  interest: 1,
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
//displaying transactions
 const displayTransactions=function(transaction){
transaction.forEach(function(val,ind,arr){
  const type = val>0?`deposit`: `withdrawal`;
  const html=`
  <div class="movements__row">
          <div class="movements__type
           movements__type--${type}">${ind + 1} ${type}</div>
          <div class="movements__value">
          ${val}</div>
        </div>
  `;
  containerMovements.insertAdjacentHTML('afterbegin',html)
});
 };
 displayTransactions(account2.transactions);













 
 const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);








































/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  [ 'GBP', 'Pound sterling'],
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
    console.log(`You deposited Ksh ${movement}.`);
  }else{
    console.log(`You withdraw Ksh ${Math.abs(movement)}.`);
  }
}

// for each function

movements.forEach(function(movement){
  if(movement > 0){
    console.log(`You deposited Ksh ${movement}`);
  }else{
    console.log(`You withdrew Ksh ${Math.abs(movement)}`);
  }
  // 0:function(200)
  // 1:function(450)
});


//accessing index using fo of loop
// :output:Movement 1:You deposited 200
for(const [a,b] of movements.entries()){
  if(b >0){
    console.log(`Movement ${a+1}:You deposited ${b}:::`)
  }else{
    console.log(`Movement ${a+1}:You Withdrew ${Math.abs(b)}:::`);
  }
}

//access
//use of for each method.
movements.forEach(function(mov,i,arr){
  if(mov>0){
    console.log(`Movement ${i+1}: You deposited Ksh ${mov}.`)
  }else{
    console.log(`Movement ${i+1}: You withdrew Ksh ${Math.abs(mov)}.`)
  }
})

//FOR EACH in Maps

const moneyMap = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  [ 'GBP', 'Pound sterling'],
]);
 moneyMap.forEach(function(value,key,map){
  console.log(`key: ${key} value: ${value}`);
 })

const moneySet=new Set(['Kenyan shillling','United States Dollar','South African Rand','United States Dollar','Israeli new shekel','United States Dollar','Mexican Peso','Israeli new shekel','Swedish Krona','South African Rand'])
moneySet.forEach(function(value,index,set){
  console.log(`value=${value}`)
})





