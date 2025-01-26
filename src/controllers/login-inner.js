const { CLIENT_URL } = require('../config');

const router = require('express').Router();

router.post("/", async (req, res) => {
  try {
    const { username, password } = req.body || {};
    console.log(username, password);
    const token = "token";
    return res.status(200).send({token});

  } catch (error) {
    return res.status(400).redirect(`${CLIENT_URL}/auth?token=none`);
  }
});

module.exports = router;