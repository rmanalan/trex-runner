const express = require('express')
const app = express()
const pino = require('pino-http')({
  useLevel: 'info'
})

const port = 3000

app.use(pino)
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Toggle Runner listening at http://localhost:${port}`)
})
