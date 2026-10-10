//This cahllenge was taken from ChatGpt 


import { properties } from "./propertiesArr.js";
const filterBtn = document.getElementById('filter-btn')
const maxPrice = document.getElementById('max-price')
const propertyCount = document.getElementById('property-count')
const showAllBtn = document.getElementById('show-all-btn')
const propertieContainer=document.getElementById('properties-container')

showAllBtn.addEventListener("click", () =>{
    propertieContainer.innerHTML= getProperties(properties)
    propertyCount.textContent = `Properties found: ${properties.length}`
})


filterBtn.addEventListener("click", () =>{
    const maxPriceValue = Number(maxPrice.value)    

    const filterProperties = properties.filter(property => property.price <= maxPriceValue)
    
    
    
    propertieContainer.innerHTML= getProperties(filterProperties)
    propertyCount.textContent=`Properties found: ${filterProperties.length}`
})



function getProperties(propertyfn){
    return propertyfn.map(property =>{
        const {location, price, comment, roomsM2, image} = property
        const totalRoomsSize=roomsM2.reduce((total,current)=>total+current)
        
        return `<section class="card">
    <img src="${image}">
    <div class="card-right">
        <h2>${location}</h2>
        <h3>€${price.toLocaleString()}</h3>
        <h3>Total area:${totalRoomsSize} m²</h3>
        <p>${comment}</p>
    </div>
</section>`

    }).join('')

}

propertieContainer.innerHTML = getProperties(properties)
        propertyCount.textContent = `Properties found: ${properties.length}`

