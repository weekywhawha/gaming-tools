import { NextFunction, Request, Response } from "express";

export interface Info {
   (req: Request, res: Response, next: NextFunction): Promise<void>
}