import express from "express"
import path from "path"
import { fileURLToPath } from "url"


const app = express()
const port = 3000

app.use(express.static('dist'));
const __dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
