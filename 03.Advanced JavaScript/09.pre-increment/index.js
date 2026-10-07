let currentTicketNumber = 0

function getNextTicketNumber(){

    return ++currentTicketNumber
        // for pre-decrement we can use --currentTicketNumber
}

console.log(`Guest 1, your ticket number is ${getNextTicketNumber()}`);
console.log(`Guest 2, your ticket number is ${getNextTicketNumber()}`);
console.log(`Guest 3, your ticket number is ${getNextTicketNumber()}`);
