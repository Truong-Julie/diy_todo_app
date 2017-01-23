const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static(`${__dirname}/../client`))

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`)
})
