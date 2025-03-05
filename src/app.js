const express = require('express')

const app = express()
const connectDB = require('./config/database')
const User = require('./models/user')

app.use(express.json()) // Middleware to parse JSON request bodies

app.post('/signup', async (req, res) => {
  const user = new User(req.body)
  try {
    await user.save()
    res.send('User created successfully')
  } catch (error) {
    res.status(500).send('Error creating user')
  }
})

// get user by email
app.get('/user', async (req, res) => {
  const userEmail = req.query.email
  try {
    console.log(userEmail)

    const user = await User.findOne({ email: userEmail })
    if (!user) {
      return res.status(404).send('User not found')
    } else {
      res.send(user)
    }
  } catch (error) {
    res.status(500).send('Error getting user')
  }
})

connectDB()
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(3000, () => {
      console.log('Server is running on port 3000')
    })
  })
  .catch((err) => {
    console.error('Database connection failed', err)
  })
