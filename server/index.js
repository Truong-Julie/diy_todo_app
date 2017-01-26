const express = require('express')
const app = express()
if (process.env.NODE_ENV === 'production') {
  const port = 80
} else {
  const port = 3000
}

app.use('/', express.static(`${__dirname}/../client`))

app.listen(port, () => {
  console.log(`Listening on localhost:${port}`)
})
