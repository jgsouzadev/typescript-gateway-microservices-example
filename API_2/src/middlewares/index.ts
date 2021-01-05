import { Request, Response } from "express";

class middleware {
    async testIfUserIsValid (request: Request, response: Response) {
        console.log('... is true')
        response.send(true)
    }
}

export default middleware;