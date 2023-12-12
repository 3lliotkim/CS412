// controllers/apiController.js
const nodeFetch = require('node-fetch');
const request = require('request');
const config = require('../config');

function requestData(route, search) {
  const apiUrl = `${config.apiEndpoint}/weather?q=${search}&appid=${config.apiKey}`;

  switch (route) {
    case 'promise':
      return nodeFetch(apiUrl).then(response => response.json());
    case 'asyncawait':
      return nodeFetch(apiUrl).then(response => response.json());
    case 'callback':
      return new Promise((resolve, reject) => {
        request(apiUrl, (error, response, body) => {
          if (!error && response.statusCode === 200) {
            resolve(JSON.parse(body));
          } else {
            reject(error || response.statusCode);
          }
        });
      });
    default:
      throw new Error('Invalid route');
  }
}

exports.getApiData = (req, res) => {
  const { route, search } = req.body;

  requestData(route, search)
    .then(data => {
      res.render('result', { data });
    })
    .catch(error => {
      res.render('error', { error });
    });
};
