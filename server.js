import express from "express"

const app = express()
const port = 3000

app.use(express.static('dist'));
	
app.set("view engine", "hbs");

app.get("/", (req, res) => {
  res.status(200).send("main")
})

app.get("*", (req, res) => {
  res.status(404).send("404")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})