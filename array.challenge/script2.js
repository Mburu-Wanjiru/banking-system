//    Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
//    about their dog's age, and stored the data into an array (one array for each). For 
//    now, they are just interested in knowing whether a dog is an adult or a puppy.
//    A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
//    old.
//    Your tasks:
//    Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
//    ('dogsJulia' and 'dogsKate'), and does the following things:
//    1. Julia found out that the owners of the first and the last two dogs actually have 
//    cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
//    ages from that copied array (because it's a bad practice to mutate function 
//    parameters)
//    2. Create an array with both Julia's (corrected) and Kate's data
//    3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
//    is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 
//    �
//    ")
//    4. Run the function for both test datasets
//    Test data:
//    § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
//    § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

const juliaData=[3, 5, 2, 12, 7];
const kateData=[4, 1, 15, 8, 3];

 
const checkDogs=function(juliaData,kateData){
   // console.log(`julia Data= ${juliaData}`);
   // console.log(`Kate Data= ${kateData}`);
const correctedJuliaData=juliaData.slice(1,4);
//console.log(`Corrected Julia Data = ${correctedJuliaData}`);
const bothArray=[...correctedJuliaData,...kateData];
    //console.log(`All dogs =${bothArray}`);
bothArray.forEach(function(value,key,bothArray){
        const checker=value >= 3 ? 'an Adult' : 'a Puppy';
console.log(`Dog number ${key+1} is ${checker} and is ${value} year old. `)
    }) 
}

checkDogs(juliaData,kateData);


const checkdogs=function(dogsJulia,dogsKate){ 
const dogsjuliacorrected=dogsJulia.slice();
dogsjuliacorrected.splice(0,1);
dogsjuliacorrected.splice(-2);

const dogs=dogsjuliacorrected.concat(dogsKate);
console.log(dogs);

dogs.forEach(function(dog,i){
if(dog >=3){
    console.log(`Dog Num ${i+1} is an Adult and is ${dog} years old.`);
}
else{
    console.log(`Dog Num ${i+1} is a puppy and is ${dog} year old.`);
};
});
};

checkdogs([5,6,1,2,4,8,3,4], [8,5,4,1,2,3,5,1,,3,2,1]);

console.log(`................................................`)
const usernamefun=function(accountss){
    accountss.forEach(function(mov,i,arr){
        mov.user=mov.holder.toLowerCase().split(' ').map(function(arr){
           return  arr[0];
        })
    })
}
console.log(`................................................`);

/*Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4] */


const calcAverageHumanAge=function(ages){
    const InHumunAge=ages.map(function(current,i,arr){
        if (current<= 2){
            return 2 * current;
        }
        else if(current> 2) {
            return 16 + current * 4;
        }
    })
    console.log(InHumunAge);

    const AdultDogs=InHumunAge.filter(function(current,i,arr){
        return current>=18;
    })
    console.log(AdultDogs);

    const AverageAge=AdultDogs.reduce(function(accumilator,current,i,arr){
        return accumilator+current/arr.length;
    },0)
console.log(AverageAge);
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);


const calc=function(ages){
    const hum=ages.map(age=>(age<=2?2*age:16+age*4));
    const adul=hum.filter(age=>age>=18)
    console.log(hum);
    console.log(adul);

    const Avg=adul.reduce((acc,age)=>acc+age,0)/adul.length;
    console.log(Avg);
    const avg=adul.reduce((acc,age,i,arr)=>acc+age/arr.length,0);
    console.log(avg);
}
calc([5, 2, 4, 1, 15, 8, 3]);
calc([16, 6, 10, 5, 6, 1, 4]);







