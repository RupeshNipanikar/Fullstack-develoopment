function getWeather(){
    return "Today's weather is warm and sunny"
}
console.log(getWeather());

console.log(getNews());

function getNews() {
    return "A new swimming pool has opened in the town center..."
}

console.log(trafficInfo);
let trafficInfo = 'all roads are busy right now'
//variable(var) and function declaration are moved on the top of their containing scope during the compilation phase, before code exectuion.
// let and const are also moved to top but are not initalized so javaScript throws error