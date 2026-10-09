// function speedWarning(speed){
//     return `You are going at ${speed} mph!`
// }

// console.log(speedWarning(40))

/*
Challenge
1. Refactor this function to use an arrow function.
2. Make sure you write the least code possible.
*/

// const speedWarning = speed => `you are going at ${speed}`
// console.log(speedWarning(40));

/*
Challenge
1. Refactor this function so it only warns drivers 
   who are going over the speed limit.
2. The function now needs to take in two parameters. 
   The first is the speed limit, the second is the 
   driver's actual speed.
*/


// const speedWarning = (speedLimit, actualSpeed ) =>  speedLimit < actualSpeed  ? `you are going at ${actualSpeed}kmph , Speed limit is ${speedLimit}kmph GO SLow`: `your speed is ${actualSpeed}kmph`   //this works but hard to read

const speedWarning = (speedLimit, actualSpeed) => {
    if(actualSpeed > speedLimit){
        return `you are going at ${actualSpeed}kmph , Speed limit is ${speedLimit}kmph GO SLow`
    }else{
        return "your speed is "+actualSpeed+"kmph"
    }
}


console.log(speedWarning(80, 250));
