try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', 
        {
        method:'POST',
        body:JSON.stringify({
            title:"Holiday Nightmare",
            body:"When i was kidnapped",
            userId: 100
        }),
        headers:{
            'Content-Type': 'application/json'
        }
    })
    
    if(!response.ok){
        throw new Error('There was a problem with the API')
    }
    const data = await response.json()
    console.log(data);
    

}catch(err){
    console.log(err);
    
}finally{
    console.log("Operation Completed");
    
}