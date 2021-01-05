import express, {  Request, Response} from "express";

const router = express.Router();

const exampleRouter = require('./routers/Example')
const secondaryRouter = require('./routers/Example_2')

const server = express();
const ACTUAL_API_PATH = '/v1'
server.use(ACTUAL_API_PATH+'/example', exampleRouter);
server.use(ACTUAL_API_PATH + '/secapi', secondaryRouter);

export default server;





