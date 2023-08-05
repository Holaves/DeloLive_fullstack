import express from 'express'
import mongoose from 'mongoose'
import NewsRouter from './Routers/NewsRouter.js'
import OffersRouter from './Routers/OffersRouter.js'
import fileUpload from 'express-fileupload'
import CitiesRouter from './Routers/CitiesRouter.js'
import AuthRouter from './Routers/AuthRouter.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { configDotenv } from 'dotenv'
import errorMiddleware from './middlewares/error-middleware.js'
configDotenv()

const PORT = process.env.PORT || 5500
const app = express()

app.use(express.json())
app.use(express.static('backend/static'))
app.use(fileUpload({}))
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use('/api', NewsRouter)
app.use('/api', OffersRouter)
app.use('/api', CitiesRouter)
app.use('/api/auth', AuthRouter)
app.use(errorMiddleware)

const startServer = async () => {
    try{
        app.listen(PORT, () => console.log(`Server starting on port - ${PORT}`))
        await mongoose.connect(
            process.env.DB_URL,
            {useUnifiedTopology: true,
            useNewUrlParser: true}
            )
        console.log('DB connect')
    } catch(e){
        console.log(e)
    }
}

startServer()