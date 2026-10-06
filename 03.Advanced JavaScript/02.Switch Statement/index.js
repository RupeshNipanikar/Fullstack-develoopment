function selectItem(item) {
    let price = 0

    switch (item) {
        case 'coffee':
            price = 2
            break;
        case 'sandwiches':
            price = 3
            break
        case 'salad':
            price = 4
            break
        case 'Lemon Cake':
            price = 3
            break
        default:
            return `sorry we dont sell ${item}`
            
    }
    return `you selected ${item}. That will be $${price}`
}

console.log(selectItem('burger'));
 