import { Request, Response } from "express"
import { sendResetEmailTest } from "../utils/authUtils";

export let sendResetEmailRoute = async (req : Request, res: Response) => {
  await sendResetEmailTest();
  res.send("send reset email");
}