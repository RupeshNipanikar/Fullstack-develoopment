/*const getSpendAlert = (amount) => {
    return `warning! you spent $${amount}`
}

console.log(getSpendAlert(150));
*/

/*const getSpendAlert = () => {
    return `warning! you spent more`
}

console.log(getSpendAlert());

*/


/*const getSpendAlert = (name, amount) => {
    return `hey! ${name} you just spent $${amount}`
}

console.log(getSpendAlert('rupesh', 150));

*/
/* if you have only one parameter brackects are not needed 
ie.  const getSpendAlert = amount => {
    return `warning! you spent $${amount}`
} this will work because we have only one parameter 
 but if you have 0 or 2 or more parameters we need bracekts*/


const getSpendAlert = amount => `warning! you have spent $${amount}` // if have one line of code only then this works
 
console.log(getSpendAlert(150));

