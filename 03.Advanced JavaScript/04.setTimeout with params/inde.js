function logAnswer(ans,points){
    console.log(`The answer is ${ans} of course! if you got that right give yourself +${points} points.`);
}

console.log("what is the capital of peru");

const questionTimer = setTimeout(logAnswer, 3000 , 'peru', 15)

document.getElementById('stop').addEventListener('click', function(){
    clearTimeout(questionTimer)
    console.log('cancelling....');
    
})