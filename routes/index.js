const Message = require('../models/message');

const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  const messages = await Message.find();
  const formattedMessages = messages.map((message) => {
    return {
      text: message.text,
      user: message.user,
      added: message.formattedDate,
    };
  });
  res.render('index', {
    title: 'Mini Messageboard',
    messages: formattedMessages,
  });
});

router.get('/new', (req, res) => {
  res.render('form');
});

router.post('/new', async (req, res, next) => {
  const { authorName, messageText } = req.body;
  try {
    const message = new Message({
      text: messageText,
      user: authorName,
      added: new Date(),
    });
    await message.save();
    res.redirect('/');
  } catch (err) {
    next(err);
  }
});

module.exports = router;
