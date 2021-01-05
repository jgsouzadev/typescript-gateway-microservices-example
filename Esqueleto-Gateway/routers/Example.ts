import { NextFunction, Request, Response } from "express";

const httpProxy = require('express-http-proxy');

const express = require("express")

const exampleRouter = express.Router();

const thisApi = httpProxy("http://localhost:3001");

exampleRouter.get('/method2', (request: Request, response: Response) => {
    console.log('oi')

    thisApi(request, response)
});

exampleRouter.get('/', (request: Request, response: Response) => {
    console.log('oi')

    thisApi(request, response)
});


module.exports = exampleRouter;