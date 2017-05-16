const express = require('express');

var app = express();

app.get('/', (req, res) => {
  // res.send('<h1>hello Express</h1>');
  res.send({
    name: 'Vilde',
    likes: [
      'Carbs',
      'Men'
    ]
  })
});

app.get('/about', (req, res) => {
  res.send('About page')
});

app.get('/bad', (req, res) => {
  res.send({
    error: 'errorMessage'
  })
})
app.listen(3000);
