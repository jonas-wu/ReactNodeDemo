var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  res.send([
    {
      name: 'admin', password: '123456',
    },
    {
      name: 'test', password: '1234',
    }
  ]);
});

module.exports = router;
