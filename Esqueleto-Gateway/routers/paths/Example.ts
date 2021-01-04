import { NextFunction, Request, Response } from "express";

const httpProxy = require('express-http-proxy');

const express = require("express")

const exampleRouter = express.Router();

  
const exampleApi = httpProxy("http://localhost:3001");

//router.get('/', (request: Request, response: Response) => response.send('Hello Gateway API'));

exampleRouter.get('/', (request: Request, response: Response) => {
    console.log('oi')

    exampleApi(request, response)
});


export default exampleRouter;