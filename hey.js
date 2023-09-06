let OpenAI = require('openai')
let jjky4567ugsyhiiajhfwkkyurnnyuu222uajcxbzgjuzjDDvhgdj = 'INSERT_YOUR_CHAT-GPT_3.5_TURBO_MODEL_API_KEY'
const openai = new OpenAI({
  apiKey: jjky4567ugsyhiiajhfwkkyurnnyuu222uajcxbzgjuzjDDvhgdj
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices[0].messages.content);
}

main();
