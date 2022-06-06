import { Request, NextFunction, Response } from "express";
import joi, { number } from "joi";
import {BadRequest} from "http-errors"

export const locationValidator = async function (
    req: Request,
    res:Response,
    next: NextFunction
  ) {
    try {
      const schema = joi.object({
        lat: joi.number().required(),
        lng: joi.number().required(),
      });
      await schema.validateAsync(req.body);
      next();
    } catch (e) {
        // @ts-ignore
        next(new BadRequest(e.message))
    }
  };