const Message = require('../models/message');

const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  const messages = await Message.find();
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/new', async (req, res) => {
  const { authorName, messageText } = req.body;
  const message = new Message({
    text: messageText,
    user: authorName,
    added: new Date(),
  });
  await message.save();
  res.redirect('/');
});

module.exports = router;
