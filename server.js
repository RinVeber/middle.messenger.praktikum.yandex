import express from 'express';
import { resolve } from 'path';

const __dirname = resolve();

const app = express()
const port = 3000

	
app.set("view engine", "hbs");

app.use(express.static(resolve(__dirname, 'dist')));

app.use('/*', (_, res) => {
  res.status(200).sendFile(resolve(__dirname, 'dist/index.html'));
});

app.get("*", (req, res) => {
  res.status(404).send("404")
})

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})
