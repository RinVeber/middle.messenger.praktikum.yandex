import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express()
const port = 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

	
app.set("view engine", "hbs");

app.use(express.static(`${__dirname}/dist/`));

app.get('*', function (request, response) {
	response.sendFile(path.resolve(__dirname + '/dist/index.html'));
});


app.get("*", (req, res) => {
  res.status(404).send("404")
})

app.listen(port, () => {
  console.log(`Example app listening on port: ${port}`)
})
