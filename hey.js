let OpenAI = require('openai')
const openai = new OpenAI({
  apiKey: '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'
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });

  console.log(completion.choices[0].messages.content);
}

main();