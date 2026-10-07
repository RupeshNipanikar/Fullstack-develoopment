function checkUsername(userName) {
    if(userName){
        console.log(userName);
        
    }else{
        throw new Error('no Username provided'); 
        console.log("did not execute"); // throw keyword will end the exection 
        
        
    }
    
}

checkUsername()