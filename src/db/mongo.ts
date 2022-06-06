import mongoose from "mongoose"
import config from "../config"

export const connectMongo = () => {
    return mongoose.connect(config.mongoURI)
}