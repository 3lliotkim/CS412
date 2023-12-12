// routes/ps4.js
const express = require('express');
const router = express.Router();
const { getApiData } = require('../controllers/apiController');

router.route('/')
  .get((req, res) => {
    res.render('searchForm');
  })
  .post(getApiData);

module.exports = router;
