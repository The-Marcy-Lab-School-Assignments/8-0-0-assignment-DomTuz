const express = require('express');
const app = express();

// controllers
const serveIndex = (req, res, next) => {
  res.sendFile(__dirname + '/index.html');
}
const serveCool = (req, res, next) => {
  res.send('<h1>Cool</h1>');
}
const serveHello = (req, res, next) => {
    const name = req.query.name || "stranger";
    res.send(`hello ${name}`);
  }
const serveData = (req, res, next) => {
  const data = [{ name: 'ben' }, { name: 'zo' }, { name: 'carmen' }];
  res.send(data);
}

// endpoints
app.get('/', serveIndex);
app.get('/Cool', serveCool);
app.get('/api/hello', serveHello);
app.get('/api/data', serveData);

// listen
const port = 8080;
app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 