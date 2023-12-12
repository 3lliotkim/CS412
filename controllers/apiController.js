const request = require('request');
const nodeFetch = require('node-fetch');

// Load your config file
const config = require('../config');

// Wrapper function for the deprecated 'request' package using Promise
function requestPromise(url) {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve(JSON.parse(body));
      } else {
        reject(error || response.statusCode);
      }
    });
  });
}

// Route handler using Promises
exports.getApiDataPromise = (req, res) => {
  const apiUrl = `${config.apiEndpoint}/weather?q=${req.body.search}&appid=${config.apiKey}`;
  nodeFetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      res.render('result', { data });
    })
    .catch(error => {
      res.render('error', { error });
    });
};

// Route handler using async/await with 'node-fetch'
exports.getApiDataAsyncAwait = async (req, res) => {
  const apiUrl = config.apiEndpoint;
  try {
    const response = await nodeFetch(apiUrl);
    const data = await response.json();
    res.render('result', { data });
  } catch (error) {
    res.render('error', { error });
  }
};

// Route handler using a callback with the 'request' package
exports.getApiDataCallback = (req, res) => {
  const apiUrl = config.apiEndpoint;
  request(apiUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.render('result', { data: JSON.parse(body) });
    } else {
      res.render('error', { error: error || response.statusCode });
    }
  });
};
