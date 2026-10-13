try{
    const response = await fetch('https://dog.ceo/api/breeds/images/random')
    if(!response.ok){
        throw new Error('There was  a problem with the API')
        
    }
    const data = await response.json()
    console.log(data);

}catch(err) {
        console.log(err);
        //the catch block captures the new error thrown above if we remove the above log line the error will not be  shown
        
        
}finally{
    console.log("The Operation is Completed");
    
}