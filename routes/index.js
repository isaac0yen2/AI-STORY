var express = require('express');
var router = express.Router();
const {
  OpenAI
} = require("openai");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    result: null,
    string:null
  });
});

router.post('/reply', async (req, res) => {
  const openai = new OpenAI({
    apiKey: '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'
  });
  const completion = await openai.chat.completions.create({
    messages: [{
      role: 'user',
      content: `I would give you 2 animals and a nigerian state...you are to generate a moral story about the 2 animals that reside in that state. The 2 animals and state are ${req.body.animalInput} and ${req.body.stateInput}. it shouldn't be more than 200 words. Be very detailed about this information and if the input isnt a nigerian state or a real animal, consider that it may be a typographical error and use your discression to give an output. If your output involves calling a non nigerian state or a city that is not a state, do not base the story on the given state but on another state`
    }],
    max_tokens:500,
    model: 'gpt-3.5-turbo',
  });


  res.render('index', {
    result: completion.choices[0].message.content,
    string:'generate another story'
  })


})

module.exports = router;