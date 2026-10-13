async function getSuggestion(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?id=1')
    const data = await response.json()
    console.log(data)
    
}
getSuggestion()