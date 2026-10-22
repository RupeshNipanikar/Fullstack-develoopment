import "dotenv/config"
import OpenAI from 'openai'

const client = new OpenAI({
    dangerouslyAllowBrowser: true
});

console.log(process.env.OPENAI_API_KEY)