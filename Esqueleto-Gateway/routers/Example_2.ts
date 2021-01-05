import { NextFunction, Request, Response } from "express";

const httpProxy = require('express-http-proxy');

const express = require("express")

const secondaryApi = express.Router();

const thisApi = httpProxy("http://localhost:3002");

secondaryApi.get('/two', (request: Request, response: Response) => {
    thisApi(request, response)
});

secondaryApi.get('/two/works', (request: Request, response: Response) => {
    thisApi(request, response)
});


module.exports = secondaryApi;