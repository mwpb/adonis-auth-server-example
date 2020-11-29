import { Request, Response } from "express";
import { authenticateTest, changeEmail } from "../utils/authUtils";

export let changeEmailRoute = async (req: Request, res: Response) => {
  let oldEmail = req.query.oldEmail as string;
  let newEmail = req.query.newEmail as string;
  console.log(oldEmail);
  
  await changeEmail(oldEmail, newEmail);
  res.send("change email"); 
};
