const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/new', (req, res) => {
  const { authorName, messageText } = req.body;
  messages.push({
    text: messageText,
    user: authorName,
    added: new Date(),
  });
  res.redirect('/');
});

module.exports = router;
