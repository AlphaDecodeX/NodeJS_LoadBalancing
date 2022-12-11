const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Response from Server 1 Endpoint 1')
})

app.get('/test', (req, res) => {
    res.send('Response from Server 1 Endpoint 2')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})