const express = require('express');
const bodyParser = require('body-parser');
const path = require('path'); // Add this line
const ps4Router = require('./routes/ps4');

const app = express();
const port = 3000;

// Set the view engine to use Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/ps4', ps4Router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
