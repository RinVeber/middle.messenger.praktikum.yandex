const express = require('express');
const path = require('path');

const app = express()
const port = 3000

	
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, 'dist')));

app.use('/', (_, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.use('/*', (_, res) => {
  res.set('Content-Security-Policy', "default-src 'self'");
});

app.get("*", (req, res) => {
  res.status(404).send("404")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
