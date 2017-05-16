const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');


app.use((req, res, next) => {
  var now = new Date().toString();
  var activity = `${now}: ${req.method} ${req.url}\n`
  fs.appendFile('server-log.txt', activity, () => {
    console.log(activity)
  });
  next();
});

app.use((req, res, next) => {
  res.render('maintenance.hbs')
})

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getFullYear', () => {
  return new Date().getFullYear()
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
})

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
