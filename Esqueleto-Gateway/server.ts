import express, { Request, Response} from "express";

import router from './routers/index';

console.log(router) // 1

const server = express();

// router.get('/products', (req, res, next) => productsServiceProxy(req, res, next));

server.use('/', router);

export default server;





