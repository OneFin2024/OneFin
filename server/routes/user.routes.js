const express = require('express');
const userService = require('../serv');
const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const newUser = await userService.register(req.body.username, req.body.password);
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const token = await userService.login(req.body.username, req.body.password);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;