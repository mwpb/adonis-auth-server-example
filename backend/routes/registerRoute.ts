import { Request, Response } from "express"
import { registerTest } from "../utils/authUtils";

export let registerRoute = async (req : Request, res: Response) => {
  await registerTest();
  res.send("register");
}