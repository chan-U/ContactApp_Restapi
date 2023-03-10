const express = require('express')
const { connectDb } = require('./config/dbConnection')
const { errorHandler } = require('./middlewares/errorHandler')
require('dotenv').config()

const app = express()

app.use(express.json())

app.get('/', (req, res)=>{
    res.status(200).send('Welcome')
})

const contactsRouter = require('./routes/contacts')
app.use('/api/contacts', contactsRouter)
app.use(errorHandler)

const PORT = process.env.PORT || 8081

connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server started on port ${PORT}`);
    })
}).catch((err)=>{
    console.log(err)
})
