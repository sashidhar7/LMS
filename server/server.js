import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './configs/mongodb.js'
import { clerkWebhooks } from './controllers/webhooks.js'

// Initialize Express
const app = express()

// connect to database

await connectDB()

//MiddleWares
app.use(cors())

//Routes
app.get('/',(req,res)=>{
    res.send("API WORKING")

})

app.post('/clerk',express.json(),clerkWebhooks)


//PORT
const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server is Running on Port ${PORT}`)
})
