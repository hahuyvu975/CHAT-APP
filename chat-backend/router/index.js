const router = require('express').Router();
const auth = require('./auth');
router.get('/home', (req, res) => {
    res.send('Home screen');
});

router.use('/', auth);

module.exports = router