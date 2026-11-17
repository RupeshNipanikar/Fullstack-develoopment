import { log } from "console";
import dotenv from "dotenv"
import OpenAI from "openai";


import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
    path: path.resolve(__dirname, '../.env')
});

console.log(
    process.env.OPENAI_API_KEY
        ? "API KEY FOUND"
        : "API KEY NOT FOUND"
);

const openai = new OpenAI({

})

const messages = [
    {
        role:'system',
        content: 'you are a helpful assistant. your words are 100 words maximum. Explain me like i am 10yrs old'
    },
    {
        role:'user',
        content:'What is content computing?'
    }
]

const response = await openai.chat.completions.create({
    model:'gpt-3.5-turbo',
    messages: messages
})

console.log(response);
