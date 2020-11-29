import { Request, Response } from "express"
import { registerTest, resetPasswordTest } from "../utils/authUtils";

export let resetPasswordRoute = async (req : Request, res: Response) => {
  let token = req.query.token as string;
  await resetPasswordTest(token);
  res.send("register");
}