var express = require('express');
var router = express.Router();
router.use('/',require('./home'))
module.exports = router;