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

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on port ${port}`);
});