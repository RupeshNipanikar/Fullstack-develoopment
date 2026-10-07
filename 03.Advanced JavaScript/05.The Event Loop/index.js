// get the starting timestamp
const start = performance.now()

setTimeout(() => {
    //get the ending timestamp
    const end = performance.now()
    console.log(`Execution time: ${end - start} millisecond`)
    
}, 1000);
for (let i = 0; i < 1000000; i++) {
    let answer = i * 2000000 / 67.8 * (45.7 / 3.2)
    
}


//Time without slow executing code : 1001.2214000000001
//time with slow executing code : 1002.9351 millisecond