import { Request, Response } from "express";
import { authenticateTest, enableUserTest } from "../utils/authUtils";

export let enableUserRoute = async (req: Request, res: Response) => {
  let enable = req.query.enable as string;
  await enableUserTest(enable === "true");
  res.send("OK"); 
};
