import { NextFunction, Request, Response } from "express";
import HttpException from "../exceptions/HttpException";

export default function errorMiddleware(
  error: HttpException,
  request: Request,
  response: Response,
  next: NextFunction
) {
  const status = error.status || 500;
  const message = error.message || "something went wrong";
  response.status(status).send({ status, message });
}
