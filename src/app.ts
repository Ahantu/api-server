import express, {Request, Response, NextFunction} from "express"
import cors from "cors"
import helmet from "helmet"
import config from "./config"
import rateLimit from "express-rate-limit"
import { errorMiddleware } from "./middlewares/error"
import { loggerMiddleware } from "./middlewares/logging"
import { connectMongo } from "./db/mongo"
import { logger } from "./util/logger"
import { router } from "./routes"

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(helmet())
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 200 
}))
app.use(helmet.hidePoweredBy())
app.use(helmet.contentSecurityPolicy())
app.use(cors())
app.set("port", config.port)
connectMongo().then(connection => {
    logger.info(`connected to Mongo on `)
})
app.use(router)
app.use(loggerMiddleware)
app.use(errorMiddleware)

export default app
