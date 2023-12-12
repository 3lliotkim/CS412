// routes/ps4.js
const express = require('express');
const router = express.Router();
const { getApiDataPromise, getApiDataAsyncAwait, getApiDataCallback } = require('../controllers/apiController');

router.get('/', (req, res) => {
  res.render('searchForm');
});

router.post('/promise', getApiDataPromise);

router.post('/asyncawait', getApiDataAsyncAwait);

router.post('/callback', getApiDataCallback);

module.exports = router;