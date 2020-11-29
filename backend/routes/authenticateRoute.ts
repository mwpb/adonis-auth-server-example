import { Request, Response } from "express";
import { authenticateTest } from "../utils/authUtils";

export let authenticateRoute = async (req: Request, res: Response) => {
  await authenticateTest();
  res.send("OK"); 
};
