import express from 'express'
import mongoose from 'mongoose'
import NewsRouter from './Routers/NewsRouter.js'
import OffersRouter from './Routers/OffersRouter.js'
import fileUpload from 'express-fileupload'


const DB_URL = `mongodb+srv://Holaves:Good55555@delolivecluster.r6alzjc.mongodb.net/?retryWrites=true&w=majority`

const PORT = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.static('backend/static'))
app.use(fileUpload({}))
app.use('/api', NewsRouter)
app.use('/api', OffersRouter)

const startServer = async () => {
    try{
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log(`Server starting on port - ${PORT}`))
    } catch(e){
        console.log(e)
    }
}

startServer()

// 



