 export default function getStockData() {
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: Number((Math.random()*3).toFixed(2)) , 
        // time:`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}` 11:9:3 will not place 0 automatically
        time:new Date().toLocaleTimeString() //11:09:04 will add zero automatically like our local time 
    }
}

//export default getStockData