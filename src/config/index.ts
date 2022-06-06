import dotenv from "dotenv";
import { Config } from "../interfaces";

const envFound = dotenv.config({});


const int = (val: string | undefined, num: number): number =>
    val ? (isNaN(parseInt(val)) ? num : parseInt(val)) : num;

const string = (val: string | undefined, str: string): string => {
    if (val) return val
    return str
}

const dev: Config = {
    port: int(process.env.PORT, 3000),
    mongoURI: string(process.env.MONGO_URI, 'mongodb://localhost:27017/rethink'),
    googleClientId: string(process.env.GOOGLE_CLIENT_ID, ''),
    googleClientSecret: string(process.env.GOOGLE_CLIENT_SECRET, '')
}


const prod = {
    port: int(process.env.PORT, 3000),
    mongoURI: string(process.env.MONGO_URI, 'mongodb://localhost:27017/rethink'),
    googleClientId: string(process.env.GOOGLE_CLIENT_ID, ''),
    googleClientSecret: string(process.env.GOOGLE_CLIENT_SECRET, '')
}
const test = {
    port: int(process.env.PORT, 3000),
    mongoURI: string(process.env.MONGO_URI, 'mongodb://localhost:27017/rethink'),
    googleClientId: string(process.env.GOOGLE_CLIENT_ID, ''),
    googleClientSecret: string(process.env.GOOGLE_CLIENT_SECRET, '')
}

let config

switch (process.env.NODE_ENV) {
    case "PRODUCTION":
        config = prod
        break
    case "DEVELOPMENT":
        config = dev
        break
    case "TESTING":
        config = test
        break
    default:
        config = dev

}

export default Object.freeze(config)