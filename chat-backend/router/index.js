const router = require('express').Router();
const auth = require('./auth');
const user = require('./user')
const chat = require('./chat')

router.get('/home', (req, res) => {
    res.send('Home screen');
});

router.use('/', auth);
router.use('/users', user);
router.use('/chats', chat);

module.exports = router