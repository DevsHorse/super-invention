const path = require('path')
const express = require('express')
const cors = require('cors')
const cardsRoute = require('./routes/cardsRoute')

const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())
app.use('/api', cardsRoute)

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'))
})

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`)
})
