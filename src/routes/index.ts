import { NextFunction, Request, Response, Router } from "express";
import { logger } from "../util/logger";
import { queryByLocation } from "../controllers";
import { locationValidator } from "../middlewares/validate";

export const router = Router();

router.get("/", async (req: Request, res: Response) => {
  res.status(200).json({
    status: "alive",
  });
});

router.post("/", async (req: Request, res: Response) => {
  res.status(200).json({
    status: "alive",
  });
});

router.post(
  "/api/boundaries",
  locationValidator,
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const results = await queryByLocation(req.body.lat, req.body.lng);
      res.status(200).json(results);
    } catch (e) {
      next(e);
    }
  }
);
