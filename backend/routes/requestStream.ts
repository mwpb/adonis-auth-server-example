import { Request, Response } from "express";

export let openEventStream = (res: Response) => {
  const headers = {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  };
  res.writeHead(200, headers);
  res.write("\n\n");

  setInterval(() => {
    res.write("\n\n");
  }, 60 * 1000);
};

let activeResponseStreams:Response[] = [];

export let subscribeRequests = async (req: Request, res: Response) => {
  console.log("Hit subscribe requests");

  openEventStream(res);

  activeResponseStreams.push(res);
};
