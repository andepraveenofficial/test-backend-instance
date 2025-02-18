const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    uptime: process.uptime(),
    message: 'Server is running smoothly'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})