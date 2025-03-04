const express = require('express')
const app = express()
const port = 3000

app.use('/', (req, res, next) => {
  console.log('Middleware for all requests')
  next()
})

// First middleware for `/user`
app.get('/user', (req, res, next) => {
  console.log("hey, I'm Asit Kumar and this is the 1st middleware")
  next()
})

// Second middleware for `/user`
app.get('/user', (req, res, next) => {
  res.send('Hello, I am Asit Kumar')
  // No need for `next()` after `res.send()`, as it ends the response cycle.
})

// Third middleware (will not execute due to `res.send()` above)
app.get('/user', (req, res, next) => {
  console.log("hey, I'm Asit Kumar and this is the 3rd middleware")
  next()
})

// Fourth middleware (won't execute either)
app.get('/user', (req, res, next) => {
  console.log("hey, I'm Asit Kumar and this is the 4th middleware")
  next()
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
