import "dotenv/config"
import OpenAi from 'openai'

const openai = new OpenAi({

})
const messages = [
    {
        role: 'sytsem',
        content: 'you are a helpful general knowledge report'
    },
    {
        role: 'user',
        content: 'Who invented television?'
    }
]

const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: messages
    
})

console.log(response);
