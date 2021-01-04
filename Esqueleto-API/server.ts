import express, { Request, Response} from "express";

import routes from "./src/routers/index";

const server = express();

server.use(routes);

export default server;