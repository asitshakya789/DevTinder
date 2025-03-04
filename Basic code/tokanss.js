const express = require('express')
const app = express()
const port = 3000

app.get('/admin/getalldata', (req, res) => {
  const tokan = 'asitkumar'
  const isautherized = tokan === 'aitkumar'
  if (isautherized) {
    res.send('All Data')
  } else {
    res.status(401).send('Not Authorized')
  }
})

app.get('/admin/deleteuser', (req, res) => {
  res.send('user has been deleted')
})
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
