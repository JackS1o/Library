import { Request, Response, NextFunction } from "express";
import { ApiError } from "../errors/catalog";

const errorHandler = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode || 500;
  res.status(statusCode).json({ message: error.message });
  next();
};

export default errorHandler;
