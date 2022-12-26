const connectToDb = require('./db');
const express = require('express');
// const router = express.Router();
var cors = require('cors') 
connectToDb()
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.use('/api/allusers', require('./routes/allusers'))



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})