"use strict";

var express = require('express');

var router = express.Router();

var _require = require("openai"),
    OpenAI = _require.OpenAI;
/* GET home page. */


router.get('/', function (req, res, next) {
  res.render('index', {
    result: null
  });
});
router.post('/reply', function _callee(req, res) {
  var openai, completion;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          openai = new OpenAI({
            apiKey: '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'
          });
          _context.next = 3;
          return regeneratorRuntime.awrap(openai.chat.completions.create({
            messages: [{
              role: 'user',
              content: "I would give you 2 animals and a nigerian state...you are to generate a moral story about the 2 animals that reside in that state. The 2 animals and state are ".concat(req.body.animalInput, " and ").concat(req.body.stateInput)
            }],
            model: 'gpt-3.5-turbo'
          }));

        case 3:
          completion = _context.sent;
          res.render('index', {
            result: completion.choices[0].messages.content
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
});
module.exports = router;