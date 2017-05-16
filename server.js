const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getFullYear', () => {
  return new Date().getFullYear()
});

app.get('/', (req, res) => {
  res.send({
    name: 'Vilde',
    likes: [
      'Fat',
      'Men'
    ]
  })
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    pageText: 'Habababa'
  });
});

app.get('/bad', (req, res) => {
  res.send({
    error: 'errorMessage'
  })
})
app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
