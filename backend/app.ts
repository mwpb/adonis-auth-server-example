import express, { Request, Response } from "express";
import http from "http";
import WebSocket from "ws";
import { authenticateRoute } from "./routes/authenticateRoute";
import { changeEmailRoute } from "./routes/changeEmailRoute";
import { enableUserRoute } from "./routes/enableUserRoute";
import { registerRoute } from "./routes/registerRoute";
import { resetPasswordRoute } from "./routes/resetPassword";
import { sendResetEmailRoute } from "./routes/sendResetEmail";

const app = express();
app.use(express.static("dist/"));

app.get("/broadcast", (req: Request, res: Response) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send("A broadcast from the server");
    }
  });
});

app.get("/register", registerRoute);
app.get("/authenticate", authenticateRoute);
app.get("/sendResetEmail", sendResetEmailRoute);
app.get("/resetPassword", resetPasswordRoute);
app.get("/enableUser", enableUserRoute);
app.get("/changeEmail", changeEmailRoute);


const server = http.createServer(app);

const wss = new WebSocket.Server({ noServer: true });
wss.on("connection", (ws, req) => {
  console.log(`Connected to client: ${req.connection.remoteAddress}.`);
});
const port = 8080;
server.listen(port, () => {
  console.log(`Listening on port ${port}.`);
});

server.on("upgrade", (request, socket, head) => {
  wss.handleUpgrade(request, socket, head, (socket) => {
    wss.emit("connection", socket, request);
  });
});