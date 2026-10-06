let randomNumber1 = Math.random()

// console.log(randomNumber1);



// Math.random() generates a random number from 0 to 1 (not inclusive of 1 / 0.9999999999)

let randomNumber = Math.random() * 6

// console.log(randomNumber);


/*
now the random number wil be from 0 to 6(5.99999999)

from: 0
to: 5.999999*/

let floorRandomNumber = Math.floor(Math.random() * 6) + 1//when add +1 it will avoid giving 0

console.log(floorRandomNumber);

/* the possible numbers now are 
1
2
3
4
5  */  