import { ErrorResponse } from '../interfaces'
import {Request, Response, NextFunction} from 'express'
import {logger} from "../util/logger"


export const errorMiddleware = (err:ErrorResponse, req:Request, res:Response, next:NextFunction) => {
    logger.error(err.message)
    res.status(err.status || 500).json({
        success:false,
        error:err.message
    })

}
