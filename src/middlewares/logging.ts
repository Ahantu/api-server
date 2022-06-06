import { NextFunction, Request, Response } from "express";
import { logger } from "../util/logger";



export const loggerMiddleware = async(req:Request, res:Response, next:NextFunction) => {
    logger.info(`METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        logger.info(`METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    })

    next();
}