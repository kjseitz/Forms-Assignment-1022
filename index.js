const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/submit', (req, res) => {
  const { first_name, last_name, email } = req.body;

  res.send(
    `Server received: First Name - ${first_name}, Last Name - ${last_name}, Email - ${email}`
  );
});

app.listen(3000);
