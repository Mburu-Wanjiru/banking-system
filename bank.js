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
   displayTransactions(account2.transactions);
  

   //computing usernames
  const createUsernames=function(accs){
    accs.forEach(function(acc){//looping the array//gives the whole array of account
      acc.username=acc.holder//computes and produce the account holder name
      .toLowerCase()
      .split(' ')//puts the names in array but separates it into more values
      .map(name=>name[0])//Map method takes the first letter in that array of each element
      .join('');//this one puts the chosen letters and puts them in form of a string
    })
  };
  createUsernames(accounts); 
  console.log(accounts);
  
  
  
  
  
  
  