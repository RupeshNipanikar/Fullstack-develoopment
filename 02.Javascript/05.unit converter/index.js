let lenConv = document.getElementById("length-converter")
let volConv = document.getElementById("volume-converter")
let massConv = document.getElementById("mass-converter")
let inputEl = document.getElementById("input-txt")
const convBtn = document.getElementById("convert-btn")



convBtn.addEventListener('click', function(){
    let value = Number(inputEl.value)

    let length = `${value} meters = ${(value* 3.28084).toFixed(3)} feet | ${value} feet = ${(value/ 3.28084).toFixed(3)} meters`
    lenConv.innerHTML = length
    
    let volume = `${value} liters = ${(value * 0.264172).toFixed(3)} gallons | ${value} gallons = ${(value* 3.78541).toFixed(3)} liters`
    volConv.innerHTML = volume

    let mass = `${value} kilos = ${(value * 2.20462).toFixed(3)} pounds | ${value} pounds = ${(value / 2.20462).toFixed(3)} kilos`
    massConv.innerHTML = mass
})