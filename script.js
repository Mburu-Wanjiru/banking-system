'use strict';
 //BANKIST APP

// //Fetched Data
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
//  displayTransactions(account1.transactions);

 ////////////////////////////display balance
const calcdisplaybalance=function(acc){
   acc.balance=acc.transactions.reduce(
    (accumilator,current)=>accumilator+current,0);
    labelBalance.textContent=`KSH ${acc.balance} `;
};
// calcdisplaybalance(account1.transactions);

//////////////////////////display the summary
const displayInlets=function(acc){
  const deposits=acc.transactions.filter(function(current){
    return current>0;
  }).reduce(function(accumilator,current,i,arr){
    return accumilator+current;
  },0);
labelSumIn.textContent=`${deposits}`



const withdrawals=acc.transactions.filter(function(current,i,arr){
  return current<0;
}).reduce(function(accumilator,current,i,arr){
const sum=accumilator+current;
  return sum; 
},0);
labelSumOut.textContent=`${Math.abs(withdrawals)}`



const interest=acc.transactions.filter(function(current,i,arr){
  return current>0;
}).map(function(current,i,arr){
  return (current * acc.interest)/100;
}).filter((current,i,arr)=>{ 
  console.log(arr) 
  return current>=1 }).reduce(function(accumilator,current,i,arr){
  return accumilator+current; 
},0);
labelSumInterest.textContent=`${interest}`
};
// displayInlets(account1.transactions);

////////////////////


const createUsernames=function(accs){
  accs.forEach(function(acc){
    acc.username=acc.holder
    .toLowerCase()
    .split(' ')
    .map(name=>name[0])
    .join('');
  })
};
createUsernames(accounts);
console.log(accounts);

const updateUi=function(acc){
  //displaying movement
  displayTransactions(acc.transactions);
  //displaying balance
  calcdisplaybalance(acc);
  //displaying summary
  displayInlets(acc);

}
//implementing login

//event handler
let currentAccount;
const login=btnLogin.addEventListener('click',function(event){
  event.preventDefault();//avoids re loading
  // check the login
  currentAccount=accounts.find(function(acc){
   return acc.username===inputLoginUsername.value;
  });
    
    if (currentAccount ?.pin===Number(inputLoginPin.value)){
      //display UI
      labelWelcome.textContent=`Welcome Back, ${currentAccount.holder.split(' ')[0]}`;
      containerApp.style.opacity=100;

       //clear imputs
       inputLoginUsername.value=inputLoginPin.value='';
      //trigering focus
      inputLoginPin.blur();

      updateUi(currentAccount);
     
      // //displaying movement
      // displayTransactions(currentAccount.transactions);
      // //displaying balance
      // calcdisplaybalance(currentAccount);
      // //displaying summary
      // displayInlets(currentAccount);
      // updateUi(currentAccount);
    }

  

   
});


//USER TRANSFER MONEY
const trasfer=btnTransfer.addEventListener('click',function(event){
// set default
event.preventDefault();
const amount=Number (inputTransferAmount.value);
const receiverAcc=accounts.find(acc=>
  acc.username===inputTransferTo.value
);

inputTransferTo.value=inputTransferAmount.value='';
if(amount > 0 && receiverAcc &&
  currentAccount.balance>= amount &&
   receiverAcc?.username!==currentAccount.username)
{

  // Doing the transfer
currentAccount.transactions.push(-amount);
receiverAcc.transactions.push(amount);

 // Update UI
 updateUi(currentAccount);
}
}
);


btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});



/////////////////////////////////////////////////
// LECTURES
const transactions =[200000, -20000, 3400, -3000, -2000, 5000, 40000, -46000];
/*const currencies = new Map([
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
 console.log(`for each function `)
// for each function

movements.forEach(function(movement,i,arr){
  if(movement > 0){
    console.log(`You deposited Ksh ${movement}`);
  }else{
    console.log(`You withdrew Ksh ${Math.abs(movement)}`);
  }
  // 0:function(200)
  // 1:function(450)
});

console.log(`accessing index using fo ofloop `)
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

console.log(MAP METHOD IN ARRAYS);
/////////////////////////////////
//  MAP METHOD IN ARRAYS
//it is a transformation that that assigns an operation
//and operates in it,returns a new array.it also loops
const keToUs=56;

const iteration1=movements.map(function(mov){
  return keToUs * mov
})
console.log(iteration1);
//cleaner code
const iteration2=movements.map(mov=>keToUs*mov);
console.log(iteration2);

// //////same implamentation
//using for of loop
 const newLine=[];
 for (const news of movements){
  newLine.push(news * keToUs);
 }
 console.log(newLine); 

 ////husling an array using Map

 const strLine=movements.map((mov,i,arr)=>`Movement ${i+1}:
  you ${mov>0?'deposited':'withdrew'} ${Math.abs(mov)}`);
  console.log(strLine);*/



  console.log(`filter method `)
  //prints only elements which satisfy a certain condition
  // which means that filter method must have a condition 
  //which it checks before loooping. 

  const withdrawals=transactions.filter(function(arr){
    return arr<0;
  })
   console.log(withdrawals);
//use for of loop
   const withdr=[];
   for(const arr of transactions){
    if (arr<0)withdr.push(arr);
   }
   console.log(withdr);
//////////////////////////////////////////////////
   const deposits=transactions.filter(arr=>arr>0);
   console.log(deposits);
   //use for of loop
   const depo=[];
   for(const arr of transactions){
    if (arr>0)depo.push(arr);
   }
   console.log(depo);

   console.log(`reduce method in arrays`);
   //reduce method is used to simplyfy an object to a single value.
   const balance=transactions.reduce(function(accumilator,
    current,i,arr){
    return accumilator+current;
   },0)
   console.log(balance);

   //displaying the statement
   const statement=transactions.reduce((acc,curr,i,arr)=>{
    const check=curr>0?'deposit':'withdarawal';
    const state=`${i+1}:You ${check} Ksh ${Math.abs(acc)}`
console.log(state);
    return acc+curr;
   });
   console.log(statement);

////displaying maximum and minimum
const max=transactions.reduce((acc,curr)=>
{
  if (acc>curr)return acc
  else return transactions;
},transactions[0]);

 

//chaining the deposits,convertion of currency,differentiating the deposits
const fixed=12.34;
const pipeline=transactions.filter(current=>current>0).map(function(current,i,arr){
  return current*fixed;
}).reduce(function(accumilator,current,i,arr){
  return accumilator+current;
},0)
console.log(pipeline);

console.log(`..........find method,..............`);
//used to retrieve elements having being given a condition and also accepts callback function
//retrieving accounts
console.log(accounts);
const account=accounts.find(function(current,i,obj){
  return current.holder===`James Mburu`;
})
console.log(account);

//////same implemena
for (const jim of Objects(entries)){
  console.log(jim);
}
