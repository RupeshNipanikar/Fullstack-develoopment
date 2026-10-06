let sentence = ["hello" ,"my", "name", "is", "Rupesh"]
let greetingEl = document.getElementById("greeting-el")

for(let i = 0; i < sentence.length; i++)
{
    greetingEl.textContent += sentence[i] + " "
}